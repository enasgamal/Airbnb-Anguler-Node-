import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyAdventureComponent } from './my-adventure.component';

describe('MyAdventureComponent', () => {
  let component: MyAdventureComponent;
  let fixture: ComponentFixture<MyAdventureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyAdventureComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyAdventureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
