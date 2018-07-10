import { Component, OnInit } from '@angular/core';
import { UserLogin } from '../../model/user-login';
import { LoginServicesService } from '../../Service/login.service';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
  
})
export class LoginComponent implements OnInit {

  private uLogin: UserLogin;
  private code: string;
  private loginstatus: string;
  private values = '';     /// +++++++
  heroes = ['Windstorm', 'Bombasto', 'Magneta', 'Tornado'];    /// +++++++

  constructor(private loginService: LoginServicesService,
    private router: Router) {

  }

  ngOnInit() {
    // this.uLogin = null;
    //this.uLogin.username = "";
     //this.uLogin.password = "";
    this.uLogin = {
      id: null,
      username: null,
      password: null
    }
    this.loginstatus = localStorage.getItem("lStatus");
    if (this.loginstatus == "1") {
      this.router.navigate(['/home']);
    } else {

    }
  }

  login(form: any) {
    // console.log(form.value);
      this.loginService.doLogin(form.value).subscribe((response) => {
        this.uLogin = response.result;
        this.code = response.code;

        if (this.code == "200") {
          console.log("login success ==> " + this.uLogin.id + "||" + this.uLogin.username + "||" + this.uLogin.password);
          localStorage.setItem("lStatus", "1"); //*** set login status = 1 when login ***
          this.loginService.setUser(this.uLogin);
          this.router.navigate(['/home']);
        } else {
          console.log("login fail T-T");
          alert("login fail T-T  username or password incorrect");
        } 
      });
  }

  onKey(event: any) { // without type info   /// ++++++
    this.values += event.target.value + ' | ';
  }

  addHero(newHero: string) {      /// +++++++
    if (newHero) {
      this.heroes.push(newHero);
    }
  }
}
