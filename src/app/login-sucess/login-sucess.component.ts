import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
export interface PeriodicElement {
  name: string;
  gender: string;
  country: string;
}
const ELEMENT_DATA: any[] = [];
@Component({
  selector: 'app-login-sucess',
  templateUrl: './login-sucess.component.html',
  styleUrls: ['./login-sucess.component.css']
})
export class LoginSucessComponent implements OnInit {
  displayedColumns: string[] = ['name', 'gender','country'];
  dataSource = ELEMENT_DATA;
  ELEMENT_DATA: any;
  
  constructor(public router:Router) { }

  ngOnInit(): void {
    this.dataSource = JSON.parse(localStorage.getItem("submitedList"));
    console.log( this.dataSource)
  }

  // navigate to home component
  home() {
    this.router.navigate(['home'])
  }
}
