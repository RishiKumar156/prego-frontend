import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { GoogleAuthProvider } from '@angular/fire/auth';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { EmailSignUpComponent } from '../components/email-sign-up/email-sign-up.component';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class AuthsharedService {
  googleRegisterObj: string = 'Google/newuser';
  GooglRegister: any = {
    Gusername: '',
    GmailId: '',
    Picture: '',
    Gid: '',
  };
  constructor(
    private fireAuth: AngularFireAuth,
    private router: Router,
    private http: HttpClient,
    private MatDialog: MatDialog
  ) {}

  login(email: string, password: string) {
    this.fireAuth.signInWithEmailAndPassword(email, password).then(
      (res) => {
        sessionStorage.setItem(JSON.stringify('auth'), 'token');
        if (res) {
          this.router.navigate(['home']);
        }
      },
      (error) => {
        alert('Some thing went wrong');
        this.router.navigate(['']);
      }
    );
  }
  register(email: string, password: string) {
    this.fireAuth.createUserWithEmailAndPassword(email, password).then(
      (res) => {
        if (res) {
          this.router.navigate(['']);
          alert('Register was successful');
        }
      },
      (error) => {
        alert('some thing went wrong');
        console.log(error);
        this.router.navigate(['error']);
      }
    );
  }
  singOut() {
    this.fireAuth.signOut().then(
      (res) => {
        this.router.navigate(['']);
        alert('singOut successfully');
      },
      (error) => {
        alert('some thing went wrong');
        console.log(error.message);
      }
    );
  }
  GoogleSingIn() {
    this.fireAuth.signInWithPopup(new GoogleAuthProvider()).then(
      (res: any) => {
        if (res) {
          let GoogleMailid = res.additionalUserInfo?.profile; // console.log(GoogleMailid.id);
          this.GooglRegister.GmailId = GoogleMailid.email;
          this.GooglRegister.Gusername = GoogleMailid.name;
          this.GooglRegister.Picture = GoogleMailid.picture;
          this.GooglRegister.Gid = GoogleMailid.id;
          this.http
            .post(
              `${environment.baseURL}/${this.googleRegisterObj}`,
              this.GooglRegister
            )
            .subscribe(
              (res) => {
                console.log(res);
                sessionStorage.setItem('GoogleId', GoogleMailid.id);
                this.router.navigate(['/home']);
                alert('googleSingIn successfully');
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
