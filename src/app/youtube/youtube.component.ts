import { Component, OnInit } from '@angular/core';
import { dataTransferservice } from '../services/dataTransferservice';
import { DomSanitizer } from '@angular/platform-browser'
@Component({
  selector: 'app-youtube',
  templateUrl: './youtube.component.html',
  styleUrls: ['./youtube.component.css']
})
export class YoutubeComponent implements OnInit {
  trendingVideos: any = [];
  comments: string[] = ['Good', 'super', 'very good'];
  comment:string;
  data:any;
  viewLink: any = 'OyofB8DhH8g';
  
  constructor(public service: dataTransferservice,private sanitizer:DomSanitizer) { }
  ngAfterContentInit() {}
  ngOnInit(): void {
    this.service.getVideosForChanel('UCgq1YfP5rvJdqLBItGkHdkA',10).subscribe(data =>{
      this.data = data;
      console.log(this.data)
      let a = [];
      this.data.items.forEach(function (value) {
        console.log(value)
         a.push({link:value.id.videoId,description:value.snippet.description});
        }); 
        this.trendingVideos = a;
        console.log(this.trendingVideos)
    });
  }
  
  post() {
    this.comments.push(this.comment);
  }

  navigate(a) {
    console.log(a)
    this.viewLink = a
  }
}
