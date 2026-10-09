import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EspecialidadDetallePage } from './especialidad-detalle.page';

describe('EspecialidadDetallePage', () => {
  let component: EspecialidadDetallePage;
  let fixture: ComponentFixture<EspecialidadDetallePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(EspecialidadDetallePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
