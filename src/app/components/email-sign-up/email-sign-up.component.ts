import { AuthsharedService } from 'src/app/shared/authshared.service';
import { MatDialogRef } from '@angular/material/dialog';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-email-sign-up',
  templateUrl: './email-sign-up.component.html',
  styleUrls: ['./email-sign-up.component.scss'],
})
export class EmailSignUpComponent implements OnInit {
  emailRegister = 'EmailRegister/EmailLogin';
  registerModle: any = {
    UserName: '',
    password: '',
  };

  constructor(
    private dialogRef: MatDialogRef<EmailSignUpComponent>,
    private http: HttpClient,
    private router: Router,
    private authsharedService: AuthsharedService
  ) {}
  ngOnInit(): void {}
  emailSignIn() {
    this.http
      .post(`${environment.baseURL}/${this.emailRegister}`, this.registerModle)
      .subscribe(
        (data: any) => {
          if (data) {
            console.log(data);
            window.location.reload();
            sessionStorage.setItem('userGuid', data['sessionGuid']);
            this.dialogRef.close();
          }
        },
        (error) => {
          console.log(error.message);
        }
      );
  }
  gSingIn() {
    this.dialogRef.close();
    this.authsharedService.GoogleSingIn();
  }

  register() {}
}
