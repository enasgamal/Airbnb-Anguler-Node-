import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllExperienceComponent } from './all-experience.component';

describe('AllExperienceComponent', () => {
  let component: AllExperienceComponent;
  let fixture: ComponentFixture<AllExperienceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllExperienceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllExperienceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
