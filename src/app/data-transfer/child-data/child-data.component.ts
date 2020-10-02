import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { dataTransferservice } from 'src/app/services/dataTransferservice';
import {MatPaginator} from '@angular/material/paginator';


@Component({
  selector: 'app-child-data',
  templateUrl: './child-data.component.html',
  styleUrls: ['./child-data.component.css']
})

export class ChildDataComponent implements OnInit {
  @Input() parentData: any=[];
  refresh: boolean;
  sortKey: any;
  dataSource: any;

  constructor(private service: dataTransferservice) { }

  displayedColumns: string[] = ['name', 'gender','country'];


  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }
  ngOnInit(): void {
    this.refresh= true;
    this.service.getData().subscribe(data => {
      this.dataSource  = new MatTableDataSource(data); 
      this.refresh= false;
      setTimeout(() => {
      this.refresh= true;
      // this.dataSource  = new MatTableDataSource(data);
      }, 0);
    })
  }








  // sortName(from,e) {
  //   //let asc = this.dataSource.sort((a,b)=> (a[from] > b[from] ? 1 : -1))
  //   //let des = this.dataSource.sort((a,b)=> (a[from] < b[from] ? -1 : 1))
  //   // this.dataSource = des;
  //   console.log(asc)

  //   console.log(des)

  //   // if(this.sortKey == from){
  //   //   console.log(1)
  //   //   this.dataSource = des;
  //   // }else{
  //   //   this.sortKey = '';
  //   //   this.dataSource = asc;
  //   //   console.log(2)

  //   // }

  //   // console.log(asc)
  //   // this.refresh= false;
  //   //   setTimeout(() => {
  //   //   this.refresh= true;
  //   //   //  this.sortKey = from;
  //   //   }, 0);
  // }

}
