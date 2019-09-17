import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Order } from '../model/Order.model';
import { HttpClient } from '@angular/common/http';
import { URL } from 'src/environments/environment';
import { VendorService } from './vendor.service';
import { Dish } from '../model/Dish.model';
import { Customer } from '../model/Customer.model';
import { Vendor } from '../model/Vendor.model';
import { CustomerService } from './customer.service';
import { FoodService } from './food.service';
import { DetailedOrder } from '../model/DetailedOrder.model';
import { Content } from '../model/Content.model';
import { AuthenticationServiceService } from './authentication-service.service';


@Injectable({
  providedIn: 'root'
})
export class OrderService {

  orderHistory = new Array<Order>();
  detailedOrders = new Array<Object>();
  vendorItems = new Array<Dish>();
  order: Order;
  vendor: Vendor;
  customer: Customer;
  items = new Array<Dish>();

  orderHistory$ = new BehaviorSubject<Array<Order>>(new Array<Order>());
  vendorItems$ = new BehaviorSubject<Array<Dish>>(new Array<Dish>());
  order$ = new BehaviorSubject<Order>(new Order());
  vendor$ = new BehaviorSubject<Vendor>(new Vendor());
  customer$ = new BehaviorSubject<Customer>(new Customer());
  items$ = new BehaviorSubject<Array<Dish>>(new Array<Dish>());

  constructor(private http: HttpClient, private authService: AuthenticationServiceService) { }

  getDetailedOrdersByLoggedUser(loggedUser: any): Observable<Array<DetailedOrder>> {
    console.log(loggedUser);
    if (this.authService.isCustomer()) {
      return this.http.get<Array<DetailedOrder>>(URL.domaine + URL.customer.verb + loggedUser.id + URL.detailedOrders.verb);
    }
    return this.http.get<Array<DetailedOrder>>(URL.domaine + URL.vendor.verb + loggedUser.id + URL.detailedOrders.verb);
  }

  getContentsByDetailedOrder(detailedOrder: DetailedOrder): Observable<Array<Dish>> {
    return this.http.get<Array<Dish>>(URL.domaine + URL.detailedOrders.verb + detailedOrder.id + URL.contents.verb);
  }

  pushOrderHistory(): Observable<Array<Order>> {
    return this.orderHistory$.asObservable();
  }

  pullOrder(): Observable<Order> {
    return this.order$.asObservable();
  }

  pushOrder(order: Order) {
    return this.order$.next(order);
  }

  postOrder(order: Order): Observable<Order> {
    return this.http.post<Order>(URL.domaine + URL.orders.verb, order);
  }

  postContent(content: Content): Observable<Content> {
    return this.http.post<Content>(URL.domaine + URL.contents.verb, content);
  }

}
