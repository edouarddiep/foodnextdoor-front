import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { $ } from 'protractor';
import { FormControl, ValidationErrors, ValidatorFn, AbstractControl } from '@angular/forms';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/model/User.model';
import { VendorService } from 'src/app/service/vendor.service';
import { Vendor } from 'src/app/model/Vendor.model';
import { MatDialog, MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-register-vendor',
  templateUrl: './register-vendor.component.html',
  styleUrls: ['./register-vendor.component.scss']
})
export class RegisterVendorComponent implements OnInit {

  submitted = false;
  registerForm: FormGroup;
  pays: string;
  no_rue: string;
  iban: string;
  photo: string;
  isReady = false;

  constructor(private router: Router, private formBuilder: FormBuilder, private vendorService: VendorService, public dialog: MatDialog, private snackBar: MatSnackBar) { }
  ngOnInit() {
    /*
    const isLogged = localStorage.getItem('user');
    if (isLogged !== '') {
      this.router.navigate(['home']);
    } else {

    } */
    this.pays = 'Suisse';
    this.registerForm = this.formBuilder.group({
      first_name: ['', [Validators.required, Validators.pattern('^[a-zA-Z- ]{2,}$')]],
      last_name: ['', [Validators.required, Validators.pattern('^[a-zA-Z- ]{2,}$')]],
      email: ['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$')]],
      username: ['', [Validators.required, Validators.pattern('^[a-zA-Z0-9]{3,}$')]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      password_confirm: ['', Validators.required],
      IBAN: ['', Validators.required],
      no_rue: ['', [Validators.required, Validators.pattern('^[0-9].*$')]],
      adresse: ['', Validators.required],
      code_postal: ['', [Validators.required, Validators.min(1200), Validators.max(1299)]],
      ville: ['', Validators.required],
      photo: [''],
    }, {
        validator: this.MustMatch('password', 'password_confirm')
      });
      this.isReady = true;
  }

  get f() { return this.registerForm.controls; }

  isValidIBANNumber(input) {
    let CODE_LENGTHS = {
      AD: 24, AE: 23, AT: 20, AZ: 28, BA: 20, BE: 16, BG: 22, BH: 22, BR: 29,
      CH: 21, CR: 21, CY: 28, CZ: 24, DE: 22, DK: 18, DO: 28, EE: 20, ES: 24,
      FI: 18, FO: 18, FR: 27, GB: 22, GI: 23, GL: 18, GR: 27, GT: 28, HR: 21,
      HU: 28, IE: 22, IL: 23, IS: 26, IT: 27, JO: 30, KW: 30, KZ: 20, LB: 28,
      LI: 21, LT: 20, LU: 20, LV: 21, MC: 27, MD: 24, ME: 22, MK: 19, MR: 27,
      MT: 31, MU: 30, NL: 18, NO: 15, PK: 24, PL: 28, PS: 29, PT: 25, QA: 29,
      RO: 24, RS: 22, SA: 24, SE: 24, SI: 19, SK: 24, SM: 27, TN: 24, TR: 26
    };

    let iban = input.toUpperCase().replace(/[^A-Z0-9]/g, ''),
      code = iban.match(/^([A-Z]{2})(\d{2})([A-Z\d]+)$/),
      digits;

    if (!code || iban.length !== CODE_LENGTHS[code[1]]) {
      return false;
    }

    digits = (code[3] + code[1] + code[2]).replace(/[A-Z]/g, function (letter) {
      return letter.charCodeAt(0) - 55;
    });

    return this.mod97(digits) === 1;
  }

  mod97(string) {
    let checksum = string.slice(0, 2), fragment;

    for (let offset = 2; offset < string.length; offset += 7) {
      fragment = checksum + string.substring(offset, offset + 7);
      checksum = parseInt(fragment, 10) % 97;
    }
    return checksum;
  }

  MustMatch(controlName: string, matchingControlName: string) {
    return (formGroup: FormGroup) => {
      const control = formGroup.controls[controlName];
      const matchingControl = formGroup.controls[matchingControlName];
      if (matchingControl.errors && !matchingControl.errors.mustMatch) {
        return;
      }
      if (control.value !== matchingControl.value) {
        matchingControl.setErrors({ mustMatch: true });
      } else {
        matchingControl.setErrors(null);
      }
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

  handleReaderLoaded(event) {
    this.photo = btoa(event.target.result);
  }

  onSubmit() {
    this.submitted = true;
    // stop here if form is invalid
    if (this.registerForm.invalid) {
      return; // form invalid
    }
    if (!this.isValidIBANNumber(this.iban)) {
      this.dialog.open(DialogIbanFailComponent);
      return;
    }
    if (!this.photo) {
      this.photo = "iVBORw0KGgoAAAANSUhEUgAAAQAAAAEACAYAAABccqhmAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAALEwAACxMBAJqcGAAAFmpJREFUeJzt3X10XHWdx/HP9zeTkKTUolC1BXlscSm0hSQtVYSiQpuUQkEbVJqmImzXPa6y5+zB9ZnFg667Phxd3WVlV6BP8hCen5oW9RgBLW1SISxVNFiUSlkQrNI2ycy93+/+QVkKtulMMpnvvTOf1z9A20Pfydzfd373zuQOQEREREREREREREREREREREREREREREREREREREREREREREREREREREREZSXeATR2prW11Y7fPe6ofKzHZMSOMshEwA5TyASB1sKkFgAgljOEXDDsgOAFgT0fm/y2JhO2Rs/WPtXbe03e+UuhMcIBUCHmzp2bfanuiBkSMu8E9FRRmalBTghAdnT/Z80D+IUBfQJsEMk8dPS43Y91dnbGJQknVxwAKTbj7PY312RwrkFag+AsQCaU5S9W3YEQ7gew1jL5u3vvueEPZfl7qeQ4AFJm2ty2gxvq6y5UkQ8F1fcghODZo4o4BP2hKG4YUnT23b96l2cPFYcDICVmtyyZpiKfUMVFIYTx3j37osCfA2yNxeHfetev+KV3Dx0YB0DCNc5fcjognw4htHq3FMfuhdiXe+5b/VPvEto/DoCEaprXMVsCroLgbO+W0TCzLsuEz22+d0Wvdwv9JQ6AhJlzTsfhedWvCEK7d0spGXC9afyZzevWbPduoVdxACREW1tbZuvO+r8D8CUA47x7xshOQD/VM/u4q3HlleodQxwAiTCrdenxBqwAZI53S1moPqQSlm3uWvmkd0q1c30JiSCzWpf+tan9vGoWPwCEcFoQPNLYsnQZ+CTkit98J00LlzcgHrhGIEu8WzyZ2XU1Bw98bMMttwx4t1QjDgAHpyy46KiMhbuAMMO7JSE2B4sXbexas807pNrwFKDMZrUubZY4bODif43G2GTD7HntM71Dqg13AGU0q2XZe83iuxBCg3dLQu2E2cKerlXd3iHVgjuAMmmcv+wck/heLv5hHaxiXbMWLGvxDqkW3AGUQXNrRyugdwKhxrslFRQ5wM7pWbfqB94plY4DYIw1zV92poV4bUCo825JFdXdJjK/t2vVg94plYwDYAw1n9N+kmp4KABv8G5JJcUfgfgdPevW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";
      console.log("LA PHOTO =" + this.photo);
    }

    //this.submitted = true;
    //console.log(this.registerForm.value);
    const user = User.createUser(this.registerForm.value);
    //console.log(user + 'after create');
    console.log(user + "un vendeur");
    this.vendorService.postVendor(Vendor.createVendor(user, this.photo)).subscribe(data => {
      this.snackBar.open('Votre compte a bien été créé ! Vous pouvez vous connecter à l\'application', 'Fermer', {
        duration: 3000,
        // here specify the position
        verticalPosition: 'top',
        horizontalPosition: 'center'
      });
      this.router.navigate(['login']);
    }, err => {
      if (err.status === 400) {
        this.dialog.open(DialogIbanExistingComponent);
        return;
      }
      if (err.status === 500) {
        this.dialog.open(DialogVendorExistingComponent);
        return;
      }
    });
  }
}

@Component({
  selector: 'app-vendor-iban',
  templateUrl: 'iban-fail.html',
})

export class DialogIbanFailComponent {
}

@Component({
  selector: 'app-existing-iban',
  templateUrl: 'iban-existing.html',
})

export class DialogIbanExistingComponent {
}

@Component({
  templateUrl: 'vendor-existing-error.html',
  selector: 'app-vendor-existing',
})
export class DialogVendorExistingComponent { }
