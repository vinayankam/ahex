import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  name: any;
  password: any;
  userList: any = [];
  error: boolean;
  constructor(public router:Router) { }

  ngOnInit(): void {
    this.userList = JSON.parse(localStorage.getItem("submitedList"));
  }
  login() {
    this.userList.forEach(user => {
      if(user.name == this.name && user.password == this.password) {
        this.router.navigate(['loginSucess'])
      }else{
        this.error = true;
      }
    });
  }

  home() {
    this.router.navigate(['']);
  }

  forgot() {
    this.router.navigate(['forgotPassword']);
  }
}
