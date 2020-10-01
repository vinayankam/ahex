import { Component, Input, OnInit } from '@angular/core';
export interface PeriodicElement {
  name: string;
  gender: string;
  country: string;
}
const ELEMENT_DATA: PeriodicElement[] = [];

@Component({
  selector: 'app-child-data',
  templateUrl: './child-data.component.html',
  styleUrls: ['./child-data.component.css']
})
export class ChildDataComponent implements OnInit {
  displayedColumns: string[] = ['name', 'gender','country'];
  dataSource = ELEMENT_DATA;
  ELEMENT_DATA: any;
  @Input() parentData: any=[];
  constructor() { }

  ngOnInit(): void {
    this.dataSource = this.parentData;
  }

}
