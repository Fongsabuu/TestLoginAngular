import { Component, OnInit } from '@angular/core';
import { UserLogin } from '../../model/user-login';
import { LoginServicesService } from '../../Service/login.service';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { FileUploadModule } from 'primeng/fileupload';
import { UploadImageComponent } from "../upload-image/upload-image.component";
import { Location } from '@angular/common';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  private uLogin: UserLogin;
  private code: string;
  private status: number;
  private selectedFiles: File;
  private imageUrl: string = "/assets/img/defualtImage.jpg";
  private fileToUpload: File = null;

  constructor(private loginService: LoginServicesService,
    private router: Router,
    private _location: Location) { }

  ngOnInit() {
    this.uLogin = {
      id: null,
      username: null,
      password: null
    }
  }

  register(form: any) {
    this.loginService.doInsert(form.value).subscribe((response) => {
      this.code = response.code;
      this.status = response.result;
      if (this.code == "200") {
        console.log("Register complete ++> " + this.status);
        if (this.fileToUpload != null) {
          this.loginService.onUpLoadImage(this.fileToUpload, response.result.id).subscribe();
        }
        this.router.navigate(['/login']);
      } else {
        alert("Register fail T-T ");
      }
    });
  }

  handleFileInput(file: FileList) {
    this.fileToUpload = file.item(0);
    var reader = new FileReader();
    reader.onload = (event: any) => {
      this.imageUrl = event.target.result;
    }
    reader.readAsDataURL(this.fileToUpload);
  }

  goBack() {
    this._location.back();
  }


}
