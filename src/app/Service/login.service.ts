import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { catchError, map, tap, count } from 'rxjs/operators';
import { Observable, of, } from 'rxjs';
import { UserLogin } from "../model/user-login";

@Injectable({
  providedIn: 'root'
})
export class LoginServicesService {
  private userLogin: UserLogin;
  constructor(private http: Http) { }

  getUser(){
    return this.userLogin;
  }

  setUser(user) {
    this.userLogin = user;
  }

  doLogin(value) {
    let headers = new Headers([{ 'Content-Type': 'application/json', 'Accept': 'application/json' }]);
    let options = new RequestOptions({ headers: headers });
    return this.http.post('http://localhost:8080/login', value, options).pipe(map((response) => { return response.json() })
    );
  }

  doInsert(value) {
    let headers = new Headers([{ 'Content-Type': 'application/json', 'Accept': 'application/json' }]);
    let options = new RequestOptions({ headers: headers });
    return this.http.post('http://localhost:8080/insertlogin', value, options).pipe(map((response) => { return response.json() })
    );
  }

  doShowAllUser() {
    return this.http.get('http://localhost:8080/getalluser').pipe(map((res) => res.json()));
  }

  updateUser(value) {
    let headers = new Headers([{ 'Content-Type': 'application/json', 'Accept': 'application/json' }]);
    let options = new RequestOptions({ headers: headers });
    return this.http.post('http://localhost:8080/updatelogin', value, options).pipe(map((response) => { return response.json();}));
  }

  deleteUser(value) {
    let headers = new Headers([{ 'Content-Type': 'application/json' }]);
    let options = new RequestOptions({ headers: headers });
    return this.http.post('http://localhost:8080/deletelogin', value, options).pipe(map((response) => { return response.json(); }));
  }

  onUpLoadImage(Image, id) {
    let headers = new Headers([{'Content-Type' : 'multipart/form-data'}]);
    let options = new RequestOptions({ headers : headers});
    const uploadData = new FormData();
    uploadData.append('myFile', Image, Image.name);
    console.log("Upload Image");
    return this.http.post('http://localhost:8080/uploadimage?id=' + id, uploadData, options ).pipe(
      map((response) => {
        console.log(response);
        return response.toString();
      })
    );
  }

  lazyloadpaging(first, rows) {
    return this.http.get('http://localhost:8080/lazyloadgetuser?' + 'first=' + first + '&rows=' + rows).pipe(map((res) => res.json()));
  }
  
  getCountUser() {
    return this.http.get('http://localhost:8080/getcountuser').pipe(map((res) => res.json()));
  }
}
