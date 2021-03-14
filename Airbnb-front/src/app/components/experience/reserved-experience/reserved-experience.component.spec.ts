import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservedExperienceComponent } from './reserved-experience.component';

describe('ReservedExperienceComponent', () => {
  let component: ReservedExperienceComponent;
  let fixture: ComponentFixture<ReservedExperienceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReservedExperienceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReservedExperienceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
