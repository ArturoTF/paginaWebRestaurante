import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccoundComponent } from './accound.component';

describe('AccoundComponent', () => {
  let component: AccoundComponent;
  let fixture: ComponentFixture<AccoundComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AccoundComponent]
    });
    fixture = TestBed.createComponent(AccoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
