import { Component, OnInit } from '@angular/core';
import { Dish } from 'src/app/model/Dish.model';
import { FoodService } from 'src/app/service/food.service';
import { VendorService } from 'src/app/service/vendor.service';
import { Vendor } from 'src/app/model/Vendor.model';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-vendor-profil',
  templateUrl: './vendor-profil.component.html',
  styleUrls: ['./vendor-profil.component.scss']
})
export class VendorProfilComponent implements OnInit {
  dishes: Array<Dish>;
  vendor = new Vendor();
  vendorPhoto: string;
  dishesPhoto: Array<string>;
  id : number;
  base64 = 'data:image/jpeg;base64,';
  firstName: string;
  lastName: string;
  codePostal: number;
  ville: string;
  pays: string;

  constructor(private fs: FoodService, private vs: VendorService, private router: Router, private actiRoute: ActivatedRoute) { }

  ngOnInit() {
    this.id = this.actiRoute.snapshot.params.id;
    this.vs.getVendorDetails(this.id).subscribe(vendor => {
      this.vendor = vendor;
      this.vs.pushNextVendor(this.vendor);
      this.firstName = this.vendor.user.first_name;
      this.lastName = this.vendor.user.last_name;
      this.codePostal = this.vendor.code_postal;
      this.ville = this.vendor.ville;
      this.pays = this.vendor.pays;
      this.fs.getDishesByVendor(this.vendor.id).subscribe(dishes => (this.dishes = dishes));
      this.vendorPhoto = this.base64 + this.vendor.photo;
    });
    const header = document.getElementById('header');
    const card = document.getElementById('dishCard');
    setTimeout(() => {
      header.style.setProperty('opacity', '1')
    }, 100);
    setTimeout(() => {
      card.style.setProperty('opacity', '1');
    }, 500);
  }

}
