import { Component, OnInit } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  private name: String;
  private age: number;
  private email: string;
  private loginstatus: string;

  // dictionary 
  private address: {
    street: string,
    city: string,
    province: string,
    postcode: string
  }

  // array
  private skills: string[];

  constructor(private router: Router) { }

  ngOnInit() {
    this.loginstatus = localStorage.getItem("lStatus");
    if (this.loginstatus == "1") {
      this.name = "Methee GOSolf";
      this.age = 21;
      this.email = "Mathee.s@ku.th";

      this.address = {
        street: "70/939 Rama4Rd.",
        city: "Prompab",
        province: "Bangkok",
        postcode: "10100"
      };

      this.skills = ["Programing", "Football", "Dota2"];
    }
    else {
      this.router.navigate(['/login']);
    }
  }

  addSkill(skill) {
    this.skills.push(skill);
    return false;
  }

  removeSill(skill) {
    this.skills.forEach((element, index) => {
      if (element == skill) {
        this.skills.splice(index, 1);
      }
    });
  }
}

