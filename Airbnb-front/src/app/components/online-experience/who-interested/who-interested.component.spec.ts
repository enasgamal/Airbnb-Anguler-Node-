import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhoInterestedComponent } from './who-interested.component';

describe('WhoInterestedComponent', () => {
  let component: WhoInterestedComponent;
  let fixture: ComponentFixture<WhoInterestedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WhoInterestedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WhoInterestedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
