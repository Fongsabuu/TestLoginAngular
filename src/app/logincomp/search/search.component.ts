import { Component, OnInit, Injectable } from '@angular/core';
import { UserLogin } from "../../model/user-login";
import { LoginServicesService } from '../../Service/login.service';
import { Router } from '@angular/router';
import { TabloginsComponent } from "../tablogins/tablogins.component";
import { Url } from 'url';
import { SelectItem } from 'primeng/primeng';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  private user: UserLogin;
  private sortOptions: SelectItem[];
  private sortKey: string;
  private sortField: string;
  private sortOrder: number;

  constructor(private loginService: LoginServicesService,
    private route: Router) { }

  ngOnInit() {
    this.gelALlUser();
    this.sortOptions = [
      { label: 'Newest First', value: '!id' },
      { label: 'Oldest First', value: 'id' },
      { label: 'User', value: 'username' }
    ];
    //console.log(this.imageUrl);
  }

  gelALlUser() {
    this.loginService.doShowAllUser().subscribe((response) => {
      this.user = response.result;
      console.log(this.user);
    });
  }

  onSortChange(event) {
    let value = event.value;

    if (value.indexOf('!') === 0) {
      this.sortOrder = -1;
      this.sortField = value.substring(1, value.length);
    }
    else {
      this.sortOrder = 1;
      this.sortField = value;
    }
  }

  test(){
    alert("Hello World");
  }
}
