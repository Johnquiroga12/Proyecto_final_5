import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WelcomeGuardiaComponent } from './welcome-guardia.component';

describe('WelcomeGuardiaComponent', () => {
  let component: WelcomeGuardiaComponent;
  let fixture: ComponentFixture<WelcomeGuardiaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WelcomeGuardiaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WelcomeGuardiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
