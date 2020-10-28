import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-datepicker',
  templateUrl: './datepicker.component.html',
  styleUrls: ['./datepicker.component.css']
})

export class DatepickerComponent implements OnInit {
  minDate: Date;
  datepicker: Date;
  selected: Date;
  date: Date;
  formateList: Array<any> = [
    {value: 'CST', viewValue: 'CST'},
    {value: 'MST', viewValue: 'MST'},
    {value: 'PST', viewValue: 'PST'},
    {value: 'IST', viewValue: 'IST'}
  ];
  dateFormate: Date;

  constructor() { 
    this.minDate = new Date();
  }

  ngOnInit(): void {
  }

  formate(dateFormate) {
  let changeFormate = new DatePipe('en-Us').transform(this.date, 'EEE MMM d y hh:mm:ss', dateFormate);
  this.date = new Date(changeFormate);
  }
}
