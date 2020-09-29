import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';

interface country {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {
  profileForm = new FormGroup({
    firstName: new FormControl(''),
    number: new FormControl(''),
    email: new FormControl(''),
    gender: new FormControl(''),
    country: new FormControl(''),
    description: new FormControl(''),
    check: new FormControl(''),
  });
  countryArray: country[] = [
    {value: 'India', viewValue: 'India'},
    {value: 'USA', viewValue: 'USA'},
    {value: 'UAE', viewValue: 'UAE'}
  ];
  constructor() { }

  ngOnInit(): void {
    
  }
  signup() {
    console.log(this.profileForm.value);
  }

}
