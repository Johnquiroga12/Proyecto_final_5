import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetallePersonasComponent } from './detalle-personas.component';

describe('DetallePersonasComponent', () => {
  let component: DetallePersonasComponent;
  let fixture: ComponentFixture<DetallePersonasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetallePersonasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetallePersonasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
