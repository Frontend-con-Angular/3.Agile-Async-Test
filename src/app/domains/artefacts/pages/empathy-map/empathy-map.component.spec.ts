import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpathyMapComponent } from './empathy-map.component';

describe('EmpathyMapComponent', () => {
  let component: EmpathyMapComponent;
  let fixture: ComponentFixture<EmpathyMapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmpathyMapComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EmpathyMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
