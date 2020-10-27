import { Component, OnInit } from '@angular/core';
import { dataTransferservice } from '../services/dataTransferservice';
import { DomSanitizer } from '@angular/platform-browser';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
@Component({
  selector: 'app-youtube',
  templateUrl: './youtube.component.html',
  styleUrls: ['./youtube.component.css']
})
export class YoutubeComponent implements OnInit {
  myControl = new FormControl();
  options: Array<any> = [];
  filteredOptions: Observable<string[]>;
  trendingVideos:  Array<any> = [];
  comments: string[] = ['Good', 'super', 'very good'];
  comment:string;
  data:any;
  viewLink: string = 'OyofB8DhH8g';
  searchValue:string;
  selectedVideo:string = '';
  constructor(public service: dataTransferservice,private sanitizer:DomSanitizer) { }
  ngAfterContentInit() {}

  ngOnInit(): void {
    this.service.getVideosForChanel('UCgq1YfP5rvJdqLBItGkHdkA',10).subscribe(data =>{
      this.data = data;
      let a = [];
      this.data.items.forEach(function (value) {
         a.push({link:value.id.videoId,description:value.snippet.description});
        }); 
        this.trendingVideos = a;
        this.filteredOptions = this.myControl.valueChanges.pipe(
          startWith(''),
          map(value => this._filter(value))
        );
    });
  }

  displayFn(user) {
    return user && user.description ? user.description : '';
  }
  
  //post any comment
  post() {
    this.comments.push(this.comment);
  }

  //to display selected video
  navigate(link) {
    this.viewLink = link;
  }

  //search for videos
  search(searchLink) {
    this.viewLink = searchLink.link;
  }

  private _filter(value: any): string[] {
    const filterValue = value.toLowerCase();
    if(!filterValue){
      return [];
    }
    return this.trendingVideos.filter(option => option.description.toLowerCase().indexOf(filterValue) === 0);
  }
}
