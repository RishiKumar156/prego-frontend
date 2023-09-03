import { AuthsharedService } from 'src/app/shared/authshared.service';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { user } from '@angular/fire/auth';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  UserObj: any = {
    email: '',
    Picture: '',
    GuserName: '',
  };
  constructor(private AuthsharedService: AuthsharedService) {}
  ngOnInit(): void {
    this.AuthsharedService.userData.subscribe((Data) => {
      this.UserObj.Picture = Data.Picture;
      this.UserObj.GuserName = Data.Gusername;
      this.UserObj.email = Data.GmailId;
      console.log(this.UserObj);
    });
  }
}
