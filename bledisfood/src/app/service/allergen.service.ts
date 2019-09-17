import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { URL } from '../../environments/environment';
import { Allergen } from '../model/Allergen.model';

@Injectable({
    providedIn: 'root'
})
export class AllergenService {

    constructor(private http: HttpClient) { }
    allergen$ = new BehaviorSubject<Allergen>(new Allergen);
    allergens$ = new BehaviorSubject<Array<Allergen>>(new Array<Allergen>());

    allergens = new Array<Allergen>();

    getAllergens(): Observable<Array<Allergen>>{
        return this.http.get<Array<Allergen>>(URL.domaine + URL.allergen.verb);
    }

    getAllergenDetail(id: number): Observable<Allergen> {
        return this.http.get<Allergen>(URL.domaine + URL.allergen.verb + id);
    }

    pushAllergens(allergens : Array<Allergen>){
        this.allergens$.next(allergens);
    }
}
