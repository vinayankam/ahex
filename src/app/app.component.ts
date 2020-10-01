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
}
