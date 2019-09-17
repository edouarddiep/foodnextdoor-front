import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog, MatSnackBar } from '@angular/material';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthenticationServiceService } from 'src/app/service/authentication-service.service';
import { Route } from 'src/app/routes';
import * as jwt_decode from 'jwt-decode';
import { User } from 'src/app/model/User.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  constructor(private fb: FormBuilder, private router: Router, private authenticationService: AuthenticationServiceService, public dialog : MatDialog, private snackBar: MatSnackBar) { 
    this.userLogin = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  username: string;
  password: string;
  userLogin: FormGroup;
  logged: boolean;
  user: User;

  ngOnInit() {
    /*
    const isLogged = localStorage.getItem('user');
    console.log(isLogged);
    if(isLogged !== ''){
      this.router.navigate(['home']);
    } else {
      this.logged = false;
    }
    */
  }

  login() {
    this.logged = true;
    this.authenticationService.login(this.username.toLocaleLowerCase(), this.password.toLocaleLowerCase()).subscribe( token => {
        this.user = this.authenticationService.getUser();
        this.router.navigate(['/' + Route.HOME]);
        const message = 'Bienvenue sur Bledi\'s Food ! Heureux de vous revoir ' + this.user.username + '!';
        const action = 'Fermer';
        this.snackBar.open(message, action, {
          duration: 3000,
          // here specify the position
          verticalPosition: 'top',
          horizontalPosition: 'center'
        });
      });
  }

  logout() {
    this.authenticationService.logout();
  }

}

