import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuProyectsComponent } from './menu-proyects.component';

describe('MenuProyectsComponent', () => {
  let component: MenuProyectsComponent;
  let fixture: ComponentFixture<MenuProyectsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MenuProyectsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MenuProyectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
