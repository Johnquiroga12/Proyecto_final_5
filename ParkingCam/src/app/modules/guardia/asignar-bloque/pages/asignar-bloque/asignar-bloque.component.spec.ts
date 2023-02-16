import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsignarBloqueComponent } from './asignar-bloque.component';

describe('AsignarBloqueComponent', () => {
  let component: AsignarBloqueComponent;
  let fixture: ComponentFixture<AsignarBloqueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AsignarBloqueComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AsignarBloqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
