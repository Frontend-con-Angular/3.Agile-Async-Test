import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserTaskMatrixComponent } from './user-task-matrix.component';

describe('UserTaskMatrixComponent', () => {
  let component: UserTaskMatrixComponent;
  let fixture: ComponentFixture<UserTaskMatrixComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserTaskMatrixComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UserTaskMatrixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
