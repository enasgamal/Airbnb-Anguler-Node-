import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllOnlineExperienceComponent } from './all-online-experience.component';

describe('AllOnlineExperienceComponent', () => {
  let component: AllOnlineExperienceComponent;
  let fixture: ComponentFixture<AllOnlineExperienceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllOnlineExperienceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllOnlineExperienceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
