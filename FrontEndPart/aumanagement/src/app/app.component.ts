import { Component } from '@angular/core';
import { GoogleLoginProvider, SocialAuthService, SocialUser } from 'angularx-social-login';
import { AuthService } from './auth.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'aumanagement';
  user: SocialUser;

  constructor(private authService: SocialAuthService,private auth:AuthService) { }
  ngOnInit() {
    //this.authService.authState.subscribe(user => this.user = user);

    this.user=JSON.parse(localStorage.getItem("userData"));
  }


  signInWithGoogle(): void {
    this.auth.signInWithGoogle().then(()=>{
      this.user=JSON.parse(localStorage.getItem("userData"));
    });


  }


  signOut():void{
    this.user=null;
    this.auth.signOut();
  }
}
