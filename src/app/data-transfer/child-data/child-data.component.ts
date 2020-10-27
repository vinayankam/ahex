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
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  refresh: boolean;
  dataSource: any;
  displayedColumns: string[] = ['name', 'gender','country'];

  constructor(private service: dataTransferservice) { }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }
  
  ngOnInit(): void {
    this.service.getData().subscribe(data => {
      this.dataSource  = new MatTableDataSource(data); 
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
    })
  } 
}
