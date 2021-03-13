import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TryearwiseComponent } from './tryearwise.component';

describe('TryearwiseComponent', () => {
  let component: TryearwiseComponent;
  let fixture: ComponentFixture<TryearwiseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TryearwiseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TryearwiseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
