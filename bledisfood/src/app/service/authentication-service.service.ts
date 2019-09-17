import { Injectable, Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, BehaviorSubject, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

import { URL } from '../../environments/environment';
import * as jwt_decode from 'jwt-decode';
import { VendorService } from './vendor.service';
import { Vendor } from '../model/Vendor.model';
import { CustomerService } from './customer.service';
import { Customer } from '../model/Customer.model';
import { MatDialog } from '@angular/material';
import { User } from '../model/User.model';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationServiceService {
  token: string;
  vendor: Vendor;
  customer: Customer;

  constructor(private http: HttpClient, private vendorService: VendorService, private customerService: CustomerService, private dialog: MatDialog) { }

  public static getToken(): string {
    const token = localStorage.getItem('token');
    return token;
  }

  public getUser(): User{
    const user = JSON.parse(localStorage.getItem('user'));
    console.log("Authentication user = "+user);
    return user;
  }

  public getUserId(): string {
    const userId = localStorage.getItem('userId');
    return userId;
  }

  login(username: string, password: string): Observable<any> {
    return this.http.post(URL.domaine + URL.token, JSON.stringify({username: username, password: password}),
      { headers: new HttpHeaders().set('Content-type', 'application/json') }).pipe(
        map(data => {
          this.token = data['token'];
          localStorage.setItem('token', this.token);
          console.log('TOKEN = ' + this.token);
          const decoded = jwt_decode(this.token);
          localStorage.setItem('user', JSON.stringify(decoded));
          localStorage.setItem('userId', decoded.user_id);
          this.vendorService.getVendorFromId(parseInt(decoded.user_id)).subscribe(vendor => {
            this.vendor = vendor;
            localStorage.setItem('isCustomer', 'F');
            console.log('VENDOR');
          }, error => {
            this.customerService.getCustomerDetails(parseInt(decoded.user_id)).subscribe(customer => {
              this.customer = customer;
              localStorage.setItem('isCustomer', 'T');
              console.log('customer');
            });
          });
        }), catchError(e => throwError(this.errorHandler(e)))
      );
  }

  errorHandler(error: any){
    if(error){
      this.dialog.open(DialogLoginFailComponent);
    }
  }

  logout() {
    localStorage.setItem('token', '');
    localStorage.setItem('user', '');
    localStorage.setItem('isCustomer', 'T');
  }

  isCustomer() {
    return localStorage.getItem('isCustomer') === 'T';
  }

  isLogged() {
    if (localStorage.getItem('token') === '' || localStorage.getItem('token') === null) {
      return false;
    }
    return true;
  }

  refreshToken() {
    return this.http.post('http://127.0.0.1:8000/api/token/refresh/',
      JSON.stringify({ token: this.token }),
      { headers: new HttpHeaders().set('Content-type', 'application/json') }
    );
  }
}

@Component({
  selector: 'app-login-fail',
  templateUrl: '../component/login/login-fail.html',
})
export class DialogLoginFailComponent { }
