import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class dataTransferservice {

  constructor() { }
    public data: any=[];

    setData(a) {
        this.data.next(a);
    }

}