import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, BehaviorSubject, of, observable } from 'rxjs';

import { Dish } from '../model/Dish.model';
import { URL } from '../../environments/environment';
import { TestBed } from '@angular/core/testing';
import { getLocaleMonthNames } from '@angular/common';
import { VendorService } from './vendor.service';
import { CountryService } from './country.service';
import { Typedish } from '../model/Typedish.model';
import { Allergen } from '../model/Allergen.model';
import { AllergenDish } from '../model/AllergenDish.model';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor(private http: HttpClient, private vs: VendorService, private cs: CountryService) { }

  dish$ = new BehaviorSubject<Dish>(new Dish);
  dishes$ = new BehaviorSubject<Array<Dish>>(new Array<Dish>());
  typeDishes$ = new BehaviorSubject<Array<Typedish>>(new Array<Typedish>());
  typeDish$ = new BehaviorSubject<Typedish>(new Typedish);
  allergens$ = new BehaviorSubject<Array<Allergen>>(new Array<Allergen>());
  allergenDish$ = new BehaviorSubject<Array<AllergenDish>>(new Array<AllergenDish>());
  countries = new Set<string>();
  countries$ = new BehaviorSubject<Set<string>>(new Set<string>());

  getAllDishes(): Observable<Array<Dish>> {
    return this.http.get<Array<Dish>>(URL.domaine + URL.dish.verb);
  }

  getDishDetail(id: number): Observable<Dish> {
    return this.http.get<Dish>(URL.domaine + URL.dish.verb + id);
  }

  postDish(dish: Dish): Observable<Dish> {
    return this.http.post<Dish>(URL.domaine + URL.dish.verb, dish);
  }

  removeDish(id: number): Observable<Dish> {
    return this.http.delete<Dish>(URL.domaine + URL.dish.verb + id);
  }

  modifyDish(dish: Dish): Observable<Dish> {
    return this.http.put<Dish>(URL.domaine + URL.dish.verb + dish.id, dish);
  }

  postAllergenDish(allergenDish: AllergenDish) {
    return this.http.post<AllergenDish>(URL.domaine + URL.allergenDish.verb, allergenDish);

  }
  pushNextDish(dish: Dish) {
    this.dish$.next(dish);
  }

  getSelectedDish(): Observable<Dish> {
    return this.dish$.asObservable();
  }

  getDishesByName(name: string): Observable<Array<Dish>> {
    return this.http.get<Array<Dish>>(URL.domaine + URL.dish.verb + URL.dish.filter_name + name);
  }

  getDishesByCountry(country: string): Observable<Array<Dish>> {
    return this.http.get<Array<Dish>>(URL.domaine + URL.dish.verb + URL.dish.filter_country + this.cs.getCode(country));
  }

  // fonction pour obtenir la liste unique des pays pour les filtres (uniquement les plats ACTIFS)
  getCountries(dishes: Array<Dish>): Observable<Set<string>> {
    dishes.forEach(d => {
      if(d.isActive){
        this.countries.add(this.cs.getName(d.country));
      }
    });
    return of(this.countries);
  }

  pushNextCountries() {
    this.countries$.next(this.countries);
  }

  getAllHalalDishes(): Observable<Array<Dish>> {
    return this.http.get<Array<Dish>>(URL.domaine + URL.dish.verb + '?' + URL.dish.filter_halal);
  }

  getAllVeganDishes(): Observable<Array<Dish>> {
    return this.http.get<Array<Dish>>(URL.domaine + URL.dish.verb + '?' + URL.dish.filter_vegan);
  }

  getAllHalalAndVeganDishes(): Observable<Array<Dish>> {
    return this.http.get<Array<Dish>>(URL.domaine + URL.dish.verb + '?' + URL.dish.filter_halal + '&' + URL.dish.filter_vegan);
  }

  getVeganDishesByName(name: string): Observable<Array<Dish>> {
    return this.http.get<Array<Dish>>(URL.domaine + URL.dish.verb + URL.dish.filter_name + name + '&' + URL.dish.filter_vegan);
  }

  getHalalDishesByName(name: string): Observable<Array<Dish>> {
    return this.http.get<Array<Dish>>(URL.domaine + URL.dish.verb + URL.dish.filter_name + name + '&' + URL.dish.filter_halal);
  }

  getHalalAndVeganDishesByName(name: string): Observable<Array<Dish>> {
    return this.http.get<Array<Dish>>(URL.domaine + URL.dish.verb + URL.dish.filter_name + name + '&' + URL.dish.filter_halal
      + '&' + URL.dish.filter_vegan);
  }

  getDishesByVendor(id: number) {
    return this.http.get<Array<Dish>>(URL.domaine + URL.vendor.verb + id + URL.dish.verb);
  }

  pushNextArrayDish(dishes: Array<Dish>) {
    this.dishes$.next(dishes);
  }

  getFilterResults() {
    return this.dishes$.asObservable();
  }

  getTypeDishes(): Observable<Array<Typedish>> {
    return this.http.get<Array<Typedish>>(URL.domaine + URL.typeDish.verb);
  }

  pushNextArrayTypeDishes(typeDishes: Array<Typedish>) {
    this.typeDishes$.next(typeDishes);
  }

  getTypeDishById(id: number): Observable<Typedish> {
    return this.http.get<Typedish>(URL.domaine + URL.typeDish.verb + id);
  }

  pushNextTypeDish(typeDish: Typedish) {
    this.typeDish$.next(typeDish);
  }

  getAllergens(): Observable<Array<Allergen>> {
    return this.http.get<Array<Allergen>>(URL.domaine + URL.allergen.verb);
  }

  getDishAllergens(dish_id: number): Observable<Array<AllergenDish>> {
    return this.http.get<Array<AllergenDish>>(URL.domaine + URL.dish.verb + dish_id + URL.allergenDish.verb);
  }

  pushNextDishAllergens(ad: Array<AllergenDish>) {
    this.allergenDish$.next(ad);
  }

  pushNextArrayAllergens(allergens: Array<Allergen>) {
    this.allergens$.next(allergens);
  }
}
