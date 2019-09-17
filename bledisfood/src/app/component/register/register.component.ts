import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AccountManagerService } from 'src/app/service/account-manager.service';
import { User } from 'src/app/model/User.model';
import { CustomerService } from 'src/app/service/customer.service';
import { Customer } from 'src/app/model/Customer.model';
import { MatDialog, MatDialogRef, MatSnackBar } from '@angular/material';
import { catchError } from 'rxjs/operators';

@Component({
  selector: 'app-dialog-content',
  templateUrl: 'dialog-content.html',
})
export class DialogContentComponent { }

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  submitted = false;
  registerForm: FormGroup;
  isReady = false;

  constructor(private router: Router, private formBuilder: FormBuilder, private accountmanager: AccountManagerService,
    private customerService: CustomerService, private dialog: MatDialog, private snackBar: MatSnackBar) { }

  ngOnInit() {

    this.registerForm = this.formBuilder.group({
      first_name: ['', [Validators.required, Validators.pattern('^[a-zA-Z- ]{2,}$')]],
      last_name: ['', [Validators.required, Validators.pattern('^[a-zA-Z- ]{2,}$')]],
      email: ['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$')]],
      username: ['', [Validators.required, Validators.pattern('^[a-zA-Z0-9]{3,}$')]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      password_confirm: ['', Validators.required],
    }, {
        validator: this.MustMatch('password', 'password_confirm')
      });
      this.isReady = true;
  }

  get f() { return this.registerForm.controls; }

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

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.registerForm.invalid) {
      return;
    }
    const user = User.createUser(this.registerForm.value);
    this.customerService.postCustomer(Customer.createCustomer(user)).subscribe(data => 
      {
        this.snackBar.open('Votre compte a bien été créé ! Vous pouvez vous connecter à l\'application', 'Fermer', {
          duration: 3000,
          // here specify the position
          verticalPosition: 'top',
          horizontalPosition: 'center'
        });
        this.router.navigate(['login']);
      }, err => {
        if(err.status === 500){
          this.dialog.open(DialogUserExistingComponent);
          return;
        }
      });
  }
}

@Component({
  templateUrl: 'user-existing-error.html',
  selector: 'app-existing-user',
})
export class DialogUserExistingComponent { }
