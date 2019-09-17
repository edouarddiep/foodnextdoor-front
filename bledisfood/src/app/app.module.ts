import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatToolbarModule,
  MatMenuModule,
  MatButtonModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatGridListModule,
  MatSelectModule,
  MatSidenavModule,
  MatListModule,
  MatCardModule,
  MatDividerModule,
  MatExpansionModule,
  MatRippleModule,
  MatCheckboxModule,
  MatBadgeModule,
  MatTableModule,
  MatRadioModule,
  MatSlideToggleModule,
  MatDialogModule,
  MatProgressSpinnerModule,
  MatSnackBarModule
} from '@angular/material';
import { OverlayModule } from '@angular/cdk/overlay';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { appRoutes } from './app.routing.module';
import { HomeComponent } from './component/home/home.component';
import { SearchComponent } from './component/search/search.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LayoutModule } from '@angular/cdk/layout';
import { RatingComponent } from './component/rating/rating.component';
import { DishComponent } from './component/dish/dish.component';
import { RegisterComponent, DialogUserExistingComponent } from './component/register/register.component';
import { LoginComponent } from './component/login/login.component';
import { CardComponent } from './component/card/card.component';
import { ShoppingCartComponent } from './component/shopping-cart/shopping-cart.component';
import { ShoppingCartService } from './service/shopping-cart.service';
import { JwtModule } from '@auth0/angular-jwt';
import { AuthenticationServiceService, DialogLoginFailComponent } from './service/authentication-service.service';
import { URL } from '../environments/environment';
import { ShoppingListItemComponent } from './component/shopping-list-item/shopping-list-item.component';
import { MenuComponent } from './component/menu/menu.component';
import { DeviceDetectorModule } from 'ngx-device-detector';
import { RegisterChoiceComponent } from './component/register-choice/register-choice.component';
import { RegisterVendorComponent, DialogIbanFailComponent, DialogVendorExistingComponent, DialogIbanExistingComponent } from './component/register-vendor/register-vendor.component';
import { OrderSummaryComponent, DialogPurchaseComponent, DialogLoginComponent } from './component/order-summary/order-summary.component';
import { CreateDishComponent } from './component/create-dish/create-dish.component';
import { AgmCoreModule, GoogleMapsAPIWrapper } from '@agm/core';
import { DishManagerComponent } from './component/dish-manager/dish-manager.component';
import { CardManagerComponent, DialogConfirmDelete } from './component/card-manager/card-manager.component';
import { OrderManagerComponent } from './component/order-manager/order-manager.component';
import { VendorProfilComponent } from './component/vendor-profil/vendor-profil.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchComponent,
    RatingComponent,
    DishComponent,
    RegisterComponent,
    LoginComponent,
    CardComponent,
    ShoppingCartComponent,
    ShoppingListItemComponent,
    RegisterChoiceComponent,
    RegisterVendorComponent,
    MenuComponent,
    OrderSummaryComponent,
    CreateDishComponent,
    DishManagerComponent,
    CardManagerComponent,
    OrderManagerComponent,
    DialogPurchaseComponent,
    DialogLoginFailComponent,
    DialogIbanFailComponent,
    DialogUserExistingComponent,
    DialogVendorExistingComponent,
    VendorProfilComponent,
    DialogConfirmDelete,
    DialogLoginComponent,
    DialogIbanExistingComponent,
  ],
  imports: [
    ReactiveFormsModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false } // <-- debugging purposes only
    ),
    JwtModule.forRoot({
      config: {
        tokenGetter: AuthenticationServiceService.getToken,
        whitelistedDomains: [URL.serv],
        blacklistedRoutes: [URL.domaine + URL.token],
        authScheme: 'JWT ',
      }
    }),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCeRuufysM9JnUKkN5FXkd4vxDBIwHCV2Q'
    }),
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatMenuModule,
    MatButtonModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatSelectModule,
    MatGridListModule,
    HttpClientModule,
    LayoutModule,
    MatSidenavModule,
    MatListModule,
    FormsModule,
    MatCardModule,
    MatDividerModule,
    MatExpansionModule,
    MatRippleModule,
    FlexLayoutModule,
    MatCheckboxModule,
    OverlayModule,
    ReactiveFormsModule,
    MatBadgeModule,
    DeviceDetectorModule.forRoot(),
    MatTableModule,
    MatRadioModule,
    MatSlideToggleModule,
    MatDialogModule,
    MatProgressSpinnerModule,
    MatSnackBarModule
  ],
  entryComponents: [ShoppingCartComponent, DialogConfirmDelete, DialogVendorExistingComponent,
    DialogUserExistingComponent, DialogIbanFailComponent,
    DialogLoginFailComponent, DialogIbanExistingComponent, DialogPurchaseComponent, DialogLoginComponent],
  providers: [ShoppingCartService, GoogleMapsAPIWrapper,],
  bootstrap: [AppComponent]
})
export class AppModule { }
