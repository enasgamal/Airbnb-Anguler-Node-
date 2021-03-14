import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddOnlineExperienceComponent } from './add-online-experience.component';

describe('AddOnlineExperienceComponent', () => {
  let component: AddOnlineExperienceComponent;
  let fixture: ComponentFixture<AddOnlineExperienceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddOnlineExperienceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddOnlineExperienceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
