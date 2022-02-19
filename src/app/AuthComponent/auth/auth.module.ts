import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { AuthLayoutComponent } from '../components/auth-layout/auth-layout.component';
import { RegisterPageComponent } from '../components/auth-layout/register-page/register-page.component';
import { LoginPageComponent } from '../components/auth-layout/login-page/login-page.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    AuthLayoutComponent,
    LoginPageComponent,
    RegisterPageComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    RouterModule
  ]
})
export class AuthModule { }
