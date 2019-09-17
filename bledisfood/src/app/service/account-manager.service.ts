import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from 'src/app/model/User.model';
import { URL } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AccountManagerService {

  constructor(private http: HttpClient) { }

  registerUser(user : User){
    return this.http.post(URL.domaine + URL.auth.verb , user)
  }
}
