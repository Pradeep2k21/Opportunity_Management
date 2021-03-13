import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateopportunityComponent } from './createopportunity.component';

describe('CreateopportunityComponent', () => {
  let component: CreateopportunityComponent;
  let fixture: ComponentFixture<CreateopportunityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateopportunityComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateopportunityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
