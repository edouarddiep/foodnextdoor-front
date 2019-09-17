import { Component, OnInit } from '@angular/core';
import { AuthenticationServiceService } from 'src/app/service/authentication-service.service';
import { VendorService } from 'src/app/service/vendor.service';
import { Vendor } from 'src/app/model/Vendor.model';
import { Router } from '@angular/router';
import { FoodService } from 'src/app/service/food.service';
import { CustomerService } from 'src/app/service/customer.service';
import { Customer } from 'src/app/model/Customer.model';
import { DetailedOrder } from 'src/app/model/DetailedOrder.model';
import { OrderService } from 'src/app/service/order.service';
import { Route } from 'src/app/routes';
import { Content } from 'src/app/model/Content.model';
import { Dish } from 'src/app/model/Dish.model';
import { combineLatest } from 'rxjs';
import { User } from 'src/app/model/User.model';
import { Order } from 'src/app/model/Order.model';

@Component({
  selector: 'app-order-manager',
  templateUrl: './order-manager.component.html',
  styleUrls: ['./order-manager.component.scss']
})
export class OrderManagerComponent implements OnInit {

  totalCost;
  detailedOrders = new Array<DetailedOrder>();
  detailedOrder: DetailedOrder;
  contents = new Array<Dish>();
  fullContents = new Array<DetailedOrder>();
  user = localStorage.getItem('user');
  vendor: Vendor;
  do: DetailedOrder;
  currentOrder: Order;
  currentDetailedOrder: DetailedOrder;
  currentOrderItems = new Array<Dish>();

  displayedColumns: string[] = ['name', 'quantity', 'price'];

  states: string[] = ['En préparation', 'Prête', 'Récupérée'];

  constructor(private authService: AuthenticationServiceService, private vendorService: VendorService,
    private customerService: CustomerService, private router: Router, private orderService: OrderService,
    private foodService: FoodService) { }

  async ngOnInit() {
    this.user = this.authService.getUserId();
    if (this.user !== null) {
      await this.buildOrderHistory();
    } else {
      this.router.navigate(['home']);
    }
  }

  isCustomer() {
    return this.authService.isCustomer();
  }

  goHome() {
    this.router.navigate([Route.HOME]);
  }

  getTotalCost(contents: Array<Dish>) {
    this.totalCost = 0;
    contents.forEach(item => {
      this.totalCost = this.totalCost + item.price;
    });
    console.log(this.totalCost);
  }

  buildOrderHistory() {
    if (this.isCustomer()) {
      this.customerService.getCustomerDetails(parseInt(this.user)).subscribe(customer => this.load(customer));
    } else {
      this.vendorService.getVendorDetails(parseInt(this.user)).subscribe(vendor => this.load(vendor));
    }
  }

  load(loggedUser: any) {
    this.orderService.getDetailedOrdersByLoggedUser(loggedUser).subscribe(detailedOrders => {
      this.detailedOrders = detailedOrders;
      this.detailedOrders.forEach(detailedOrder => {
        this.orderService.getContentsByDetailedOrder(detailedOrder).subscribe(async contents => {
          this.do = DetailedOrder.createDetailedOrder(detailedOrder.id, detailedOrder.date,
            detailedOrder.isPayed, detailedOrder.customer, detailedOrder.state, detailedOrder.vendor, contents);
          this.fullContents.push(this.do);
          await this.getTotalCost(contents);
        });
      });
      this.orderService.pullOrder().subscribe(currentOrder => {
        console.log("Order ", currentOrder);
        console.log("Contents ", currentOrder.contents);
        currentOrder.contents.forEach(itemId => {
          this.foodService.getDishDetail(itemId).subscribe(dish => this.currentOrderItems.push(dish));
          console.log("HELLO", this.currentOrderItems);
        });
        this.customerService.getCustomerDetails(currentOrder.customer).subscribe(customer => {
          this.vendorService.getVendorDetails(currentOrder.vendor).subscribe(vendor => {
            this.do = DetailedOrder.createDetailedOrder(currentOrder.id, currentOrder.date, currentOrder.isPayed,
              customer, currentOrder.state, vendor, this.currentOrderItems);
            console.log(this.do);
            this.fullContents.push(this.do);
          });
        });
      });
    });
  }


}
