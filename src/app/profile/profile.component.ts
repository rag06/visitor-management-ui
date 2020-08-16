import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { VisitorCheckinService } from '../services/visitor-checkin.service';
import { WebcamInitError, WebcamImage, WebcamUtil } from 'ngx-webcam';
import { Subject, Observable } from 'rxjs';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.sass']
})
export class ProfileComponent implements OnInit {

  public profilePageForm: FormGroup;

  public showWebcam = true;
  public allowCameraSwitch = true;
  public multipleWebcamsAvailable = false;
  public deviceId: string;
  public videoOptions: MediaTrackConstraints = {
    // width: {ideal: 1024},
    // height: {ideal: 576}
  };
  public errors: WebcamInitError[] = [];

  // latest snapshot
  public webcamImage: WebcamImage = null;

  // webcam snapshot trigger
  private trigger: Subject<void> = new Subject<void>();
  // switch to next / previous / specific webcam; true/false: forward/backwards, string: deviceId
  private nextWebcam: Subject<boolean|string> = new Subject<boolean|string>();

  constructor(private fb: FormBuilder,
              private route: Router,
              private visitorCheckinService: VisitorCheckinService) {
                this.profilePageForm = this.fb.group({
                  fname: ['', [Validators.required]],
                  photo: ['', [Validators.required]],
                  lname: ['', []],
                  fromCompany: ['', [Validators.required]],
                  toVisit: ['', [Validators.required]],
                  email: ['', [Validators.required]],
                });
              }

  ngOnInit() {
    if (!this.visitorCheckinService.visitorProfile.mobile) {
      this.route.navigate(['/home']);
    }
    WebcamUtil.getAvailableVideoInputs()
    .then((mediaDevices: MediaDeviceInfo[]) => {
      this.multipleWebcamsAvailable = mediaDevices && mediaDevices.length > 1;
    });
  }
  public onSubmit() {
   this.visitorCheckinService.visitorProfile.fname = this.profilePageForm.value.fname;
   this.visitorCheckinService.visitorProfile.lname = this.profilePageForm.value.lname;
   this.visitorCheckinService.visitorProfile.photo = this.profilePageForm.value.photo;
   this.visitorCheckinService.visitorProfile.email = this.profilePageForm.value.email;
   this.visitorCheckinService.visitorProfile.fromCompany = this.profilePageForm.value.fromCompany;
   this.visitorCheckinService.visitorProfile.toVisit = this.profilePageForm.value.toVisit;
   this.route.navigate(['/preview']);
  }


  public triggerSnapshot(): void {
    this.trigger.next();
  }


  public handleInitError(error: WebcamInitError): void {
    this.errors.push(error);
  }

  public handleImage(webcamImage: WebcamImage): void {
    console.info('received webcam image', webcamImage);
    this.webcamImage = webcamImage;
    this.profilePageForm.get('photo').setValue(webcamImage.imageAsDataUrl);
    this.profilePageForm.get('photo').updateValueAndValidity();
  }


  public get triggerObservable(): Observable<void> {
    return this.trigger.asObservable();
  }

  public get nextWebcamObservable(): Observable<boolean|string> {
    return this.nextWebcam.asObservable();
  }
}
