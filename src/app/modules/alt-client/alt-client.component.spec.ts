import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AltClientComponent } from './alt-client.component';

describe('AltClientComponent', () => {
  let component: AltClientComponent;
  let fixture: ComponentFixture<AltClientComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AltClientComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AltClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
