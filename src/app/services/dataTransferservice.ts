import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';


@Injectable({
  providedIn: 'root',
})
export class dataTransferservice {

  constructor() { }
    private data = new BehaviorSubject<any>('');

    setData(a) {
        this.data.next(a);
    }

    getData() {
        return this.data.asObservable();
    }

    ngOnInit(): void {
    }

}