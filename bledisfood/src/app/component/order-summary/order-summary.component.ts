import { Component, OnInit, Input, Inject } from '@angular/core';
import { Dish } from 'src/app/model/Dish.model';
import { ShoppingCartService } from 'src/app/service/shopping-cart.service';
import { Router } from '@angular/router';
import { CountryService } from 'src/app/service/country.service';
import { MatDialog, MatDialogRef } from '@angular/material';
import { Order } from 'src/app/model/Order.model';
import { AuthenticationServiceService } from 'src/app/service/authentication-service.service';
import { OrderService } from 'src/app/service/order.service';
import { Route } from 'src/app/routes';
import { SummaryItem } from 'src/app/model/SummaryItem';
import { CustomerService } from 'src/app/service/customer.service';
import { FoodService } from 'src/app/service/food.service';
import { Content } from 'src/app/model/Content.model';


@Component({
  selector: 'app-purchase-ok',
  templateUrl: 'purchase-ok.html',
})

export class DialogPurchaseComponent {
  constructor(private router: Router) { }
  navigateToHome() {
    this.router.navigate([Route.HOME]);
  }
}

@Component({
  selector: 'app-dialog-login',
  templateUrl: 'dialog-login.html',
})

export class DialogLoginComponent {
  constructor(private router: Router) { }
  navigateToLogin() {
    this.router.navigate([Route.LOGIN]);
  }
  navigateToCreateUser() {
    this.router.navigate([Route.REGISTER]);
  }
}

@Component({
  selector: 'app-order-summary',
  templateUrl: './order-summary.component.html',
  styleUrls: ['./order-summary.component.scss']
})

export class OrderSummaryComponent implements OnInit {

  distinctItems = new Array<Dish>();
  orderSummary = new Array<SummaryItem>();
  totalCost;
  payment = false;
  content: Content;
  payedItemIds = new Array<number>();
  userID;
  vendorID;
  @Input() dish: Dish;
  @Input() itemCounter: Map<number, number>;

  displayedColumns: string[] = ['name', 'quantity', 'price'];

  constructor(private shoppingCartService: ShoppingCartService, private router: Router, private cs: CountryService,
    public dialog: MatDialog, private authService: AuthenticationServiceService, private orderService: OrderService,
    private customerService: CustomerService, private foodService: FoodService) { }

  ngOnInit() {
    this.userID = this.authService.getUserId();
    this.shoppingCartService.setBasketVisible(false);
    this.shoppingCartService.pullItemCounter().subscribe(itemCounter => {
      this.itemCounter = itemCounter;
      this.shoppingCartService.pullItemsToOrder().subscribe(distinctItems => {
        this.distinctItems = distinctItems;
        this.generateOrderSummary();
        this.getTotalCost();
      });
    });
    if (this.orderSummary.length === 0) {
      this.router.navigate(['home']);
    }
    this.displaySummary();
  }
  displaySummary() {
    const summary = document.getElementById('summary');
    setTimeout(() => {
      summary.style.setProperty('opacity', '1');
    }, 20);
  }

  generateOrderSummary() {
    this.itemCounter.forEach((quantity, id) => {
      this.distinctItems.forEach(dish => {
        if (dish.id === id) {
          this.vendorID = dish.vendor.id;
          this.orderSummary.push(SummaryItem.createSummaryItem(dish.id, dish.name, dish.price, quantity));
        }
      });
    });
  }

  continueShopping() {
    this.router.navigate(['home']);
  }

  getTotalCost() {
    this.totalCost = 0;
    this.orderSummary.forEach(item => {
      this.totalCost = this.totalCost + (item.price * item.quantity);
    });
  }

  paymentSimulation() {
    if (this.authService.isLogged()) {
      this.payment = true;
      setTimeout(() => {
        this.payment = false;
        this.dialog.open(DialogPurchaseComponent);
        this.router.navigate(['home']);
      }, 3000);
      this.shoppingCartService.emptyCart();
      //   this.orderSummary.forEach(item => {
      //     for (let i = 0; i < item.quantity; i++) {
      //       this.payedItemIds.push(item.id);
      //     }
      //   });
      //   this.customerService.getCustomerDetails(parseInt(this.userID)).subscribe(customer => {
      //     const order = Order.createOrder(new Date(), true, customer.id, this.vendorID, 1,
      //       this.payedItemIds);
      //     this.orderSummary.forEach(item => {
      //       this.distinctItems.forEach(dish => {
      //         if (dish.id === item.id) {
      //           this.content = Content.createContent(item.quantity, (item.price * item.quantity), 0, order, dish);
      //         }
      //       });
      //     });
      //     this.orderService.postOrder(order).subscribe();
      //     this.orderService.postContent(this.content).subscribe();
      //     this.orderService.pushOrder(order);
      //   });
    } else {
      this.dialog.open(DialogLoginComponent);
    }
  }
}
