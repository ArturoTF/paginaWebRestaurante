import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlatosComponentComponent } from './platos-component.component';

describe('PlatosComponentComponent', () => {
  let component: PlatosComponentComponent;
  let fixture: ComponentFixture<PlatosComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PlatosComponentComponent]
    });
    fixture = TestBed.createComponent(PlatosComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
