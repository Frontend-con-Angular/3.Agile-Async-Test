import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeanUxCanvasComponent } from './lean-ux-canvas.component';

describe('LeanUxCanvasComponent', () => {
  let component: LeanUxCanvasComponent;
  let fixture: ComponentFixture<LeanUxCanvasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LeanUxCanvasComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LeanUxCanvasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
