import { Component, OnInit, Input } from '@angular/core';
import { FoodService } from 'src/app/service/food.service';
import { Router } from '@angular/router';
import { User } from 'src/app/model/User.model';
import { Dish } from 'src/app/model/Dish.model';
import { Vendor } from 'src/app/model/Vendor.model';
import { VendorService } from 'src/app/service/vendor.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() dish: Dish;
  dishVendor = new Vendor();
  dishPhoto: string;
  vendorPhoto: string;
  user = new User();
  isReady = false;
  base64 = 'data:image/jpeg;base64,';

  constructor(private foodService: FoodService, private vs: VendorService, private router: Router) { }

  ngOnInit() {
    this.dishVendor = this.dish.vendor;
    if(this.dish.photo.includes('127.0.0.1')){
      this.dishPhoto = this.dish.photo;
    } else {
      this.dishPhoto = this.base64 + this.dish.photo;
    }
    if(this.dishVendor.photo.includes('127.0.0.1')){
      this.vendorPhoto = this.dishVendor.photo;
    } else {
      this.vendorPhoto = this.base64 + this.dishVendor.photo;
    }
    this.isReady = true;
  }

  showDish(dish: Dish) {
    this.foodService.pushNextDish(dish);
    this.router.navigate(['dishes/' + dish.id]);
  }
}
