import { Injectable } from '@angular/core';
import { GoogleLoginProvider, SocialAuthService, SocialUser } from 'angularx-social-login';
import {User} from './Models/user.model';
import { HttpClient, HttpClientModule,HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user: SocialUser;
  public userObj : User;
  addUserUrl : string = "http://localhost:8080/user/add";
  constructor(private authService: SocialAuthService,public http:HttpClient) { }

  signInWithGoogle(): any {
    return this.authService.signIn(GoogleLoginProvider.PROVIDER_ID).then(
      (user)=>{

        this.user = user;
      this.userObj = new User(this.user.id,this.user.firstName,this.user.lastName,this.user.email,this.user.photoUrl);
        console.log(this.userObj);
      localStorage.setItem("userToken",this.user.id);
      localStorage.setItem("userData",JSON.stringify(this.user));
        this.addUser(this.userObj).subscribe((data)=>{
          console.log("User Added!");
        });
      },(error)=>{
        console.log(error);
      }
    );
 }

 returndata():String{
  // this.user=JSON.parse(localStorage.getItem("userData"));
   return localStorage.getItem("userToken");
 }
  public signOut():void{

    localStorage.removeItem("userToken");
      localStorage.removeItem("userData");
    this.authService.signOut();
  }

  public isLogin(){
    if(localStorage.getItem("userToken")){
      return true;
    }
    else{
      return false;
    }
  }


  public addUser(user : User) : any
  {
    let httpHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods':'GET,POST,OPTIONS,DELETE,PUT'
    });

    let options = {
        headers: httpHeaders
    };

    return this.http.post(this.addUserUrl,user,options);
  }
}
