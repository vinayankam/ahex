import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-multi-language',
  templateUrl: './multi-language.component.html',
  styleUrls: ['./multi-language.component.css']
})
export class MultiLanguageComponent  {

  constructor(private translateService: TranslateService) {
    translateService.setDefaultLang('en');
  }
 
  switchLanguage(language: string) {
  this.translateService.use(language);
}
}
