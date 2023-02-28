import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterRegistroComponent } from './register-registro.component';

describe('RegisterRegistroComponent', () => {
  let component: RegisterRegistroComponent;
  let fixture: ComponentFixture<RegisterRegistroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterRegistroComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegisterRegistroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
