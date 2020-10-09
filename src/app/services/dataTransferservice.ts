import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root',
})
export class dataTransferservice {

  constructor(public http: HttpClient) { }
  private data = new BehaviorSubject<any>('');
  private password : any;
  public correct : boolean;

  setData(a) {
    this.data.next(a);
  // console.log( this.data)
  }

  getData() {
    return this.data.asObservable(); 
  }

  setPassword(a) {
    this.password = a;
  }

  getPassword(){
    return this.password;
  }

  getGitApi():Observable<any> {
    const url = "https://api.github.com/search/repositories?q=topic:ruby+topic:rails"

    return this.http.get<any>(url);
  }


}