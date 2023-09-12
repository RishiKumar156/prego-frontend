import { AuthsharedService } from 'src/app/shared/authshared.service';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { user } from '@angular/fire/auth';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  profile: any = 'Google/SingleProfile';
  UserObj: any = {
    email: '',
    Picture: '',
    GuserName: '',
  };
  constructor(
    private AuthsharedService: AuthsharedService,
    private http: HttpClient
  ) {}
  ngOnInit(): void {
    const jwt: any = sessionStorage.getItem('JwtToken');
    const params = new HttpParams().set('jwt', jwt);
    this.http
      .get(`${environment.baseURL}/${this.profile}`, { params })
      .subscribe((data: any) => {
        this.UserObj.email = data.gmailId;
        this.UserObj.GuserName = data.gusername;
        this.UserObj.Picture = data.picture;
      });
  }
}
