import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { AuthGuard } from './Shared/Guards/auth.guard';
import { LoginComponent } from './Components/Auth/login/login.component';
import { RegisterComponent } from './Components/Auth/register/register.component';
import { NotFoundPageComponent } from './Components/not-found-page/not-found-page.component';
import { AboutComponent } from './Components/about/about.component';
import { DetailsComponent } from './Components/details/details.component';
import { MoviesComponent } from './Components/movies/movies.component';
import { NetworksComponent } from './Components/networks/networks.component';
import { PeopleComponent } from './Components/people/people.component';
import { PersonDetailsComponent } from './Components/person-details/person-details.component';
import { SearchComponent } from './Components/search/search.component';
import { TVShowsComponent } from './Components/tvshows/tvshows.component';
import { AuthLayoutComponent } from './AuthComponent/components/auth-layout/auth-layout.component';

const routes: Routes = [
  {
    path: '', redirectTo: 'home', pathMatch: 'full'
  },
  {
    path : 'home', component : HomeComponent, canActivate: [AuthGuard]
  },
  {
    path : 'login' , component : LoginComponent
  },
  {
    path : 'register' , component : RegisterComponent
  },
  {
    path: 'about', component: AboutComponent, canActivate: [AuthGuard]
  },
  {
    path: 'movies/:genre/:page', component: MoviesComponent, canActivate: [AuthGuard]
  },
  {
    path: 'tvshows/:genre/:page', component: TVShowsComponent, canActivate: [AuthGuard]
  },
  {
    path: 'details/:mediaType/:id', component: DetailsComponent, canActivate: [AuthGuard]
  },
  {
    path: 'person/:id', component: PersonDetailsComponent, canActivate: [AuthGuard]
  },
  {
    path: 'search/:target', component: SearchComponent, canActivate: [AuthGuard]
  },
  {
    path: 'people/:page', component: PeopleComponent, canActivate: [AuthGuard]
  },
  {
    path: 'networks', component: NetworksComponent, canActivate: [AuthGuard]
  },
  // If You Need Use Lazy Loading Module Do IT The Below Code The Best Structure of Lazy Loading.
  //
  // {
  //   path: 'auth', component: AuthLayoutComponent, children: [
  //   {
  //     path:'',
  //     loadChildren: () => import('./AuthComponent/auth/auth.module')
  //     .then(m =>m.AuthModule)
  //   }
  //   ]
  // },
  {
    path: '**', component: NotFoundPageComponent
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
