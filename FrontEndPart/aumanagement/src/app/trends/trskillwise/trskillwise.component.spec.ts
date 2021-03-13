import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrskillwiseComponent } from './trskillwise.component';

describe('TrskillwiseComponent', () => {
  let component: TrskillwiseComponent;
  let fixture: ComponentFixture<TrskillwiseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrskillwiseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrskillwiseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
