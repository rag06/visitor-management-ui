import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VisitorDetailsComponent } from './visitor-details.component';

describe('VisitorDetailsComponent', () => {
  let component: VisitorDetailsComponent;
  let fixture: ComponentFixture<VisitorDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VisitorDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VisitorDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
