import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  userList: Array<any> = [];
  name: string;
  password: string;
  gender: string;
  selectedValue: string;
  Country:  Array<any> = [
    {value: 'India', viewValue: 'India'},
    {value: 'USA', viewValue: 'USA'},
    {value: 'UAE', viewValue: 'UAE'}
  ];
  constructor(public router:Router) { }

  ngOnInit(): void {
    this.userList = JSON.parse(localStorage.getItem("submitedList"));
  }

  //set object in localStorage
  submit() {
    this.userList.push({name:this.name,password:this.password,gender:this.gender,country:this.selectedValue})
    console.log(this.userList)
    var v = JSON.stringify(this.userList);
    localStorage.setItem("submitedList", v);
    this.router.navigate(['login']);
  }

  //navigate to home page
  home() {
    this.router.navigate(['home'])
  }
}
