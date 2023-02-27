import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleVehiculosComponent } from './detalle-vehiculos.component';

describe('DetalleVehiculosComponent', () => {
  let component: DetalleVehiculosComponent;
  let fixture: ComponentFixture<DetalleVehiculosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetalleVehiculosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetalleVehiculosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
