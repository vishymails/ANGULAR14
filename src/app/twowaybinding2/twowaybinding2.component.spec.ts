import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Twowaybinding2Component } from './twowaybinding2.component';

describe('Twowaybinding2Component', () => {
  let component: Twowaybinding2Component;
  let fixture: ComponentFixture<Twowaybinding2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Twowaybinding2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Twowaybinding2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
