import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculatorComponent } from './calculator.component';

describe('CalculatorComponent', () => {
  let component: CalculatorComponent;
  let fixture: ComponentFixture<CalculatorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CalculatorComponent]
    });
    fixture = TestBed.createComponent(CalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('add() should return the sun of two numbers', () => {
    const result = component.add(2, 3);
    expect(result).toEqual(5)
  })

});
