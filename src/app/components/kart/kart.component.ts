import { AuthsharedService } from 'src/app/shared/authshared.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-kart',
  templateUrl: './kart.component.html',
  styleUrls: ['./kart.component.scss'],
})
export class KartComponent implements OnInit {
  cartData: any;
  constructor(private AuthsharedService: AuthsharedService) {}

  ngOnInit(): void {
    this.cartData = this.AuthsharedService.shareToCart;
    console.log(this.cartData);
  }
}
