import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { tsFormModel } from '../forms/tdFormModel';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {
  profileForm = this.fb.group({
    firstName: ['',Validators.required],
    number: ['',Validators.required],
    email: ['',Validators.required],
    gender:['',Validators.required],
    country: ['',Validators.required],
    description: ['',Validators.required],
    check: ['',Validators.required],
  });
  countryArray: any[] = [
    {value: 'India', viewValue: 'India'},
    {value: 'USA', viewValue: 'USA'},
    {value: 'UAE', viewValue: 'UAE'}
  ];
  tdCountryArray = ['india', 'USA', 'UAE'];
  model = new tsFormModel('',1233344444, 'vinay55@gmail.com','male',this.tdCountryArray[1],'hii', true);

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void { }
  
  signup() {
    console.log(this.profileForm.value);
  }

  tdSignup() {
    console.log({name:this.model.tdName,number:this.model.tdNumber,email:this.model.tdEmail,gender:this.model.tdGender,country:this.model.tdSelectedValue,description:this.model.tdDescription,checked:this.model.tdCheck})
  }
}
