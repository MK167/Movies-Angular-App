import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from '../../Components/Auth/login/login.component';
import { RegisterPageComponent } from '../components/auth-layout/register-page/register-page.component';
import { LoginPageComponent } from '../components/auth-layout/login-page/login-page.component';

const routes: Routes = [
  {
    path:'', redirectTo : 'login', pathMatch: 'full'
  },
  {
    path: 'login', component: LoginPageComponent
  },
  {
    path: 'register', component: RegisterPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
