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
  constructor(private gitService:dataTransferservice) { }

  ngOnInit(): void {
  this.options = ['vinay','bunny'];
    
    this.gitService.getGitApi().subscribe((data) => {
      console.log(data.items)
      data.items.forEach(function (value) {
      console.log(value);
      console.log(value.name);
      //  this.options.push(value.name);
      // this.forLoopLIst = value.name;
      }); 

    })
        // this.options.push(this.forLoopLIst);
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value))
    );
    // console.log(this.list)
  }
  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter(option => option.toLowerCase().indexOf(filterValue) === 0);
  }

}
