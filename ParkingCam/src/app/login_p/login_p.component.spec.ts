/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Login_pComponent } from './login_p.component';

describe('Login_pComponent', () => {
  let component: Login_pComponent;
  let fixture: ComponentFixture<Login_pComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Login_pComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Login_pComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
