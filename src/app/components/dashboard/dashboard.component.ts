import { AuthsharedService } from 'src/app/shared/authshared.service';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  username: any;
  constructor(private AuthsharedService: AuthsharedService) {}
  ngOnInit(): void {
    this.AuthsharedService.userData.subscribe((data) => {
      console.log(data);
    });
  }
}
