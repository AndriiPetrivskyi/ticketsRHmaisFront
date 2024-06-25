import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTicketSalarioComponent } from './add-ticket-salario.component';

describe('AddTicketSalarioComponent', () => {
  let component: AddTicketSalarioComponent;
  let fixture: ComponentFixture<AddTicketSalarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddTicketSalarioComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddTicketSalarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
