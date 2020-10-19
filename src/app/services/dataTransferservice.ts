import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { Observable } from 'rxjs'
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class dataTransferservice {
  constructor(public http: HttpClient) { }
  private data = new BehaviorSubject<any>('');
  private password : any;
  public correct : boolean;

  getVideosForChanel(channel, maxResults): Observable<Object> {
    let api = 'AIzaSyBVyGZ990DrPWTWVRd0hFMKjo5Hf1yLN5U'
    let url = 'https://www.googleapis.com/youtube/v3/search?key=' + api + '&channelId=' + channel + '&order=date&part=snippet &type=video,id&maxResults=' + maxResults
    return this.http.get(url)
      .pipe(map((res) => {
        console.log(res)
        return res;
      }))
  }

  getsuggetions(): Observable<Object> {
    let api = 'AIzaSyBVyGZ990DrPWTWVRd0hFMKjo5Hf1yLN5U'
    let url = 'https://www.googleapis.com/youtube/v3/videos?part=contentDetails&chart=mostPopular&regionCode=IN&maxResults=5&key=AIzaSyBVyGZ990DrPWTWVRd0hFMKjo5Hf1yLN5U'
    return this.http.get(url)
      .pipe(map((res) => {
        console.log(res)
        return res;
      }))
  }

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

  getGitApi():Observable<any> {
    const url = "https://api.github.com/search/repositories?q=topic:ruby+topic:rails"

    return this.http.get<any>(url);
  }

  getGitApiUser():Observable<any> {
    const url = " https://api.github.com/search/users?q=tom+repos:%3E42+followers:%3E1000"
    return this.http.get<any>(url);
  }
}