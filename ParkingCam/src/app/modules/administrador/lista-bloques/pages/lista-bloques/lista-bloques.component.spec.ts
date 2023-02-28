import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaBloquesComponent } from './lista-bloques.component';

describe('ListaBloquesComponent', () => {
  let component: ListaBloquesComponent;
  let fixture: ComponentFixture<ListaBloquesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaBloquesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaBloquesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
