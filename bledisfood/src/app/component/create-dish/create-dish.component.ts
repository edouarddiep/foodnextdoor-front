import { Component, OnInit } from '@angular/core';
import { CountryService } from 'src/app/service/country.service';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Allergen } from 'src/app/model/Allergen.model';
import { Typedish } from 'src/app/model/Typedish.model';
import { FoodService } from 'src/app/service/food.service';
import { Dish } from 'src/app/model/Dish.model';
import { User } from 'src/app/model/User.model';
import { Vendor } from 'src/app/model/Vendor.model';
import { VendorService } from 'src/app/service/vendor.service';
import { AuthenticationServiceService } from 'src/app/service/authentication-service.service';
import { Observable, ReplaySubject } from 'rxjs';
import { AllergenDish } from 'src/app/model/AllergenDish.model';
import { MatDialogRef, MatDialog, MatSnackBar } from '@angular/material';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-dish',
  templateUrl: './create-dish.component.html',
  styleUrls: ['./create-dish.component.scss']
})
export class CreateDishComponent implements OnInit {

  dishImage: string;
  submitted = false;
  dishCreated = false;
  countries: Array<string>;
  listeAllergens: Array<Allergen>;
  selectedAllergens: Array<Allergen>;
  selectedTypeDish: Typedish;
  registerForm: FormGroup;
  vendor = new Vendor();
  photo: string;
  country: string;
  isHalal: boolean;
  isVegan: boolean;
  isHalalDisabled: boolean;
  isVeganDisabled: boolean;

  constructor(private cs: CountryService, private formBuilder: FormBuilder, private fs: FoodService, private vs: VendorService, private as: AuthenticationServiceService, private dialog: MatDialog, private router: Router, private snackBar : MatSnackBar) { }

  ngOnInit() {
    this.countries = this.cs.getNames();
    this.countries.sort((one, two) => (one > two ? 1 : -1));
    this.vs.getVendorFromId(parseInt(this.as.getUserId())).subscribe(vendor => {
      this.vendor = vendor;
      this.vs.pushNextVendor(this.vendor);
    });
    this.fs.getAllergens().subscribe(allergens => {
      this.listeAllergens = allergens;
      this.fs.pushNextArrayAllergens(this.listeAllergens);
      this.listeAllergens.sort((one, two) => (one > two ? -1 : 1));
    });
    this.registerForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.pattern('^[a-zA-Z- ]{3,}$')]],
      price: ['', Validators.required],
      country: ['', [Validators.required]],
      howSpicy: ['', [Validators.required, Validators.maxLength(1)]],
      isVegan: ['', Validators.required],
      isHalal: ['', Validators.required],
      photo: ['', Validators.required],
      allergens: ['', Validators.required],
    });
  }

  f() { return this.registerForm.controls; }

  onKeyDown(e) {
    if (e.keyCode === 38 || e.keyCode === 40 || e.keyCode === 9) {
      // do nothing
    } else {
      e.returnValue = false;
      e.preventDefault();
    }
  }

  test() {
    if (this.isHalal === undefined || this.isVegan === undefined) {
      return;
    }
  }

  onChange(event) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      const reader = new FileReader();

      reader.onload = this.handleReaderLoaded.bind(this);
      reader.readAsBinaryString(file);
    }
  }

  detectTypeDishDisabled(){
    let cpt = 0;
    if (this.selectedTypeDish.name === 'Poissons & Crustacés' || this.selectedTypeDish.name === 'Plats à base de viande') {
      this.registerForm.get('isVegan').setValue(false);
      this.isVeganDisabled = true;
      cpt++;
    }
    if(cpt === 0){
      this.isHalalDisabled = false;
      this.isVeganDisabled = false;
    }
  }

  detectAllergensDisabled() {
    let cpt = 0;
    let cptVegan = 0;
    this.selectedAllergens.forEach(allergen => {
      if (allergen.name === 'Porc') {
        this.registerForm.get('isHalal').setValue(false);
        this.registerForm.get('isVegan').setValue(false);
        this.isHalalDisabled = true;
        this.isVeganDisabled = true;
        console.log(this.registerForm.get('isHalal').value);
        cpt++;
      }
      // tslint:disable-next-line:max-line-length
      if (allergen.name === 'Porc' || allergen.name === 'Boeuf' || allergen.name === 'Poulet' || allergen.name === 'Molusque' || allergen.name === 'Crustacé' || allergen.name === 'Oeufs' || allergen.name === 'Poissons' ) {
        this.isVeganDisabled = true;
        this.registerForm.get('isVegan').setValue(false);
        cptVegan++;
      }
    });
    if (cpt === 0) {
      this.isHalalDisabled = false;
    }
    if(cptVegan === 0){
      this.isVeganDisabled = false;
    }
  }

  onSelect(event) {
    console.log(event);
  }

  handleReaderLoaded(event) {
    this.photo = btoa(event.target.result);
  }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.registerForm.invalid) {
      return;
    }
    this.dishCreated = true;

    const dish = Dish.createDish(this.registerForm.value, this.cs, this.vendor, this.photo, this.selectedAllergens);

    this.fs.postDish(dish).subscribe();

    setTimeout(() => {
      this.snackBar.open('Votre plat a bien été enregistré ! Vous pouvez le consulter sur votre page de gestion personnelle.', 'Fermer', {
        duration: 3000,
        // here specify the position
        verticalPosition: 'top',
        horizontalPosition: 'center'
      });
      this.router.navigate(['dish-manager']);
    }, 2000);
  }
}
