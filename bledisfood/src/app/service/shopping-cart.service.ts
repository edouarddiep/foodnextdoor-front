import { Injectable, Injector, TemplateRef, Type } from '@angular/core';
import { Observable, BehaviorSubject, of, Subject } from 'rxjs';
import { Dish } from '../model/Dish.model';
import { map } from 'rxjs/operators';
import { ShoppingCartBuilderService } from './shopping-cart-builder.service';
import { Overlay, OverlayConfig, PositionStrategy, OverlayRef } from '@angular/cdk/overlay';

@Injectable()
export class ShoppingCartService {

  private itemIndex = 0;
  private cart = new Set<Dish>();
  private items = new Array<Dish>();
  private itemCounter = new Map<number, number>();
  private badgeCounter = 0;
  private distinctItems = new Array<Dish>();
  private iconVisible = true;

  private cart$ = new BehaviorSubject<Set<Dish>>(new Set<Dish>());
  private items$ = new BehaviorSubject<Array<Dish>>(new Array<Dish>());
  private distinctItems$ = new BehaviorSubject<Array<Dish>>(new Array<Dish>());
  private item$ = new BehaviorSubject<Dish>(new Dish);
  private itemCounter$ = new BehaviorSubject<Map<number, number>>(new Map<number, number>());
  private badgeCounter$ = new BehaviorSubject<number>(this.badgeCounter);
  private iconVisible$ = new BehaviorSubject<boolean>(this.iconVisible);

  constructor() {

  }

  getItemToAdd(): Observable<Dish> {
    return this.item$.asObservable();
  }

  getItemsToAdd(): Observable<Array<Dish>> {
    return this.items$.asObservable();
  }

  getCartToAdd(): Observable<Set<Dish>> {
    return this.cart$.asObservable();
  }

  getCounterToAdd(): Observable<Map<number, number>> {
    return this.itemCounter$.asObservable();
  }

  getBadgeCounter(): Observable<number> {
    return this.badgeCounter$.asObservable();
  }

  pushOneToCart(dish: Dish) {
    this.items.push(dish);
    this.items$.next(this.items);
    this.badgeCounter = this.items.length;
    this.badgeCounter$.next(this.badgeCounter);
  }

  pullOneFromCart(dish: Dish) {
    this.items.splice(this.items.indexOf(dish), 1);
    this.items$.next(this.items);
    this.badgeCounter = this.items.length;
    this.badgeCounter$.next(this.badgeCounter);
  }

  pullAllFromCart(dish: Dish) {
    for (let i = this.items.length - 1; i >= 0; i--) {
      if (this.items[i].id === dish.id) {
        this.items.splice(i, 1);
      }
    }
    this.items$.next(this.items);
    this.badgeCounter = this.items.length;
    this.badgeCounter$.next(this.badgeCounter);
  }

  emptyCart() {
    this.items.length = 0;
    this.items$.next(this.items);
    this.badgeCounter = this.items.length;
    this.badgeCounter$.next(this.badgeCounter);
  }

  pullItemsToOrder(): Observable<Array<Dish>> {
    return this.distinctItems$.asObservable();
  }

  pullItemCounter(): Observable<Map<number, number>> {
    return this.itemCounter$.asObservable();
  }

  pushItemsToOrder(distinctItems: Array<Dish>, itemCounter: Map<number, number>): void {
    this.itemCounter$.next(itemCounter);
    this.distinctItems$.next(distinctItems);
  }

  pushSetToCart() {
    this.cart$.next(this.cart);
  }

  pushIncrementToCart(dish: Dish) {
    if (this.itemCounter.size > 0 || this.itemCounter.size !== NaN) {
      if (this.itemCounter.has(dish.id)) {
        this.itemCounter$.next(this.itemCounter.set(dish.id, this.itemCounter.get(dish.id) + 1)); return;
      }
      this.itemCounter$.next(this.itemCounter.set(dish.id, 1));
    }
  }

  pushDecrementToCart(dish: Dish) {
    if (this.itemCounter.size !== 0) {
      if (this.itemCounter.get(dish.id) > 0) {
        this.itemCounter$.next(this.itemCounter.set(dish.id, this.itemCounter.get(dish.id) - 1)); return;
      }
      this.itemCounter.delete(dish.id);
      this.itemCounter$.next(this.itemCounter);
    }
  }

  getBasketVisibility(): Observable<boolean> {
    return this.iconVisible$.asObservable();
  }

  setBasketVisible(iconVisible: boolean) {
    if (iconVisible != null) {
      this.iconVisible$.next(iconVisible);
    } else {
      this.iconVisible$.next(false);
    }
  }

}

