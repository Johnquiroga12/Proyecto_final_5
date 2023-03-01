import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterPersonasComponent } from './register-personas.component';

describe('RegisterPersonasComponent', () => {
  let component: RegisterPersonasComponent;
  let fixture: ComponentFixture<RegisterPersonasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterPersonasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegisterPersonasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
