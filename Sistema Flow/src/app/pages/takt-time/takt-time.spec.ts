import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaktTime } from './takt-time';

describe('TaktTime', () => {
  let component: TaktTime;
  let fixture: ComponentFixture<TaktTime>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TaktTime]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TaktTime);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
