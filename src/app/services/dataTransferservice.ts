import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';


@Injectable({
  providedIn: 'root',
})
export class dataTransferservice {

  constructor() { }
    private data = new BehaviorSubject<any>('');
    private password : any;
    public correct : boolean;

    setData(a) {
        this.data.next(a);
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

}