import { Component, OnInit } from '@angular/core';

import { Dish } from '../../model/Dish.model';
import { FoodService } from '../../service/food.service';
import { Router, } from '@angular/router';
import { VendorService } from 'src/app/service/vendor.service';
import { Vendor } from 'src/app/model/Vendor.model';
import { CountryService } from 'src/app/service/country.service';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  categories = ['Plat', 'Marchand', 'Code postal', 'Pays'];
  dishes: Array<Dish>;
  allDishes: Array<Dish>;
  setCountries = new Set<string>();
  countries = new Array<string>();
  vendors: Array<Vendor>;
  vendorId: number;
  selectedCategory: string;
  selectedCountry: string;
  searchContent: string;
  isVegan: boolean;
  isHalal: boolean;

  constructor(private foodService: FoodService, private vs: VendorService, private router: Router, private cs: CountryService, private snackBar: MatSnackBar) { }

  ngOnInit() {
    this.getCountries();
    this.selectedCategory = 'Plat';
    this.searchContent = '';
    this.displayFilters();
    this.getVendors();
    this.getDishes();
  }

  displayFilters() {
    const filterWrapper = document.getElementById('advanced');
    const searchBarWrapper = document.getElementById('search-bar');
    const countryWrapper = document.getElementById('country-list');
    setTimeout(() => {
      filterWrapper.style.setProperty('visibility', 'visible');
      filterWrapper.style.setProperty('height', '30px');
      filterWrapper.style.setProperty('opacity', '1');
    }, 1000);
    if (this.selectedCategory === 'Pays') {
      this.selectedCountry = localStorage.getItem('country');
      searchBarWrapper.style.setProperty('opacity', '0');
      searchBarWrapper.style.setProperty('width', '0');
      searchBarWrapper.style.setProperty('visibility', 'hidden');
      countryWrapper.style.setProperty('opacity', '1');
      countryWrapper.style.setProperty('visibility', 'visible');
      countryWrapper.style.setProperty('height', '20px');
      countryWrapper.style.setProperty('width', '180px');
    }
  }

  showResults(event) {
    localStorage.setItem('category', this.selectedCategory);
    localStorage.setItem('searchContent', this.searchContent);
    this.vendorId = null;
    if (event.keyCode === 13 || event.keyCode == null) {
      // Recherche par plat
      if (this.selectedCategory === 'Plat') {
        const regex = RegExp('^[a-zA-Z]');
        if (!regex.test(this.searchContent)) {
          this.snackBar.open('Veuillez saisir un nom valide ! (Exemple : Pizza)', '', {
            duration: 3000,
            // here specify the position
            verticalPosition: 'top',
            horizontalPosition: 'center'
          });
          return; // si l'utilisateur a saisi un nom de plat erroné, il ne faut pas continuer donc on return.
        }
        this.foodService.getDishesByName(this.searchContent).subscribe(dishes => {
          this.dishes = dishes;
          this.foodService.pushNextArrayDish(this.dishes);
          this.displayDishesByFilter();
        });
      }
      // Recherche par marchand
      if (this.selectedCategory === 'Marchand') {
        const regex = RegExp('^[a-zA-Z]');
        if (!regex.test(this.searchContent)) {
          this.snackBar.open('Veuillez saisir un nom valide ! (Exemple : Harry)', '', {
            duration: 3000,
            // here specify the position
            verticalPosition: 'top',
            horizontalPosition: 'center'
          });
          return; // si l'utilisateur a saisi un nom de marchand erroné, il ne faut pas continuer donc on return.
        }
        this.vendors.forEach(v => {
          if (v.user.first_name.toLowerCase().includes(this.searchContent.toLowerCase()) || v.user.last_name.toLowerCase().includes(this.searchContent.toLowerCase())) {
            console.log('Ben voila');
            this.vendorId = v.id;
            return;
          }
        });
        console.log("L'ID = "+this.vendorId);
        if(this.vendorId === null){
          this.dishes = [];
          this.foodService.pushNextArrayDish(this.dishes);
        } else {
          this.foodService.getDishesByVendor(this.vendorId).subscribe(dishes => {
            this.dishes = dishes;
            this.foodService.pushNextArrayDish(dishes);
            this.displayDishesByFilter();
          });
        }
      }
      // Recherche par code postal
      if (this.selectedCategory === 'Code postal') {
        const regex = RegExp('^[0-9]');
        if (!regex.test(this.searchContent)) {
          this.snackBar.open('Veuillez saisir un code postal valide ! (Exemple : 1207)', '', {
            duration: 3000,
            // here specify the position
            verticalPosition: 'top',
            horizontalPosition: 'center'
          });
          return; // si l'utilisateur a saisi un code postal erroné, il ne faut pas continuer donc on return.
        }
        this.vs.getVendorsByNPA(this.searchContent).subscribe(vendors => {
          this.vs.pushNextArrayVendor(vendors);
          if (vendors.length === 0) {
            this.dishes = [];
            this.foodService.pushNextArrayDish(this.dishes);
          } else {
            vendors.forEach(v => {
              this.foodService.getDishesByVendor(v.id).subscribe(dishes => {
                this.dishes = dishes;
                this.foodService.pushNextArrayDish(dishes);
                this.displayDishesByFilter();
              });
            });
          }
        });
      }
      // Recherche par pays
      if (this.selectedCategory === 'Pays') {
        if(this.selectedCountry === undefined){
          this.snackBar.open('/!\\ Veuillez sélectionner un pays dans la liste !', '', {
            duration: 3000,
            // here specify the position
            verticalPosition: 'top',
            horizontalPosition: 'center'
          });
          return;
        }
        //localStorage.setItem('country', this.selectedCountry);
        this.foodService.getDishesByCountry(this.selectedCountry).subscribe(dishes => {
          this.dishes = dishes;
          this.foodService.pushNextArrayDish(this.dishes);
          this.displayDishesByFilter();
        });
      }
    }
  }

  displayDishesByFilter() {
    let filteredDishes = new Array<Dish>();
    if (this.isHalal && !this.isVegan) {
      filteredDishes = this.dishes.filter(dish => dish.isHalal);
    } else if (this.isVegan && !this.isHalal) {
      filteredDishes = this.dishes.filter(dish => dish.isVegan);
    } else if (this.isHalal && this.isVegan) {
      filteredDishes = this.dishes.filter(dish => dish.isHalal && dish.isVegan);
    } else {
      filteredDishes = this.dishes;
    }
    this.foodService.pushNextArrayDish(filteredDishes);
  }

  displayAllDishes(event) {
    if (event.length === 0) {
      this.dishes = this.allDishes;
      this.foodService.pushNextArrayDish(this.dishes);
      this.isHalal = false;
      this.isVegan = false;
    }
  }

  setFilter(filter) {
    const category = filter.value;
    const searchBarWrapper = document.getElementById('search-bar');
    const searchBar = document.getElementById('searchBar');
    const countryWrapper = document.getElementById('country-list');
    let placeholder = '';
    this.searchContent = '';
    if (category === 'Pays') {
      searchBarWrapper.style.setProperty('opacity', '0');
      searchBarWrapper.style.setProperty('width', '0');
      searchBarWrapper.style.setProperty('visibility', 'hidden');
      countryWrapper.style.setProperty('opacity', '1');
      countryWrapper.style.setProperty('visibility', 'visible');
      countryWrapper.style.setProperty('height', '20px');
      countryWrapper.style.setProperty('width', '180px');
    } else {
      this.foodService.getAllDishes().subscribe(dishes => {
        this.dishes = dishes;
        this.foodService.pushNextArrayDish(this.dishes);
      });
      this.isHalal = false;
      this.isVegan = false;
      searchBarWrapper.style.setProperty('opacity', '1');
      searchBarWrapper.style.setProperty('width', '350px');
      searchBarWrapper.style.setProperty('visibility', 'visible');
      searchBar.setAttribute('placeholder',
        (category === 'Plat' ? placeholder = 'Veuillez saisir le nom d\'un plat '
          : category === 'Marchand' ? placeholder = 'Veuillez saisir le nom d\'un marchand'
            : category === 'Code postal' ? placeholder = 'Veuillez saisir un code postal'
              : ''));
      countryWrapper.style.setProperty('opacity', '0');
      countryWrapper.style.setProperty('visibility', 'hidden');
      countryWrapper.style.setProperty('height', '0');
      countryWrapper.style.setProperty('width', '0');
    }
  }

  getDishes() {
    this.foodService.getAllDishes().subscribe(dishes => {
      this.allDishes = dishes;
      this.foodService.pushNextArrayDish(this.allDishes);
    });
  }

  getCountries() {
    this.foodService.getAllDishes().subscribe(dishes => {
      this.dishes = dishes;
      this.foodService.getCountries(this.dishes).subscribe(countries => {
        this.setCountries = countries;
        this.setCountries.forEach(c => {
          this.countries.push(c);
        });
      });
      this.countries.sort((one, two) => (one > two ? 1 : -1));
    });
  }

  getVendors() {
    this.vs.getAllVendors().subscribe(vendors => {
      this.vendors = vendors;
      this.vs.pushNextArrayVendor(this.vendors);
    });
  }

}
