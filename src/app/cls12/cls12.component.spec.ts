import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Cls12Component } from './cls12.component';

describe('Cls12Component', () => {
  let component: Cls12Component;
  let fixture: ComponentFixture<Cls12Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Cls12Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Cls12Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
