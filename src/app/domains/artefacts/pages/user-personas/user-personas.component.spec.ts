import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserPersonasComponent } from './user-personas.component';

describe('UserPersonasComponent', () => {
  let component: UserPersonasComponent;
  let fixture: ComponentFixture<UserPersonasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserPersonasComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UserPersonasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
