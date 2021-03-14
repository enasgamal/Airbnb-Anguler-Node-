import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdventureDetailsComponent } from './adventure-details.component';

describe('AdventureDetailsComponent', () => {
  let component: AdventureDetailsComponent;
  let fixture: ComponentFixture<AdventureDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdventureDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdventureDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
