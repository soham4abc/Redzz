import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Cls10Component } from './cls10.component';

describe('Cls10Component', () => {
  let component: Cls10Component;
  let fixture: ComponentFixture<Cls10Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Cls10Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Cls10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
