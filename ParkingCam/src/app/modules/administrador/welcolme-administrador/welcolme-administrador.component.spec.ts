import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WelcolmeAdministradorComponent } from './welcolme-administrador.component';

describe('WelcolmeAdministradorComponent', () => {
  let component: WelcolmeAdministradorComponent;
  let fixture: ComponentFixture<WelcolmeAdministradorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WelcolmeAdministradorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WelcolmeAdministradorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
