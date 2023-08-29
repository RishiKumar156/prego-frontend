import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ErrorComponent } from './components/error/error.component';
import { LandingComponent } from './components/landing/landing.component';
import { UserprofileComponent } from './components/userprofile/userprofile.component';

@NgModule({
  declarations: [AppComponent, ErrorComponent, LandingComponent, UserprofileComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
