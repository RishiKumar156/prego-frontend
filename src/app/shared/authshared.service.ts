import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { GoogleAuthProvider } from '@angular/fire/auth';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { EmailSignUpComponent } from '../components/email-sign-up/email-sign-up.component';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Subject, map } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class AuthsharedService {
  googleRegisterObj: string = 'Google/newuser';
  private GoogleUserData = new Subject<any>();
  public userData = this.GoogleUserData.asObservable();
  constructor(
    private fireAuth: AngularFireAuth,
    private router: Router,
    private http: HttpClient,
    private MatDialog: MatDialog
  ) {}

  GoogleSingIn() {
    this.fireAuth.signInWithPopup(new GoogleAuthProvider()).then(
      (res: any) => {
        if (res) {
          let GoogleMailid = res.additionalUserInfo?.profile;
          const googleRegisterData = {
            GmailId: GoogleMailid.email,
            Gusername: GoogleMailid.name,
            Picture: GoogleMailid.picture,
            Gid: GoogleMailid.id,
          };
          this.GoogleUserData.next(googleRegisterData);
          // console.log(this.GoogleUserData);
          this.http
            .post(
              `${environment.baseURL}/${this.googleRegisterObj}`,
              googleRegisterData
            )
            .subscribe(
              (res) => {
                console.log(res);
                sessionStorage.setItem('GoogleId', GoogleMailid.id);
                this.router.navigate(['/dashboard']);
                alert('GoogleLogin successfully');
              },
              (err: HttpErrorResponse) => {
                if (err.status == 400) {
                  alert('User already exists , Please Login');
                }
              }
            );
        }
      },
      (err) => {
        alert('some thing went wrong');
        console.log(err.message);
      }
    );
  }
}
