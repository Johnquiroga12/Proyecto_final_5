import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistraPersonasComponent } from './registra-personas.component';

describe('RegistraPersonasComponent', () => {
  let component: RegistraPersonasComponent;
  let fixture: ComponentFixture<RegistraPersonasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistraPersonasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistraPersonasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
