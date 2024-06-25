import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTicketDificuldadesComponent } from './add-ticket-dificuldades.component';

describe('AddTicketDificuldadesComponent', () => {
  let component: AddTicketDificuldadesComponent;
  let fixture: ComponentFixture<AddTicketDificuldadesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddTicketDificuldadesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddTicketDificuldadesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
