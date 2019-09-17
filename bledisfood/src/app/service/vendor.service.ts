import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';

import { Dish } from '../model/Dish.model';
import { URL } from '../../environments/environment';
import { Vendor } from '../model/Vendor.model';

@Injectable({
    providedIn: 'root'
})
export class VendorService {

    constructor(private http: HttpClient) { }
    vendor$ = new BehaviorSubject<Vendor>(new Vendor);
    vendors$ = new BehaviorSubject<Array<Vendor>>(new Array<Vendor>());

    dishes = new Array<Dish>();

    getAllVendors(): Observable<Array<Vendor>> {
        return this.http.get<Array<Vendor>>(URL.domaine + URL.vendor.verb);
    }

    getVendorDetails(id: number): Observable<Vendor> {
        return this.http.get<Vendor>(URL.domaine + URL.vendor.verb + id);
    }
    
    getVendorFromId(id: number): Observable<Vendor> {
        return this.http.get<Vendor>(URL.domaine + URL.vendor.verb + URL.user.verb + id);
    }

    getVendorsByNPA(npa: string): Observable<Array<Vendor>> {
        return this.http.get<Array<Vendor>>(URL.domaine + URL.vendor.verb + URL.vendor.filter_npa + npa);
    }

    /*
    getVendorsByName(name: string): Observable<Array<Vendor>> {
        return this.http.get<Array<Vendor>>(URL.domaine + URL.vendor.verb + URL.vendor.filter_name + name);
    }
    */

    pushNextArrayVendor(vendors: Array<Vendor>) {
        this.vendors$.next(vendors);
    }

    pushNextVendor(vendor : Vendor): Vendor{
        this.vendor$.next(vendor);
        return vendor;
    }
    postVendor(vendor : Vendor): Observable<Vendor>{
        return this.http.post<Vendor>(URL.domaine + URL.vendor.verb, vendor);
    }

}
