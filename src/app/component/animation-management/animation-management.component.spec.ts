import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimationManagementComponent } from './animation-management.component';

describe('AnimationManagementComponent', () => {
  let component: AnimationManagementComponent;
  let fixture: ComponentFixture<AnimationManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AnimationManagementComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnimationManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
