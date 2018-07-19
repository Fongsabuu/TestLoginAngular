import { Component, OnInit } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';


@Component({
  selector: 'app-tablogins',
  templateUrl: './tablogins.component.html',
  styleUrls: ['./tablogins.component.css']
})
export class TabloginsComponent implements OnInit { 

  constructor(private router:Router) { }

  ngOnInit() {
  }

  logOut() {
    localStorage.removeItem("lStatus");
    this.router.navigate(['/login']);
  }
}
