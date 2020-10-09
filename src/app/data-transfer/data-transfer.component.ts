import { Component, OnInit } from '@angular/core';
import { dataTransferservice } from '../services/dataTransferservice';

interface country {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-data-transfer',
  templateUrl: './data-transfer.component.html',
  styleUrls: ['./data-transfer.component.css']
})
export class DataTransferComponent implements OnInit {
parentData:any = [{name:'vinay',gender:'male',country:'india'},
                  {name:'avinash',gender:'male',country:'usa'},
                  {name:'bunny',gender:'male',country:'uae'},
                  {name:'roja',gender:'female',country:'aus'},
                  {name:'shiv',gender:'female',country:'aus'},
                  {name:'avi',gender:'female',country:'aus'},
                  {name:'www',gender:'female',country:'aus'},
                  {name:'eeee',gender:'female',country:'aus'},
                  {name:'rrrrrr',gender:'female',country:'aus'},
                  {name:'yyyyy',gender:'female',country:'aus'},
                  {name:'iii',gender:'female',country:'aus'},
                  {name:'rojnna',gender:'female',country:'aus'},
];
  name: any;
  password: any;
  gender: any;
  selectedValue: string;
  Country: country[] = [
    {value: 'India', viewValue: 'India'},
    {value: 'USA', viewValue: 'USA'},
    {value: 'UAE', viewValue: 'UAE'}
  ];
  constructor(private service: dataTransferservice) { }

  ngOnInit(): void {
    this.service.setData(this.parentData);
  }
  submit() {
    this.parentData.push({name:this.name,gender:this.gender,country:this.selectedValue});
    this.service.setData(this.parentData);
  }

  refresh(a) {
    console.log(a)
  }

}
