import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './components/user/user.component';
import { LoginComponent } from './logincomp/login/login.component';
import { HomeComponent } from "./logincomp/home/home.component";
import { RegisterComponent } from "./logincomp/register/register.component";
import { EditComponent } from "./logincomp/edit/edit.component";
import {SearchComponent} from "./logincomp/search/search.component";
import {DataViewModule} from 'primeng/dataview';
import {DropdownModule} from 'primeng/dropdown';


const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'User', component: UserComponent },
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'home/edit', component: EditComponent },
  { path: 'home/search', component: SearchComponent },
  { path: '**', redirectTo: '/login', pathMatch: 'full'}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}