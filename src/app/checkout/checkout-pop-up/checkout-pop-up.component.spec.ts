import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckoutPopUpComponent } from './checkout-pop-up.component';

describe('CheckoutPopUpComponent', () => {
  let component: CheckoutPopUpComponent;
  let fixture: ComponentFixture<CheckoutPopUpComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CheckoutPopUpComponent]
    });
    fixture = TestBed.createComponent(CheckoutPopUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
