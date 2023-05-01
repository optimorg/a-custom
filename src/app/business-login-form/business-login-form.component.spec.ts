import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinessLoginFormComponent } from './business-login-form.component';

describe('BusinessLoginFormComponent', () => {
  let component: BusinessLoginFormComponent;
  let fixture: ComponentFixture<BusinessLoginFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BusinessLoginFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BusinessLoginFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
