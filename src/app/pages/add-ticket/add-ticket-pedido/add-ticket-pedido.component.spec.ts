import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTicketPedidoComponent } from './add-ticket-pedido.component';

describe('AddTicketPedidoComponent', () => {
  let component: AddTicketPedidoComponent;
  let fixture: ComponentFixture<AddTicketPedidoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddTicketPedidoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddTicketPedidoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
