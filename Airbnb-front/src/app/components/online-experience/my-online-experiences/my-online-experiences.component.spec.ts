import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyOnlineExperiencesComponent } from './my-online-experiences.component';

describe('MyOnlineExperiencesComponent', () => {
  let component: MyOnlineExperiencesComponent;
  let fixture: ComponentFixture<MyOnlineExperiencesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyOnlineExperiencesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyOnlineExperiencesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
