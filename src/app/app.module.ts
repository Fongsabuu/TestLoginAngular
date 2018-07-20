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
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UploadImageComponent } from './logincomp/upload-image/upload-image.component';
import { EditComponent } from "./logincomp/edit/edit.component";
import {AccordionModule} from 'primeng/accordion';     //accordion and accordion tab

import {ButtonModule} from 'primeng/button';
import {InputTextModule} from 'primeng/inputtext';
import { TabloginsComponent } from './logincomp/tablogins/tablogins.component';
import { SearchComponent } from './logincomp/search/search.component';
import {DataViewModule} from 'primeng/dataview';
import {DropdownModule} from 'primeng/dropdown';
import {PanelModule} from 'primeng/panel';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    AboutusComponent,
    LoginComponent,
    HomeComponent,
    RegisterComponent,
    UploadImageComponent,
    EditComponent,
    TabloginsComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule, 
    FormsModule, AppRoutingModule,
    HttpModule,
    BrowserAnimationsModule,
    AccordionModule,
    ButtonModule,
    InputTextModule,
    DataViewModule,
    DropdownModule,
    PanelModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
