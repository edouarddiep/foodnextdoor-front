import { Component, OnInit, Input } from '@angular/core';
import { Dish } from 'src/app/model/Dish.model';
import { ShoppingCartService } from 'src/app/service/shopping-cart.service';
import { isNgTemplate } from '@angular/compiler';

@Component({
  selector: 'app-shopping-list-item',
  templateUrl: './shopping-list-item.component.html',
  styleUrls: ['./shopping-list-item.component.scss']
})
export class ShoppingListItemComponent implements OnInit {

  @Input() dish: Dish;
  @Input() itemCounter: Map<number, number>;
  dishPhoto: string;
  base64 = 'data:image/jpeg;base64,'

  constructor(private shoppingCartService: ShoppingCartService) { }

  ngOnInit() {
    this.dishPhoto = this.base64 + this.dish.photo;
  }

  getTotalPrice() {
    return this.dish.price * this.itemCounter.get(this.dish.id);
  }

  increment() {
    this.shoppingCartService.pushOneToCart(this.dish);
    this.shoppingCartService.pushIncrementToCart(this.dish);
  }

  decrement() {
    this.shoppingCartService.pullOneFromCart(this.dish);
    this.shoppingCartService.pushDecrementToCart(this.dish);
  }

  remove() {
    this.itemCounter.delete(this.dish.id);
    this.shoppingCartService.pullAllFromCart(this.dish);
  }

}
