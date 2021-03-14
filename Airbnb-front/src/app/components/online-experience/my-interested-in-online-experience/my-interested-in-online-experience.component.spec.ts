import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyInterestedInOnlineExperienceComponent } from './my-interested-in-online-experience.component';

describe('MyInterestedInOnlineExperienceComponent', () => {
  let component: MyInterestedInOnlineExperienceComponent;
  let fixture: ComponentFixture<MyInterestedInOnlineExperienceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyInterestedInOnlineExperienceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyInterestedInOnlineExperienceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
