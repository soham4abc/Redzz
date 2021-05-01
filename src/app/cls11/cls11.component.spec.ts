import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Cls11Component } from './cls11.component';

describe('Cls11Component', () => {
  let component: Cls11Component;
  let fixture: ComponentFixture<Cls11Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Cls11Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Cls11Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
