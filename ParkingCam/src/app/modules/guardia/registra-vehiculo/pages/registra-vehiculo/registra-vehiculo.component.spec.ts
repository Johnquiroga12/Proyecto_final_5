import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistraVehiculoComponent } from './registra-vehiculo.component';

describe('RegistraVehiculoComponent', () => {
  let component: RegistraVehiculoComponent;
  let fixture: ComponentFixture<RegistraVehiculoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistraVehiculoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistraVehiculoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
