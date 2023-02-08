/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Mod_PersonasComponent } from './Mod_Personas.component';

describe('Mod_PersonasComponent', () => {
  let component: Mod_PersonasComponent;
  let fixture: ComponentFixture<Mod_PersonasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Mod_PersonasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Mod_PersonasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
