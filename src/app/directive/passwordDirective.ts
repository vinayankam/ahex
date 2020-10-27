import { Directive, ElementRef, HostListener } from '@angular/core';
import { dataTransferservice } from '../services/dataTransferservice';

@Directive({
  selector: '[passwordDirective]'
})
export class passwordDirective {
  constructor(public el: ElementRef, public service: dataTransferservice) {  
  }

  @HostListener('input') onInput() {
    let password = this.el.nativeElement.value;
    let checkPassword = this.service.getPassword();
    if(checkPassword == password){
      this.service.correct = true;
    }else{
      this.service.correct = false;
    }
  }
}

