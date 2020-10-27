import { Component, OnInit } from '@angular/core';
import { FacebookLoginProvider, GoogleLoginProvider, SocialAuthService } from "angularx-social-login";
import { SocialUser } from "angularx-social-login";
@Component({
  selector: 'app-social-logins',
  templateUrl: './social-logins.component.html',
  styleUrls: ['./social-logins.component.css']
})
export class SocialLoginsComponent implements OnInit {
  user: SocialUser;
  loggedIn: boolean;
  constructor(private authService: SocialAuthService) { }

  ngOnInit(): void {
  }

  //signin with google
  signInWithGoogle(): void {
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
  }
 
  //signin with facebook
  signInWithFB(): void {
    this.authService.signIn(FacebookLoginProvider.PROVIDER_ID);
  }
 
  //signout logins
  signOut(): void {
    this.authService.signOut();
  }
}
