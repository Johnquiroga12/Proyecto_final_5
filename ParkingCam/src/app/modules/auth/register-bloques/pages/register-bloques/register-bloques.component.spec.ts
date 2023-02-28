import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterBloquesComponent } from './register-bloques.component';

describe('RegisterBloquesComponent', () => {
  let component: RegisterBloquesComponent;
  let fixture: ComponentFixture<RegisterBloquesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterBloquesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegisterBloquesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
