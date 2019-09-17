import { LoginComponent } from './component/login/login.component';
import { RegisterComponent } from './component/register/register.component';
import { RegisterChoiceComponent } from './component/register-choice/register-choice.component';
import { SearchComponent } from './component/search/search.component';
import { Routes, RouterModule, ROUTER_CONFIGURATION } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { DishComponent } from './component/dish/dish.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Route } from './routes';
import { RegisterVendorComponent } from './component/register-vendor/register-vendor.component';
import { OrderSummaryComponent } from './component/order-summary/order-summary.component';
import { CreateDishComponent } from './component/create-dish/create-dish.component';
import { DishManagerComponent } from './component/dish-manager/dish-manager.component';
import { OrderManagerComponent } from './component/order-manager/order-manager.component';
import { VendorProfilComponent } from './component/vendor-profil/vendor-profil.component';

export const appRoutes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  { path: Route.LOGIN, component: LoginComponent },
  { path: Route.REGISTER, component: RegisterComponent },
  { path: Route.SEARCH, component: SearchComponent },
  { path: Route.HOME, component: HomeComponent },
  { path: Route.DISH, component: DishComponent },
  { path: Route.CHOICE, component: RegisterChoiceComponent },
  { path: Route.MERCHANT, component: RegisterVendorComponent },
  { path: Route.ORDER_SUMMARY, component: OrderSummaryComponent },
  { path: Route.CREATE_DISH, component: CreateDishComponent },
  { path: Route.DISHMANAGER, component: DishManagerComponent },
  { path: Route.ORDERMANAGER, component: OrderManagerComponent },
  { path: Route.VENDOR_PROFIL, component: VendorProfilComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes), CommonModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
