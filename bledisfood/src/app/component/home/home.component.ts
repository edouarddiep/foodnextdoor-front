import { Component, Input, ViewChild, NgZone, OnInit } from '@angular/core';
import { MapsAPILoader, AgmMap } from '@agm/core';
import { GoogleMapsAPIWrapper } from '@agm/core/services';
import { Vendor } from 'src/app/model/Vendor.model';
import { VendorService } from 'src/app/service/vendor.service';
import { Router } from '@angular/router';
import { Dish } from 'src/app/model/Dish.model';
import { FoodService } from 'src/app/service/food.service';


declare var google: any;

interface Marker {
  lat: number;
  lng: number;
  label?: string;
  draggable?: boolean;
}

interface Location {
  lat: number;
  lng: number;
  viewport?: Object;
  zoom: number;
  addresse?: string;
  no_rue?: string;
  pays?: string;
  code_postal?: string;
  ville?: string;
  marker?: Marker;
}

class LocalisationMarqueur {
  vendor: Vendor;
  lat: number;
  lng: number;
  constructor(vendor: Vendor, lat: number, lng: number) {
    this.lat = lat;
    this.lng = lng;
    this.vendor = vendor;
  }
}


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  geocoder: any;
  lat: number;
  lng: number;
  zoom: number;
  dishes: Array<Dish>;
  totalDishes: number;
  vendors: Array<Vendor>;
  cpt = 0;
  isLoading = false;
  lstLocalisations = new Array<LocalisationMarqueur>();
  icon = {
    url: 'http://maps.google.com/mapfiles/ms/icons/blue-dot.png',
    scaledSize: {
      width: 40,
      height: 40
    }
}

  @ViewChild(AgmMap) map: AgmMap;
  public location: Location = {
    lat: this.lat,
    lng: this.lng,
    marker: {
      lat: this.lat,
      lng: this.lng,
    },
    zoom: 5
  };



  constructor(public mapsApiLoader: MapsAPILoader,
    private zone: NgZone,
    private wrapper: GoogleMapsAPIWrapper,
    private vendorService: VendorService,
    private foodService: FoodService,
    private router: Router
  ) {
    this.mapsApiLoader = mapsApiLoader;
    this.zone = zone;
    this.wrapper = wrapper;
    this.mapsApiLoader.load().then(() => {
      this.geocoder = new google.maps.Geocoder();
    });
  }


  ngOnInit() {
    this.isLoading = true;
    const title = document.getElementById('title');
    setTimeout(() => {
      this.location.marker.draggable = false;
      this.geoLocation();
      this.getVendors();
      this.cpt = 1;
      this.isLoading = false;
    }, 1000);
    this.getDishes();
    this.getFilterResults();
    this.setTransition();
  }

  getDishes() {
    this.foodService.getAllDishes().subscribe(dishes => {
      if(this.dishes.length === 0){
        this.isLoading = true;
      }
      this.dishes = dishes;
      this.totalDishes = this.dishes.length;
      this.isLoading = false;
    });
  }

  getFilterResults() {
    this.foodService.getFilterResults().subscribe(dishes => {
      this.dishes = dishes;
      console.log('LA LONGUEUR = ' + dishes.length);
    });
  }

  setTransition(){
    const card = document.getElementById('dishCard');
    setTimeout(() => {
      card.style.setProperty('opacity', '1');
    }, 1000);
  }

  geoLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position: Position) => {
        if (position) {
          this.zoom = 16;
          this.lat = position.coords.latitude;
          this.lng = position.coords.longitude;
        }
      },
        (error: PositionError) => console.log(error));
    } else {
      alert('Geolocation is not supported by this browser.');
    }
  }


  updateOnMap() {
    this.vendors.forEach(v => {
      this.location.addresse = v.adresse;
      this.location.no_rue = v.no_rue.toString();
      this.location.ville = v.ville;
      this.location.pays = v.pays;
      let full_address: string = this.location.addresse || ""
      if (this.location.no_rue) full_address = full_address + " " + this.location.no_rue
      if (this.location.ville) full_address = full_address + " " + this.location.ville
      if (this.location.pays) full_address = full_address + " " + this.location.pays
      this.findLocation(full_address, v);
    });
  } 
  


  findLocation(address, v: Vendor) {
    if (!this.geocoder) { this.geocoder = new google.maps.Geocoder(); }
    this.geocoder.geocode({
      'address': address
    }, (results, status) => {
      console.log(results);
      if (status === google.maps.GeocoderStatus.OK) {
        for (let i = 0; i < results[0].address_components.length; i++) {
          const types = results[0].address_components[i].types;

          if (types.indexOf('locality') !== -1) {
            this.location.no_rue = results[0].address_components[i].long_name;
          }
          if (types.indexOf('pays') !== -1) {
            this.location.pays = results[0].address_components[i].long_name;
          }
          if (types.indexOf('postal_code') !== -1) {
            this.location.code_postal = results[0].address_components[i].long_name;
          }
          if (types.indexOf('administrative_area_level_1') !== -1) {
            this.location.ville = results[0].address_components[i].long_name;
          }
        }

        if (results[0].geometry.location) {
          this.location.lat = results[0].geometry.location.lat();
          this.location.lng = results[0].geometry.location.lng();
          this.lstLocalisations.push(new LocalisationMarqueur(v, this.location.lat, this.location.lng));
          this.location.marker.lat = results[0].geometry.location.lat();
          this.location.marker.lng = results[0].geometry.location.lng();
          this.location.marker.draggable = true;
          this.location.viewport = results[0].geometry.viewport;
        }

        this.map.triggerResize();
      } else {
        console.log("Sorry, this search produced no results.");
      }
    });
  }

  getVendors() {
    this.vendorService.getAllVendors().subscribe(vendors => { this.vendors = vendors; this.updateOnMap(); });
  }

  navigateToVendor(vendor: Vendor) {
    this.router.navigate(['vendor-profil/' + vendor.id]);
    console.log("route pour profil");
  }
}



