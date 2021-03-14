import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmOnlineExperienceComponent } from './confirm-online-experience.component';

describe('ConfirmOnlineExperienceComponent', () => {
  let component: ConfirmOnlineExperienceComponent;
  let fixture: ComponentFixture<ConfirmOnlineExperienceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfirmOnlineExperienceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmOnlineExperienceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
