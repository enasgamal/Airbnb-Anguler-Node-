import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnlineExperienceDetailsComponent } from './online-experience-details.component';

describe('OnlineExperienceDetailsComponent', () => {
  let component: OnlineExperienceDetailsComponent;
  let fixture: ComponentFixture<OnlineExperienceDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OnlineExperienceDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OnlineExperienceDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
