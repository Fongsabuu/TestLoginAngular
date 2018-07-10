import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { UserLogin } from '../../model/user-login';
import { LoginServicesService } from '../../Service/login.service';
import { CdkTableModule } from '@angular/cdk/table';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  @Input() userlogin: UserLogin;
  private loginstatus: string;
  private uLogin: UserLogin;
  private displayedColumns = ['id', 'username', 'password'];
  private dataSource;
  private selectedUser: UserLogin;
  private userLogin: UserLogin;
  private imageUrl;

  constructor(private router: Router,
    private loginService: LoginServicesService) { }

  ngOnInit() {
    this.uLogin = null;
    this.loginstatus = localStorage.getItem("lStatus");
    if (this.loginstatus == "1") {
      this.userLogin = this.loginService.getUser();
      this.gelALlUser();
      console.log(this.userLogin);
    } else {
      this.router.navigate(['/login']);
    }
  }

  logOut() {
    localStorage.removeItem("lStatus");
    this.router.navigate(['/login']);
  }

  gelALlUser() {
    this.loginService.doShowAllUser().subscribe((response) => {
      this.uLogin = response.result;
      console.log(this.uLogin);
      this.dataSource = this.uLogin;
      console.log(this.dataSource);
    });
  }

  onSelect(user: UserLogin): void {
    console.log(user.id);
    this.imageUrl = "http://localhost:8080/loadImage?id=" + user.id;
    this.selectedUser = user;
        

  }

  updateUser(updateUser: UserLogin) {
    this.loginService.updateUser(updateUser).subscribe((response) => {
      console.log(response.code);
      if (response.code == "200") {
        alert("Update Success......");
      }
      else {
        alert("Update fail.......");
      }
      this.gelALlUser();
    });
  }

  deleteUser(deleteUser: UserLogin) {
    this.loginService.deleteUser(deleteUser).subscribe((response) => {
      console.log(response.code);
      if (response.code == "200") {
        alert("Delete Success");
      }
      else {
        alert("Delete fail")
      }
      this.gelALlUser();
    });
  }
  clearContact(){
    this.selectedUser.id = null;
    this.selectedUser.username = null;
    this.selectedUser.password = null;
    this.gelALlUser();
  }
}
