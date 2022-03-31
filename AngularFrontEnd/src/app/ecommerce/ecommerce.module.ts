import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { CartComponent } from './cart/cart.component';
import { ProfileComponent } from './profile/profile.component';
import { ecommerceRoutes } from './ecommerce.routing';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    HomeComponent,
    CartComponent,
    ProfileComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(ecommerceRoutes)
  ]
})
export class EcommerceModule { }
