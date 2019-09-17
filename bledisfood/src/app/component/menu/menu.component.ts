import { Component, OnInit, AfterViewInit, HostListener } from '@angular/core';
import { Dish } from 'src/app/model/Dish.model';
import { ShoppingCartBuilderService } from 'src/app/service/shopping-cart-builder.service';
import { AuthenticationServiceService } from 'src/app/service/authentication-service.service';
import { ShoppingCartService } from 'src/app/service/shopping-cart.service';
import { Router } from '@angular/router';
import { Vendor } from 'src/app/model/Vendor.model';
import { VendorService } from 'src/app/service/vendor.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit, AfterViewInit {
  title = 'bledisfood';
  badgeCount = 0;
  dishes = new Array<Dish>();
  iconVisible = true;

  local = localStorage;
  url: string;

  constructor(private router: Router, private shoppingCartBuilderService: ShoppingCartBuilderService,
    private shoppingCartService: ShoppingCartService,
    private authService: AuthenticationServiceService, private vendorService: VendorService) { }

  ngOnInit() {
    this.shoppingCartBuilderService.instantiate();
    this.shoppingCartService.getBadgeCounter().subscribe(badgeCounter => this.badgeCount = badgeCounter);
    this.shoppingCartService.getBasketVisibility().subscribe(iconVisible => this.iconVisible = iconVisible);
  }

  ngOnChange() {
  }

  ngAfterViewInit() {
  }

  isLogged() {
    return this.authService.isLogged();
  }

  displayCart() {
    this.shoppingCartBuilderService.open();
  }

  isCustomer() {
    // console.log(localStorage.getItem('isCustomer'));
    return this.authService.isCustomer();
  }

  logout() {
    this.authService.logout();
  }

}
