import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { VisitorCheckinService } from '../services/visitor-checkin.service';

@Component({
  selector: 'app-verify-otp',
  templateUrl: './verify-otp.component.html',
  styleUrls: ['./verify-otp.component.sass']
})
export class VerifyOtpComponent implements OnInit {

  public verifyPageForm: FormGroup;
  public otpValidationFailed: boolean;

  constructor(private fb: FormBuilder,
              private route: Router,
              public visitorCheckinService: VisitorCheckinService) {
    this.verifyPageForm = this.fb.group({
      otp: ['', [Validators.required]],
    });
    this.otpValidationFailed = false;
   }

  ngOnInit() {
    if (!this.visitorCheckinService.visitorProfile.mobile) {
      this.route.navigate(['/home']);
    }
  }
  /**
   * OnSubmit
   */
  public onSubmit() {
    if (this.visitorCheckinService.visitorProfile['otp'] === this.verifyPageForm.value.otp) {
      this.route.navigate(['/profile']);
    } else {
      this.otpValidationFailed = true;
    }
  }

}
