import { Component, OnInit } from '@angular/core';
import { dataTransferservice } from '../services/dataTransferservice';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent implements OnInit {
password: any;
conform:any;
  constructor(private service: dataTransferservice) { }

  ngOnInit(): void {
  }
  submit() {
    alert("sucess")
  }
  setGivenPassword(password){
    this.service.setPassword(password)
  }
  ValidatePassword(){
    if(this.service.correct == true){
      return false;
    }else{
      return true
    }
  }

}
