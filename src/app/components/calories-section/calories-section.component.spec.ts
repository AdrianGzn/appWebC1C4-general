import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaloriesSectionComponent } from './calories-section.component';

describe('CaloriesSectionComponent', () => {
  let component: CaloriesSectionComponent;
  let fixture: ComponentFixture<CaloriesSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CaloriesSectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CaloriesSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
