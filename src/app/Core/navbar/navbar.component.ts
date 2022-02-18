import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthGuard } from 'src/app/Shared/Guards/auth.guard';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  showMenuItem:any;
  target:any=""
   constructor(private _Router:Router, private _AuthGuardService:AuthGuard) {
     this._AuthGuardService.IsLogin.subscribe((flag)=>{
       this.showMenuItem=flag
     })


   }

 logout(){
   localStorage.removeItem("token")
   this._AuthGuardService.IsLogin.next(false)
   this._Router.navigateByUrl("/login")
 }
 targetInfo(eventInfo:any){
   this.target=eventInfo.target.value
 }
   ngOnInit(): void {

   }

 }
