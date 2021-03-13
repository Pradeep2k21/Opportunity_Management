import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrlocationComponent } from './trlocation.component';

describe('TrlocationComponent', () => {
  let component: TrlocationComponent;
  let fixture: ComponentFixture<TrlocationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrlocationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrlocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
