import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoGraphicComponent } from './info-graphic.component';

describe('InfoGraphicComponent', () => {
  let component: InfoGraphicComponent;
  let fixture: ComponentFixture<InfoGraphicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InfoGraphicComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InfoGraphicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
