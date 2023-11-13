import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckoutPopUp2Component } from './checkout-pop-up2.component';

describe('CheckoutPopUp2Component', () => {
  let component: CheckoutPopUp2Component;
  let fixture: ComponentFixture<CheckoutPopUp2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CheckoutPopUp2Component]
    });
    fixture = TestBed.createComponent(CheckoutPopUp2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
