import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResetPassRequestComponent } from './reset-pass-request.component';

describe('ResetPassRequestComponent', () => {
  let component: ResetPassRequestComponent;
  let fixture: ComponentFixture<ResetPassRequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResetPassRequestComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ResetPassRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
