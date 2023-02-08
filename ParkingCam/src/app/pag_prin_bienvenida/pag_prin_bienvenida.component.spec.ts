/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Pag_prin_bienvenidaComponent } from './pag_prin_bienvenida.component';

describe('Pag_prin_bienvenidaComponent', () => {
  let component: Pag_prin_bienvenidaComponent;
  let fixture: ComponentFixture<Pag_prin_bienvenidaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Pag_prin_bienvenidaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Pag_prin_bienvenidaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
