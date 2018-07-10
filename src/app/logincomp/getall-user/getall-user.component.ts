import { Component, OnInit } from '@angular/core';
import { UserLogin } from '../../model/user-login';
import { LoginServicesService } from '../../Service/login.service';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Component({
  selector: 'app-getall-user',
  templateUrl: './getall-user.component.html',
  styleUrls: ['./getall-user.component.css']
})
export class GetallUserComponent implements OnInit {

  constructor(private loginService: LoginServicesService,
    private router: Router) { }

  ngOnInit() {
    this.getallUser();
  }

  getallUser(){
    
  }

  logOut() {
    localStorage.removeItem("lStatus");
    this.router.navigate(['/login']);
  }
}
