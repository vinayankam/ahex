import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-datepicker',
  templateUrl: './datepicker.component.html',
  styleUrls: ['./datepicker.component.css']
})
export class DatepickerComponent implements OnInit {
  minDate: Date;
  datepicker;
  model:any;
  selected;
  constructor() { 
    // const currentYear = new Date().getFullYear();
    this.minDate = new Date();
  }

  

  ngOnInit(): void {
  console.log(this.minDate);
   

    console.log(this.model)
  }

}
