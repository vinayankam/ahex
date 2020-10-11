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
  // @Output() refreshChild = new EventEmitter<boolean>();
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
    this.service.getData().subscribe(data => {
      this.dataSource  = new MatTableDataSource(data); 
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
    })
      // this.refreshChild.emit(this.refresh);
  }
  
}
