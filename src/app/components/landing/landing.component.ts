import { Component, OnInit } from '@angular/core';
import { AuthsharedService } from 'src/app/shared/authshared.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss'],
})
export class LandingComponent implements OnInit {
  constructor(private sharedService: AuthsharedService) {}
  ngOnInit(): void {}
  googleSingin() {
    this.sharedService.GoogleSingIn();
  }

  ourSignin() {
    this.sharedService;
  }
}
