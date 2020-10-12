import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-mouse-move',
  templateUrl: './mouse-move.component.html',
  styleUrls: ['./mouse-move.component.css']
})
export class MouseMoveComponent implements OnInit {
  queryselector:any
  top:any;
  left:any;
  expand=false;
  constructor() { }

  ngOnInit(): void {
  }

  @HostListener('document:click', ['$event'])
  onClick($event) {
    this.expand=true;
    setTimeout(() => {
      this.expand=false;
    }, 500)
  }

  @HostListener('document:mousemove', ['$event'])
  onMousemove($event) {
    this.top=($event.pageY - 10)+ "px";
    this.left= ($event.pageX - 10)+ "px";
  }

}
