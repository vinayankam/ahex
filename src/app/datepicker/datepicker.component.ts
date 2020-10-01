import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
interface list {
  value: string;
  viewValue: string;
}
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
  date:any;
  formateList: list[] = [
    {value: 'CST', viewValue: 'CST'},
    {value: 'MST', viewValue: 'MST'},
    {value: 'PST', viewValue: 'PST'},
    {value: 'IST', viewValue: 'IST'}

  ];
  dateFormate:any;
  constructor() { 
    this.minDate = new Date();
  }

  ngOnInit(): void {
  }

  formate(a) {
  let p = new DatePipe('en-Us').transform(this.date, 'EEE MMM d y hh:mm:ss', a);
  this.date = new Date(p);
}

}
