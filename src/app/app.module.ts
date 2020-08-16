import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { HomePageComponent } from './home-page/home-page.component';
import { VerifyOtpComponent } from './verify-otp/verify-otp.component';
import { VisitorDetailsComponent } from './visitor-details/visitor-details.component';
import { ReactiveFormsModule } from '@angular/forms';
import { VisitorCheckinService } from './services/visitor-checkin.service';
import { ProfileComponent } from './profile/profile.component';
import {WebcamModule} from 'ngx-webcam';
import { PreviewComponent } from './preview/preview.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    VerifyOtpComponent,
    VisitorDetailsComponent,
    ProfileComponent,
    PreviewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    ReactiveFormsModule,
    AppRoutingModule,
    WebcamModule
  ],
  providers: [VisitorCheckinService],
  bootstrap: [AppComponent]
})
export class AppModule { }
