import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AuthsharedService } from 'src/app/shared/authshared.service';
import { EmailSignUpComponent } from '../email-sign-up/email-sign-up.component';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss'],
})
export class LandingComponent implements OnInit {
  constructor(
    private sharedService: AuthsharedService,
    private dailog: MatDialog
  ) {}
  ngOnInit(): void {}
  googleSingin() {
    this.sharedService.GoogleSingIn();
  }
  openDialog() {
    this.dailog.open(EmailSignUpComponent, { panelClass: 'emailSignUp' });
  }
}
