import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { GoogleAuthProvider } from '@angular/fire/auth';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { EmailSignUpComponent } from '../components/email-sign-up/email-sign-up.component';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { BehaviorSubject, Subject, map } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class AuthsharedService {
  googleRegisterObj: string = 'Google/newuser';
  googleLogin: string = 'Google/Glogin';
  private GoogleUserData = new BehaviorSubject<any>(null);
  public userData = this.GoogleUserData.asObservable();
  constructor(
    private fireAuth: AngularFireAuth,
    private router: Router,
    private http: HttpClient,
    private MatDialog: MatDialog
  ) {}
  login(email: string, password: string) {
    this.fireAuth.signInWithEmailAndPassword(email, password).then(
      (res) => {
        sessionStorage.setItem('auth', 'token');
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
    this.fireAuth.signInWithPopup(new GoogleAuthProvider()).then((res: any) => {
      if (res) {
        let GoogleMailid = res.additionalUserInfo?.profile;
        const googleRegisterData = {
          GmailId: GoogleMailid.email,
          Gusername: GoogleMailid.name,
          Picture: GoogleMailid.picture,
          Gid: GoogleMailid.id,
        };
        this.GoogleUserData.next(googleRegisterData);
        this.http
          .post(
            `${environment.baseURL}/${this.googleRegisterObj}`,
            googleRegisterData
          )
          .subscribe(
            (data: any) => {
              sessionStorage.setItem('JwtToken', data.jwtToken);
              this.router.navigate(['/dashboard']);
              alert('Google Register successfully');
              console.log(data);
            },
            (err: HttpErrorResponse) => {
              if (err.status == 400) {
                alert('User already exists , Please Login');
                this.router.navigate(['']);
              }
            }
          );
      }
    });
  }
  Googlelogin() {
    this.fireAuth.signInWithPopup(new GoogleAuthProvider()).then((res: any) => {
      if (res) {
        let GoogleMailid = res.additionalUserInfo?.profile;
        const googleRegisterData = {
          GmailId: GoogleMailid.email,
          Gusername: GoogleMailid.name,
          Picture: GoogleMailid.picture,
          Gid: GoogleMailid.id,
        };
        this.GoogleUserData.next(googleRegisterData);
        this.http
          .post(
            `${environment.baseURL}/${this.googleLogin}`,
            googleRegisterData
          )
          .subscribe((data: any) => {
            this.router.navigate(['/dashboard']);
            alert('GoogleLogin successfully');
            sessionStorage.setItem('JwtToken', data.jwt);
            console.log(data);
          });
      }
    });
  }
}
