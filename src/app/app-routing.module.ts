import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './components/landing/landing.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { ErrorComponent } from './components/error/error.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { OrdernowComponent } from './components/ordernow/ordernow.component';
import { UploadfoodsComponent } from './components/uploadfoods/uploadfoods.component';
import { KartComponent } from './components/kart/kart.component';

const routes: Routes = [
  {
    path: '',
    component: LandingComponent,
  },
  {
    path: 'home',
    component: HomepageComponent,
  },
  {
    path: 'error',
    component: ErrorComponent,
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
  },
  {
    path: 'ordernow',
    component: OrdernowComponent,
  },
  {
    path: 'addFood',
    component: UploadfoodsComponent,
  },
  {
    path: 'cart',
    component: KartComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
