import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientsReservationsComponent } from './clients-reservations.component';

describe('ClientsReservationsComponent', () => {
  let component: ClientsReservationsComponent;
  let fixture: ComponentFixture<ClientsReservationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientsReservationsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientsReservationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
