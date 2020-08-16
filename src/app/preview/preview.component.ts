import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { VisitorCheckinService } from '../services/visitor-checkin.service';

@Component({
  selector: 'app-preview',
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.sass']
})
export class PreviewComponent implements OnInit {

  constructor(private fb: FormBuilder,
              private route: Router,
              public visitorCheckinService: VisitorCheckinService) { }

  ngOnInit() {
    if (!this.visitorCheckinService.visitorProfile.mobile) {
      this.route.navigate(['/home']);
    }
  }

  public checkIn() {
    this.route.navigate(['/home']);
  }

}
