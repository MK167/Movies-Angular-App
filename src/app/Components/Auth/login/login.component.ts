import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/Services/auth.service';
import { AuthGuard } from '../../../Shared/Guards/auth.guard';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private _AuthService: AuthService,
    private _Router: Router,
    private _AuthGuardService: AuthGuard,
    private _Toastr: ToastrService,
    private Spinner: NgxSpinnerService) { }

 loginForm: FormGroup = new FormGroup
 ({
   'email':new FormControl(null,[Validators.required,Validators.email]),
   'password':new FormControl(null,[Validators.required]),
 });

 get f()
  {
    return this.loginForm.controls;
  }

 login(){

  if(this.loginForm.invalid){
     return
   }

   this.Spinner.show();
   this._AuthService.loginData(this.loginForm.value).subscribe((data)=>{
     console.log(data);
     if(data.message=="success"){
        localStorage.setItem("token","true")
        this._Toastr.success(`Welcome ${data.user.first_name}`)
        this._AuthGuardService.IsLogin.next(true)
        this.Spinner.hide();
        this._Router.navigateByUrl("/home");
      }
      else{
        this.Spinner.hide();
        this._Toastr.error(data.message);
      }
   });
 }
 ngOnInit(): void {
 }

}
