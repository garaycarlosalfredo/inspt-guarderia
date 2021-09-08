import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeToolBarComponent } from './employee-tool-bar.component';

describe('EmployeeToolBarComponent', () => {
  let component: EmployeeToolBarComponent;
  let fixture: ComponentFixture<EmployeeToolBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeeToolBarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeToolBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
