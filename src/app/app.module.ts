import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from "@angular/common/http";
import { NgxSpinnerModule } from 'ngx-spinner';
import { NavbarComponent } from './Core/navbar/navbar.component';
import { FooterComponent } from './Core/footer/footer.component';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './Components/home/home.component';
import { LoginComponent } from './Components/Auth/login/login.component';
import { RegisterComponent } from './Components/Auth/register/register.component';
import { SliderComponent } from './Components/slider/slider.component';
import { MoviesComponent } from './Components/movies/movies.component';
import { NetworksComponent } from './Components/networks/networks.component';
import { NotFoundPageComponent } from './Components/not-found-page/not-found-page.component';
import { PeopleComponent } from './Components/people/people.component';
import { PersonDetailsComponent } from './Components/person-details/person-details.component';
import { SearchComponent } from './Components/search/search.component';
import { TVShowsComponent } from './Components/tvshows/tvshows.component';
import { AboutComponent } from './Components/about/about.component';
import { DetailsComponent } from './Components/details/details.component';
import { LoginPageComponent } from './AuthComponent/components/auth-layout/login-page/login-page.component';
import { RegisterPageComponent } from './AuthComponent/components/auth-layout/register-page/register-page.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    SliderComponent,
    MoviesComponent,
    NetworksComponent,
    NotFoundPageComponent,
    PeopleComponent,
    PersonDetailsComponent,
    SearchComponent,
    TVShowsComponent,
    AboutComponent,
    DetailsComponent,


  ],
  imports: [
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    BrowserModule,
    ToastrModule.forRoot(),
    NgxSpinnerModule,
    AppRoutingModule
],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
