import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { authRoutes } from './auth.routing';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms'

@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(authRoutes)
  ]
})
export class AuthModule { }
