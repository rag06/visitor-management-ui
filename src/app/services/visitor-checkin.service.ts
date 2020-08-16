import { Injectable } from '@angular/core';
import {VisitorProfile} from '../models/visitor-profile';

@Injectable({
  providedIn: 'root'
})
export class VisitorCheckinService {

  public visitorProfile: VisitorProfile;
  constructor() {
       this.visitorProfile = new VisitorProfile();
  }

  /**
   * resetVisitorProfile
   */
  public resetVisitorProfile() {
    this.visitorProfile = new VisitorProfile();
  }
}
