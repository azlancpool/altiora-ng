import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AltItemComponent } from './alt-item.component';

describe('AltItemComponent', () => {
  let component: AltItemComponent;
  let fixture: ComponentFixture<AltItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AltItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AltItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
