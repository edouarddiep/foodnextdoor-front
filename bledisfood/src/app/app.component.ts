import { Component, OnInit } from '@angular/core';
import { ShoppingCartBuilderService } from './service/shopping-cart-builder.service';
import { AuthenticationServiceService } from './service/authentication-service.service';
import { Dish } from './model/Dish.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'bledisfood';
  badgeCount: number;
  dishes = new Array<Dish>();

  constructor(private shoppingCartBuilderService: ShoppingCartBuilderService, private authServ: AuthenticationServiceService) { }

  ngOnInit() {
    this.shoppingCartBuilderService.instantiate();
  }

  displayCart() {
    this.shoppingCartBuilderService.open();
  }

}
