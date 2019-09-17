import { Component, OnInit } from '@angular/core';
import { Dish } from 'src/app/model/Dish.model';
import { FoodService } from 'src/app/service/food.service';
import { AuthenticationServiceService } from 'src/app/service/authentication-service.service';
import { VendorService } from 'src/app/service/vendor.service';
import { Vendor } from 'src/app/model/Vendor.model';
import { Router } from '@angular/router';
import { User } from 'src/app/model/User.model';

@Component({
  selector: 'app-dish-manager',
  templateUrl: './dish-manager.component.html',
  styleUrls: ['./dish-manager.component.scss']
})
export class DishManagerComponent implements OnInit {



  dishes: Array<Dish>;
  vendor :Vendor;
  vendorUser = new User();
  vendorNoRue: string;
  vendorAddress: string;
  vendorCodePostal: number;
  vendorVille: string;
  vendorCountry: string;
  vendorIban: string;
  vendorPhoto: string;
  dishesPhoto: Array<string>;
  base64 = 'data:image/jpeg;base64,';

  constructor(private fs: FoodService, private as: AuthenticationServiceService, private vs: VendorService, private router: Router) { }
 
  ngOnInit() {
    const isCustomer = localStorage.getItem('isCustomer');
    if(isCustomer === 'F'){
      this.getDishesByLoggedVendor();
      this.displayDishManager();
    } else {
      this.router.navigate(['home']);
    }
  }
  displayDishManager() {
    const header = document.getElementById('header');
    const child = document.getElementById('child');
    setTimeout(() => {
      header.style.setProperty('opacity', '1');
    }, 100);
    setTimeout(() => {
      child.style.setProperty('opacity', '1');
    }, 500);
  }

  getDishesByLoggedVendor() {
    this.vs.getVendorFromId(parseInt(this.as.getUserId())).subscribe(vendor => {
      this.vendor = vendor;
      this.vendorUser = this.vendor.user;
      this.vendorNoRue = this.vendor.no_rue;
      this.vendorAddress = this.vendor.adresse;
      this.vendorCountry = this.vendor.pays;
      this.vendorCodePostal = this.vendor.code_postal;
      this.vendorVille = this.vendor.ville;
      this.vendorIban = this.vendor.IBAN;
      this.vs.pushNextVendor(this.vendor);
      this.fs.getDishesByVendor(this.vendor.id).subscribe(dishes => (this.dishes = dishes));
      this.vendorPhoto = this.base64 + this.vendor.photo;
    });
  }

  goToCreateDish() {
    this.router.navigate(['/create-dish']);
  }
}
