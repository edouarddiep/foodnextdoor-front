import { Component, OnInit, Input } from '@angular/core';
import { Dish } from 'src/app/model/Dish.model';
import { FoodService } from 'src/app/service/food.service';
import { AllergenService } from 'src/app/service/allergen.service';
import { Allergen } from 'src/app/model/Allergen.model';
import { ActivatedRoute, Router } from '@angular/router';
import { ShoppingCartService } from 'src/app/service/shopping-cart.service';
import { CountryService } from 'src/app/service/country.service';
import { VendorService } from 'src/app/service/vendor.service';
import { Vendor } from 'src/app/model/Vendor.model';
import { Typedish } from 'src/app/model/Typedish.model';
import { AllergenDish } from 'src/app/model/AllergenDish.model';

@Component({
  selector: 'app-dish',
  templateUrl: './dish.component.html',
  styleUrls: ['./dish.component.scss']
})
export class DishComponent implements OnInit {
  dish: Dish;
  test: any = 2;
  dishVendor = new Vendor();
  dishTypedish = new Typedish();
  dishPhoto: string;
  dishCountry: string;
  dishPrice: string;
  vendorFirstName: string;
  vendorLastName: string;
  vendorPhoto: string;
  isReady = false;
  // hasVendorMixing: boolean;
  dishAllergens: Array<AllergenDish>;
  allergens: Array<Allergen>;
  base64 = 'data:image/jpeg;base64,';

  constructor(private foodService: FoodService, private shoppingCartService: ShoppingCartService, private as: AllergenService,
    private actiRoute: ActivatedRoute, private cs: CountryService, private vs: VendorService,
    private router: Router
  ) { }

  ngOnInit() {
    this.getDishDetail();
    this.getAllergens();
    const taille = window.innerWidth;
    if (taille > 600) {
      this.test = 2;
    }
    if (taille < 600) {
      this.test = 1;
    }
    this.shoppingCartService.getItemToAdd().subscribe(dish => this.dish = dish);
    this.isReady = true;
    this.displayPage();
  }
  displayPage() {
    setTimeout(() => {
      const infos = document.getElementById('dishInfos');
      infos.style.setProperty('opacity', '1');
    }, 50);
  }

  spiceQuantity() {
    return this.dish.howSpicy;
  }

  onResize(event) {
    const element = event.target.innerWidth;

    if (element > 600) {
      this.test = 2;
    }
    if (element < 600) {
      this.test = 1;
    }
  }

  getDishDetail() {
    const id = this.actiRoute.snapshot.params.id;
    this.foodService.getDishDetail(id).subscribe(d => {
      this.dish = d;
      this.foodService.pushNextDish(this.dish);
      this.dishVendor = this.dish.vendor;
      this.vendorFirstName = this.dishVendor.user.first_name;
      this.vendorLastName = this.dishVendor.user.last_name;
      this.dishPhoto = this.base64 + this.dish.photo;
      this.dishPrice = this.dish.price.toFixed(2);
      this.vendorPhoto = this.base64 + this.dishVendor.photo;
      this.dishCountry = this.cs.getName(this.dish.country);
      this.foodService.getDishAllergens(this.dish.id).subscribe(ad => {
        this.dishAllergens = ad;
        this.foodService.pushNextDishAllergens(this.dishAllergens);
      });
    });
  }

  getAllergens() {
    this.as.getAllergens().subscribe(allergens => this.allergens = allergens);
  }

  addDish() {
    this.shoppingCartService.pushOneToCart(this.dish);
    this.shoppingCartService.pushIncrementToCart(this.dish);
  }

  navigateToVendor() {
    this.router.navigate(['vendor-profil/' + this.dishVendor.id]);
    console.log("route pour profil");
  }

}
