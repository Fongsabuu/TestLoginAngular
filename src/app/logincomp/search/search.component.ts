import { Component, OnInit, Injectable } from '@angular/core';
import { UserLogin } from "../../model/user-login";
import { LoginServicesService } from '../../Service/login.service';
import { Router } from '@angular/router';
import { TabloginsComponent } from "../tablogins/tablogins.component";
import { SelectItem } from 'primeng/primeng';



@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  private user: UserLogin[];
  private sortOptions: SelectItem[];
  private sortKey: string;
  private sortField: string;
  private sortOrder: number;
  private testlength;
  private rows: string;
  private first: string;

  constructor(private loginService: LoginServicesService,
    private route: Router,) { }

  ngOnInit() {
    this.first = "0";
    this.rows = "30";                                             //!---  Data count to display per page. --!
    this.lazyloadpaging();
    this.sortOptions = [
      { label: 'Newest First', value: '!id' },
      { label: 'Oldest First', value: 'id' },
      { label: 'User', value: 'username' }
    ];
  }

  
  lazyloadpaging() {
    this.loginService.getCountUser().subscribe((response) => {
      this.testlength = response.result;
    });
    this.loginService.lazyloadpaging(this.first, this.rows).subscribe((response) => {
      this.user = response.result;
    });
  }

  gelALlUser() {
    this.loginService.doShowAllUser().subscribe((response) => {
      this.user = response.result;
      console.log(this.user);
      this.testlength = this.user.length;
      console.log(this.testlength);
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

  test() {
    alert("Hello World");
  }

  loadUser(event) {
    this.first = event.first;
    this.loginService.lazyloadpaging(this.first, this.rows).subscribe((response) => {
      this.user = response.result;
    });
  }

  paginate(event) {
    console.log(event.rows);
    //event.first = Index of the first record
    //event.rows = Number of rows to display in new page
    //event.page = Index of the new page
    //event.pageCount = Total number of pages
  }
}
