import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-youtube',
  templateUrl: './youtube.component.html',
  styleUrls: ['./youtube.component.css']
})
export class YoutubeComponent implements OnInit {
  comments: string[] = ['Good', 'super', 'very good'];
  comment:string;
  
  constructor() { }
  ngAfterContentInit() {}
  ngOnInit(): void {
  }
  post() {
    this.comments.push(this.comment);
  }
}
