import { Component } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import {  Inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ahex';
  constructor(public router:Router,public auth: AuthService,@Inject(DOCUMENT) public document: Document) { }
  forms() {
    this.router.navigate(['forms'])
  }

  datePicker() {
    this.router.navigate(['datePicker']);
  }

  dataTransfer() {
    this.router.navigate(['dataTransfer']);
  }

  directive(from) {
    if(from == 'password') {
      this.router.navigate(['directives/password']);
    }else{
    this.router.navigate(['directives/loader']);
    }
  }

  uploader(from) {
    if(from == 'img'){
      this.router.navigate(['uploader/img']);
    }else{
      this.router.navigate(['uploader/pdf']);
    }
  }
  
  login() {
    this.router.navigate(['home']);
  }

  multi(){
    this.router.navigate(['multiLanguge']);
  }

  gitApi() {
    this.router.navigate(['gitApi']);
  }
  youtube() {
    this.router.navigate(['youtube']);
  }
  food() {
    this.router.navigate(['foodApp']);
  }
  typehed() {
    this.router.navigate(['typeahead']);
  }

  socialLogins() {
    this.router.navigate(['socialLogin']);
  }
  mouseMove() {
    this.router.navigate(['mouseMove']);
  }
}
