import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { LoginSucessComponent } from './login-sucess/login-sucess.component';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import {MatDialogModule, MAT_DIALOG_DEFAULT_OPTIONS } from '@angular/material/dialog';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { AuthModule } from '@auth0/auth0-angular';
import { FormsComponent } from './forms/forms.component';
import { DatepickerComponent } from './datepicker/datepicker.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { NgxDaterangepickerMd } from 'ngx-daterangepicker-material';
import * as moment from 'moment';
import { MatListModule } from '@angular/material/list';
import { DataTransferComponent } from './data-transfer/data-transfer.component';
import { ChildDataComponent } from './data-transfer/child-data/child-data.component';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { DirectivesComponent } from './directives/directives.component';
import { passwordDirective } from './directive/passwordDirective';
import { UploadersComponent } from './uploaders/uploaders.component';
import { FileUploadModule } from 'ng2-file-upload';
import { LoadingDirective } from './directive/loading.directive';
import { MultiLanguageComponent } from './multi-language/multi-language.component';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { GitApiComponent } from './git-api/git-api.component';
import { YoutubeComponent } from './youtube/youtube.component';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { FoodAppComponent } from './food-app/food-app.component';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { YouTubePlayerModule } from "@angular/youtube-player";
import { TypeaheadComponent } from './typeahead/typeahead.component';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { SocialLoginsComponent } from './social-logins/social-logins.component';
import { SocialLoginModule, SocialAuthServiceConfig } from 'angularx-social-login';
import { GoogleMapsModule } from '@angular/google-maps'
import { GoogleLoginProvider, FacebookLoginProvider } from 'angularx-social-login';
import { MouseMoveComponent } from './mouse-move/mouse-move.component';
import { BraintreeComponent } from './braintree/braintree.component';
import { NgxBraintreeModule } from 'ngx-braintree';
import { environment } from 'src/environments/environment';
import { NotesComponent } from './notes/notes.component';
export function translateHttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

const myroutes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'signup',component:SignupComponent},
  {path:'login',component:LoginComponent},
  {path:'loginSucess',component:LoginSucessComponent},
  {path:'forgotPassword',component:ForgotPasswordComponent},
  {path:'forms',component:FormsComponent},
  {path:'datePicker',component:DatepickerComponent},
  {path:'dataTransfer',component:DataTransferComponent},
  {path:'directives/password',component:DirectivesComponent},
  {path:'directives/loader',component:DirectivesComponent},
  {path:'uploader/pdf',component:UploadersComponent},
  {path:'uploader/img',component:UploadersComponent},
  {path:'multiLanguge',component:MultiLanguageComponent},
  {path:'gitApi',component:GitApiComponent},
  {path:'youtube',component:YoutubeComponent},
  {path:'foodApp',component:FoodAppComponent},
  {path:'typeahead',component:TypeaheadComponent},
  {path:'socialLogin',component:SocialLoginsComponent},
  {path:'mouseMove',component:MouseMoveComponent},
  {path:'brainTree',component:BraintreeComponent},
  {path:'notes',component:NotesComponent},
]
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SignupComponent,
    LoginComponent,
    LoginSucessComponent,
    ForgotPasswordComponent,
    FormsComponent,
    DatepickerComponent,
    DataTransferComponent,
    ChildDataComponent,
    DirectivesComponent,
    passwordDirective,
    UploadersComponent,
    LoadingDirective,
    MultiLanguageComponent,
    GitApiComponent,
    YoutubeComponent,
    FoodAppComponent,
    TypeaheadComponent,
    SocialLoginsComponent,
    MouseMoveComponent,
    BraintreeComponent,
    NotesComponent 
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    RouterModule.forRoot(myroutes),
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatCheckboxModule,
    MatRadioModule,
    MatSelectModule,
    MatTableModule,
    MatDialogModule,
    AuthModule.forRoot({
      domain: 'dev-7l6sprbd.us.auth0.com',
      clientId: environment.auth0ID
    }),
    ReactiveFormsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    NgbModule,
    BsDatepickerModule.forRoot(),
    NgxDaterangepickerMd.forRoot(),
    MatListModule,
    MatSortModule,
    MatPaginatorModule,
    FileUploadModule,
    HttpClientModule,
    MatProgressSpinnerModule,
    TranslateModule.forRoot({
        loader: {
          provide: TranslateLoader,
          useFactory: translateHttpLoaderFactory,
          deps: [HttpClient]
        }
      }),
      PdfViewerModule,
      YouTubePlayerModule,
      MatAutocompleteModule,
     SocialLoginModule,
     GoogleMapsModule,
     NgxBraintreeModule 
  ],
  providers: [
    {provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: {hasBackdrop: false}},
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: false,
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider(environment.googleKEY),
          },
          {
            id: FacebookLoginProvider.PROVIDER_ID,
            provider: new FacebookLoginProvider(environment.facebookKEY),
          },
        ],
      } as SocialAuthServiceConfig,
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
