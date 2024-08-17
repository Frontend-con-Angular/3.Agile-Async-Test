import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SegmentosObjetivosComponent } from './segmentos-objetivos.component';

describe('SegmentosObjetivosComponent', () => {
  let component: SegmentosObjetivosComponent;
  let fixture: ComponentFixture<SegmentosObjetivosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SegmentosObjetivosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SegmentosObjetivosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
