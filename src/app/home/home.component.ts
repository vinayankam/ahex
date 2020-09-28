import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public router:Router,public auth: AuthService,@Inject(DOCUMENT) public document: Document) { }

  ngOnInit(): void {
    //this.auth.loginWithRedirect()
  }
  signup() {
    this.router.navigate(['signup'])
  }
  login() { 
    this.router.navigate(['login'])
  }

  //auth login
  authf() {
    this.auth.loginWithRedirect()
  }
  authLogout() {
    this.auth.logout({ returnTo: document.location.origin })
  }
}
