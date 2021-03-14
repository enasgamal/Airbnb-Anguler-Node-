import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HostListsComponent } from './host-lists.component';

describe('HostListsComponent', () => {
  let component: HostListsComponent;
  let fixture: ComponentFixture<HostListsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HostListsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HostListsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
