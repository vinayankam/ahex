import { Component, OnInit } from '@angular/core';
import { dataTransferservice } from '../services/dataTransferservice';
import { Directive, Input, TemplateRef, ViewContainerRef, EmbeddedViewRef, ComponentFactory, ComponentRef, ComponentFactoryResolver } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {ThemePalette} from '@angular/material/core';
import {ProgressSpinnerMode} from '@angular/material/progress-spinner';
@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent implements OnInit {
  password: any;
  conform:any;
  isLoading = true;
  color: ThemePalette = 'primary';
  mode: ProgressSpinnerMode = 'indeterminate';
  loaderSize: number = 75;
  activateState: string;
  refreshLoader: boolean = true;
  constructor(private service: dataTransferservice,private route: ActivatedRoute) { }

  ngOnInit(): void {
    if(this.route.snapshot.routeConfig.path.includes('password')){
      this.activateState = 'password';
    }else{
      this.activateState = 'loader';
    }
  }

  ChangeSize(size) {
    this.refreshLoader = false;
    setTimeout(() => {
      this.loaderSize = size;
      this.refreshLoader = true; 
    }, 100);
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

  toggle() {
    this.isLoading = !this.isLoading;
  }
}
