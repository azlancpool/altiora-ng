import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AltOrderComponent } from './alt-order.component';

describe('AltOrderComponent', () => {
  let component: AltOrderComponent;
  let fixture: ComponentFixture<AltOrderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AltOrderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AltOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
