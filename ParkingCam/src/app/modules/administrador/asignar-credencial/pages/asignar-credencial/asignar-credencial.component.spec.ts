import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsignarCredencialComponent } from './asignar-credencial.component';

describe('AsignarCredencialComponent', () => {
  let component: AsignarCredencialComponent;
  let fixture: ComponentFixture<AsignarCredencialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AsignarCredencialComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AsignarCredencialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
