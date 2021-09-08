import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartnerToolBarComponent } from './partner-tool-bar.component';

describe('PartnerToolBarComponent', () => {
  let component: PartnerToolBarComponent;
  let fixture: ComponentFixture<PartnerToolBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PartnerToolBarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PartnerToolBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
