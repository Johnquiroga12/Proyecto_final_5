import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ControlBloquesComponent } from './control-bloques.component';

describe('ControlBloquesComponent', () => {
  let component: ControlBloquesComponent;
  let fixture: ComponentFixture<ControlBloquesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ControlBloquesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ControlBloquesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
