import { Component, OnInit } from '@angular/core';
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
  constructor() { }

  ngOnInit(): void {
  }
  submit() {
    this.parentData.push({name:this.name,gender:this.gender,country:this.selectedValue});
    console.log(this.parentData)
  }

}
