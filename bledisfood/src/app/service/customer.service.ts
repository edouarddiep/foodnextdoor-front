import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Dish } from '../model/Dish.model';
import { Customer } from '../model/Customer.model';
import { URL } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private http: HttpClient) { }
  Customer$ = new BehaviorSubject<Customer>(new Customer);
  Customers$ = new BehaviorSubject<Array<Customer>>(new Array<Customer>());

  dishes = new Array<Dish>();

  getAllCustomers(): Observable<Array<Customer>> {
    return this.http.get<Array<Customer>>(URL.domaine + URL.customer.verb);
  }

  getCustomerDetails(id: number): Observable<Customer> {
    return this.http.get<Customer>(URL.domaine + URL.customer.verb + URL.user.verb + id);
  }

  pushNextArrayCustomer(Customers: Array<Customer>) {
    this.Customers$.next(Customers);
  }
  postCustomer(Customer: Customer): Observable<Customer> {
    return this.http.post<Customer>(URL.domaine + URL.customer.verb, Customer);
  }
}
