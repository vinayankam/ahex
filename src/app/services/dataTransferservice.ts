import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { Observable } from 'rxjs'
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})

export class dataTransferservice {
  constructor(public http: HttpClient) { }
  private data = new BehaviorSubject<any>('');
  private password : number;
  public correct : boolean;

  getVideosForChanel(channel, maxResults): Observable<Object> {
    let api = environment.youtubeAPI;
    let url = environment.youtubeURL + 'v3/search?key=' + api + '&channelId=' + channel + '&order=date&part=snippet &type=video,id&maxResults=' + maxResults
    return this.http.get(url)
      .pipe(map((res) => {
        return res;
      }))
  }

  getsuggetions(): Observable<Object> {
    let api = environment.youtubeAPI;
    let url = environment.youtubeURL + 'v3/videos?part=contentDetails&chart=mostPopular&regionCode=IN&maxResults=5&key=AIzaSyBVyGZ990DrPWTWVRd0hFMKjo5Hf1yLN5U'
    return this.http.get(url)
      .pipe(map((res) => {
        return res;
      }))
  }

  setData(data) {
    this.data.next(data);
  }

  getData() {
    return this.data.asObservable(); 
  }

  setPassword(password) {
    this.password = password;
  }

  getPassword(){
    return this.password;
  }

  getGitApi():Observable<any> {
    const url = environment.githubURL + "search/repositories?q=topic:ruby+topic:rails";
    return this.http.get<any>(url);
  }

  getGitApiUser():Observable<any> {
    const url = environment.githubURL + "search/users?q=tom+repos:%3E42+followers:%3E1000";
    return this.http.get<any>(url);
  }
}