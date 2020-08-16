import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { VisitorCheckinService } from '../services/visitor-checkin.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.sass']
})
export class HomePageComponent implements OnInit {

  public homePageForm: FormGroup;

  constructor(private fb: FormBuilder,
              private route: Router,
              private visitorCheckinService: VisitorCheckinService) {
    this.homePageForm = this.fb.group({
      mobile: ['', [Validators.required]],
    });
   }

  ngOnInit() {
    this.visitorCheckinService.resetVisitorProfile();
  }
  /**
   * OnSubmit
   */
  public onSubmit() {
    this.visitorCheckinService.visitorProfile.mobile = this.homePageForm.value.mobile;

    this.visitorCheckinService.visitorProfile['otp'] = '1234';
    this.route.navigate(['/verify']
    );
  }
}
