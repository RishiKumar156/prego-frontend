import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { GoogleAuthProvider } from '@angular/fire/auth';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { EmailSignUpComponent } from '../components/email-sign-up/email-sign-up.component';
@Injectable({
  providedIn: 'root',
})
export class AuthsharedService {
  constructor(
    private fireAuth: AngularFireAuth,
    private router: Router,
    private dialog: MatDialog,
    private dialogref: MatDialogRef<EmailSignUpComponent>
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
      (res) => {
        if (res) {
          sessionStorage.setItem('token', JSON.stringify(res.user?.uid));
          let GoogleMailid = res.additionalUserInfo?.profile;
          console.log(GoogleMailid);
          this.router.navigate(['/home']);
          alert('googleSingIn successfully');
        }
      },
      (err) => {
        alert('some thing went wrong');
        console.log(err.message);
      }
    );
  }
}
