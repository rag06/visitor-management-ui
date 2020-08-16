import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { VerifyOtpComponent } from './verify-otp/verify-otp.component';
import { ProfileComponent } from './profile/profile.component';
import { PreviewComponent } from './preview/preview.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomePageComponent },
  { path: 'verify', component: VerifyOtpComponent },
  { path: 'preview', component: PreviewComponent },
  { path: 'profile', component: ProfileComponent }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
