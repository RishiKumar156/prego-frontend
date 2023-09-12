import { AuthsharedService } from 'src/app/shared/authshared.service';
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
  jt: any;
  constructor(
    private dialog: MatDialog,
    private AuthsharedService: AuthsharedService
  ) {}
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    // this.jwt = 'sometext';
    this.jt = sessionStorage.getItem('JwtToken');
    // console.log(this.jt);
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isScrolled = window.scrollY > 0;
  }

  login() {
    this.dialog.open(EmailSignUpComponent, { panelClass: 'loginDialog' });
  }
}
