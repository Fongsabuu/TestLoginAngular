import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UserComponent } from './components/user/user.component';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './/app-routing.module';
import { LoginComponent } from './logincomp/login/login.component';
import { HttpModule, Http } from '@angular/http';
import { HomeComponent } from './logincomp/home/home.component';
import { RegisterComponent } from './logincomp/register/register.component';
import { GetallUserComponent } from './logincomp/getall-user/getall-user.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UploadImageComponent } from './logincomp/upload-image/upload-image.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    AboutusComponent,
    LoginComponent,
    HomeComponent,
    RegisterComponent,
    GetallUserComponent,
    UploadImageComponent
  ],
  imports: [
    BrowserModule, 
    FormsModule, AppRoutingModule,
    HttpModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
