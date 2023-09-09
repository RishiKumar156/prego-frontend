import { HttpClient, HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AuthsharedService } from 'src/app/shared/authshared.service';
import { EmailSignUpComponent } from '../email-sign-up/email-sign-up.component';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss'],
})
export class LandingComponent implements OnInit {
  ApiNameReserveTable: string = 'ReserveTable/MakeReservation';
  ReserveTable: any = {
    OrderName: '',
    OrderDesc: '',
    PhoneNo: '',
    Jwt: '',
  };
  constructor(
    private sharedService: AuthsharedService,
    private dailog: MatDialog,
    private http: HttpClient
  ) {}
  ngOnInit(): void {
    this.ReserveTable.Jwt = sessionStorage.getItem('JwtToken');
  }
  googleSingin() {
    this.sharedService.GoogleSingIn();
  }
  openDialog() {
    this.dailog.open(EmailSignUpComponent, { panelClass: 'emailSignUp' });
  }
  reserveTable() {
    this.http
      .post(
        `${environment.baseURL}/${this.ApiNameReserveTable}`,
        this.ReserveTable
      )
      .subscribe((res) => {
        console.log(res);
      });
  }
}
