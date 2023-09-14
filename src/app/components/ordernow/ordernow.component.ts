import { AuthsharedService } from 'src/app/shared/authshared.service';
import { HttpClient } from '@angular/common/http';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-ordernow',
  templateUrl: './ordernow.component.html',
  styleUrls: ['./ordernow.component.scss'],
})
export class OrdernowComponent implements OnInit {
  foodData: any;
  allFoods: string = 'OrderNow/Foods';
  constructor(
    private http: HttpClient,
    private AuthsharedService: AuthsharedService,
    private cdr: ChangeDetectorRef
  ) {}
  ngOnInit(): void {
    this.http
      .get(`${environment.baseURL}/${this.allFoods}`)
      .subscribe((foods: any) => {
        this.foodData = foods;
      });
  }
  ordernow(data: any) {
    this.AuthsharedService.shareToCart.push(data);
  }
  increment(foodData: any) {
    foodData.foodQty++;
    this.cdr.detectChanges();
  }
  decrement(foodData: any) {
    foodData.foodQty++;
    this.cdr.detectChanges();
  }
}
