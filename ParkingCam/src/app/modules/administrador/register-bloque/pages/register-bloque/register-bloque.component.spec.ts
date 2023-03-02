import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterBloqueComponent } from './register-bloque.component';

describe('RegisterBloqueComponent', () => {
  let component: RegisterBloqueComponent;
  let fixture: ComponentFixture<RegisterBloqueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterBloqueComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegisterBloqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
