import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserLogin } from "../../model/user-login";
import { LoginServicesService } from '../../Service/login.service';
import { TabloginsComponent } from "../tablogins/tablogins.component";
import {Location} from '@angular/common';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  private uLogin: UserLogin;
  private username: String;
  private password: String;
  private imageUrl;

  constructor( private router: Router,
    private loginService: LoginServicesService,
    private _location: Location) { }

  ngOnInit() {
    this.uLogin = this.loginService.getUser();
    console.log(this.uLogin);
    this.imageUrl = "http://localhost:8080/loadImage?id=" + this.uLogin.id;
  }

  // logOut() {
  //   localStorage.removeItem("lStatus");
  //   this.router.navigate(['/login']);
  // }

  updateUser() {
    this.loginService.updateUser(this.uLogin).subscribe((response) => {
      console.log(response.code);
      if (response.code == "200") {
        alert("Update Success......");
      }
      else {
        alert("Update fail.......");
      }
    });
  }
  backClicked() {
    this._location.back();
}
}
