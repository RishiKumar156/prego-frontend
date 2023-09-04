import { EmailSignUpComponent } from './components/email-sign-up/email-sign-up.component';
import { Component, HostListener } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'pregofrontend';
  isScrolled = false;
  constructor(private dialog: MatDialog) {}
  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isScrolled = window.scrollY > 0;
  }

  login() {
    this.dialog.open(EmailSignUpComponent, { panelClass: 'loginDialog' });
  }
}
