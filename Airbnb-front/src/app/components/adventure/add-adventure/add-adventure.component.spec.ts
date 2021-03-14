import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAdventureComponent } from './add-adventure.component';

describe('AddAdventureComponent', () => {
  let component: AddAdventureComponent;
  let fixture: ComponentFixture<AddAdventureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddAdventureComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddAdventureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
