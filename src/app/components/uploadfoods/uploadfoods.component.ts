import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-uploadfoods',
  templateUrl: './uploadfoods.component.html',
  styleUrls: ['./uploadfoods.component.scss'],
})
export class UploadfoodsComponent implements OnInit {
  apiName: string = 'AddFood/CreateFood';
  Storefood: any = {
    foodName: '',
    pricing: null,
    foodDesc: '',
    imgaeUrl: null,
  };
  constructor(private http: HttpClient) {}

  ngOnInit(): void {}
  onFileSelected(event: any) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      const reader = new FileReader();
      reader.onload = () => {
        const base64String = reader.result as string;
        this.Storefood.imgaeUrl = base64String;
      };
      reader.readAsDataURL(file);
    }
  }

  CreateFood() {
    this.http
      .post(`${environment.baseURL}/${this.apiName}`, this.Storefood)
      .subscribe((data) => {
        console.log(data);
      });
  }
}
