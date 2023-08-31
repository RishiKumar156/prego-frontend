import { MatDialogRef } from '@angular/material/dialog';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-email-sign-up',
  templateUrl: './email-sign-up.component.html',
  styleUrls: ['./email-sign-up.component.scss'],
})
export class EmailSignUpComponent implements OnInit {
  registerModle: any = {
    userEmail: '',
    password: '',
  };
  constructor(private dialogRef: MatDialogRef<EmailSignUpComponent>) {}
  ngOnInit(): void {}
  emailSignIn() {
    
  }
}
