import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-ordernow',
  templateUrl: './ordernow.component.html',
  styleUrls: ['./ordernow.component.scss'],
})
export class OrdernowComponent implements OnInit {
  foodData: any;
  allFoods: string = 'OrderNow/Foods';
  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http
      .get(`${environment.baseURL}/${this.allFoods}`)
      .subscribe((foods: any) => {
        this.foodData = foods;
        console.log(foods);
      });
  }
}
