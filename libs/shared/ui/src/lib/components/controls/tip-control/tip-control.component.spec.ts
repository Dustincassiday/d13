import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TipControlComponent } from './tip-control.component';

describe('TipControlComponent', () => {
  let component: TipControlComponent;
  let fixture: ComponentFixture<TipControlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TipControlComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TipControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
