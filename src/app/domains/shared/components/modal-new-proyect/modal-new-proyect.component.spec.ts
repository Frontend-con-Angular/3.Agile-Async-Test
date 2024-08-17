import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalNewProyectComponent } from './modal-new-proyect.component';

describe('ModalNewProyectComponent', () => {
  let component: ModalNewProyectComponent;
  let fixture: ComponentFixture<ModalNewProyectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModalNewProyectComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ModalNewProyectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
