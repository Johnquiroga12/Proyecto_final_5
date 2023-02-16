import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistraPersonalComponent } from './registra-personal.component';

describe('RegistraPersonalComponent', () => {
  let component: RegistraPersonalComponent;
  let fixture: ComponentFixture<RegistraPersonalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistraPersonalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistraPersonalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
