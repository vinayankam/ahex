import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {
  name: string;
  password: any;
  rePassword: any;
  viewName: string;
  userList: any = [];
  error: boolean;
  knownPassward: any ='';
  knowChange: boolean;
  forgotChange: boolean;
  knowError: boolean = false;
  
  constructor(public router:Router) { }

  ngOnInit(): void {
    this.userList = JSON.parse(localStorage.getItem("submitedList"));
  }

  home() {
    this.router.navigate([''])
  }

  forgot() {
    this.knowChange = true;
    this.forgotChange = false;
  }

  // To reser the password
  reset() {
    this.forgotChange = true;
    this.knowChange = false;
  }

  // To know your password
  know() {
    this.knownPassward = "";
    this.knowError = false;
    this.userList.forEach(user => {
      if(user.name == this.viewName) { 
        this.knownPassward = user.password;
      }
    });
    if(this.knownPassward == '') {
    this.knowError = true; 
    }
  }

  // To login your account
  login() {
    this.userList.forEach(user => {
      if(user.name == this.name) {
        user.password = this.rePassword;
        this.router.navigate(['loginSucess']);
        var v = JSON.stringify(this.userList);
        localStorage.setItem("submitedList", v);
      }else{
        this.error = true;
      }
    });
  }
}
