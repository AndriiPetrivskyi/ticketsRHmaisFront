import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTicketSugestoesComponent } from './add-ticket-sugestoes.component';

describe('AddTicketSugestoesComponent', () => {
  let component: AddTicketSugestoesComponent;
  let fixture: ComponentFixture<AddTicketSugestoesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddTicketSugestoesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddTicketSugestoesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
