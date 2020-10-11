import { Component, OnInit } from '@angular/core';
import { dataTransferservice } from '../services/dataTransferservice';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
@Component({
  selector: 'app-typeahead',
  templateUrl: './typeahead.component.html',
  styleUrls: ['./typeahead.component.css']
})
export class TypeaheadComponent implements OnInit {
  myControl = new FormControl();
  options: any = [];
  forLoopLIst:any;
  filteredOptions: Observable<string[]>;
  load: any;
  namesArray: any = [];
  data:any
  loading:boolean = true;
  constructor(private gitService:dataTransferservice) { }

  ngOnInit(): void {
    this.load = false;
    setTimeout(() => {
      this.load = true;
    }, 5000);
  this.options = ['vinay','bunny'];
    this.gitService.getGitApi().subscribe((data) => {
      this.data = data;
    })
    setTimeout(() => {
      let a = []
      this.data.items.forEach(function (value) {
        a.push(value.name);
        }); 
        this.options = a;
      this.filteredOptions = this.myControl.valueChanges.pipe(
        startWith(''),
        map(value => this._filter(value))
      );
    }, 5000);
    setTimeout(() => {
      this.loading = false;
    }, 5000);
  }
  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter(option => option.toLowerCase().indexOf(filterValue) === 0);
  }
}
