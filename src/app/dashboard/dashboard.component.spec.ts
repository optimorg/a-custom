import { ComponentFixture, TestBed } from '@angular/core/testing';

<<<<<<< HEAD
import { DashbaordComponent } from './dashboard.component';

describe('DashbaordComponent', () => {
  let component: DashbaordComponent;
  let fixture: ComponentFixture<DashbaordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashbaordComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashbaordComponent);
=======
import { DashboardComponent } from './dashboard.component';

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardComponent);
>>>>>>> 4783c302c70bb3ee88e7544679d1e5b23fafbd97
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
