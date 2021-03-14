import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnlineExperienceComponent } from './online-experience.component';

describe('OnlineExperienceComponent', () => {
  let component: OnlineExperienceComponent;
  let fixture: ComponentFixture<OnlineExperienceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OnlineExperienceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OnlineExperienceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
