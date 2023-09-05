import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from '../components/dashboard/dashboard.component';
import { ErrorComponent } from '../components/error/error.component';
import { HomepageComponent } from '../components/homepage/homepage.component';
import { LandingComponent } from '../components/landing/landing.component';
import { UserprofileComponent } from '../components/userprofile/userprofile.component';

const routes: Routes = [
  {
    path: '',
    component: LandingComponent,
  },
  {
    path: 'profile',
    component: UserprofileComponent,
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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
