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
  myControlUser = new FormControl();
  options: any = [];
  optionsUser: any = [];
  forLoopLIst:any;
  filteredOptions: Observable<string[]>;
  filteredOptionsUser: Observable<string[]>;
  load: any;
  namesArray: any = [];
  data:any
  userData:any;
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

    this.gitService.getGitApiUser().subscribe((data) => {
      this.userData = data;
    })
    setTimeout(() => {
      let a = []
      this.userData.items.forEach(function (value) {
        a.push(value.login);
        }); 
        this.optionsUser = a;
        this.filteredOptionsUser = this.myControlUser.valueChanges.pipe(
          startWith(''),
          map(value => this._filterUser(value))
        );
    }, 5000);
  }
  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.options.filter(option => option.toLowerCase().indexOf(filterValue) === 0);
  }
  private _filterUser(value: string): string[] {
    const filterValueUser = value.toLowerCase();
    return this.optionsUser.filter(option => option.toLowerCase().indexOf(filterValueUser) === 0);
  }
}
