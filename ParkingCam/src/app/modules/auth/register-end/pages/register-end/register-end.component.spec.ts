import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterEndComponent } from './register-end.component';

describe('RegisterEndComponent', () => {
  let component: RegisterEndComponent;
  let fixture: ComponentFixture<RegisterEndComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterEndComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegisterEndComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
