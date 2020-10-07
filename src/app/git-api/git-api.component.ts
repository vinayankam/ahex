import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-git-api',
  templateUrl: './git-api.component.html',
  styleUrls: ['./git-api.component.css']
})
export class GitApiComponent implements OnInit {
userName: string = "vinayankam";
  constructor() { }

  ngOnInit(): void {
    // this.requestUserRepos('vinayankam');
  }
  requestUserRepos(username){
    console.log(username)
    try {
    const xhr = new XMLHttpRequest();
    const url = `https://api.github.com/users/${username}/repos`;
    xhr.open('GET', url, true);
    xhr.onload = function() {
        const data = JSON.parse(this.response);
        console.log(data); 
    }
    xhr.send();
    }
    catch (exception) {
        console.log(exception)
    }
  }
}
