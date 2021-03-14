import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditOnlineExperienceComponent } from './edit-online-experience.component';

describe('EditOnlineExperienceComponent', () => {
  let component: EditOnlineExperienceComponent;
  let fixture: ComponentFixture<EditOnlineExperienceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditOnlineExperienceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditOnlineExperienceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
