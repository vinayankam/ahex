import { Directive, ElementRef, HostListener } from '@angular/core';
import { dataTransferservice } from '../services/dataTransferservice';

@Directive({
  selector: '[passwordDirective]'
})
export class passwordDirective {
  constructor(public el: ElementRef, public service: dataTransferservice) {  
 }

  @HostListener('input') onInput() {
    let b = this.el.nativeElement.value
  
    let a = this.service.getPassword()
 
    if(a == b){
      this.service.correct = true;
    }else{
      this.service.correct = false;
    }
  }
   
}

