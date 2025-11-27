import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Fluxo } from './fluxo';

describe('Fluxo', () => {
  let component: Fluxo;
  let fixture: ComponentFixture<Fluxo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Fluxo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Fluxo);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
