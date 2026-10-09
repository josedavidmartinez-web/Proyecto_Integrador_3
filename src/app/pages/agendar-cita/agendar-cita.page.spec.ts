import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AgendarCitaPage } from './agendar-cita.page';

describe('AgendarCitaPage', () => {
  let component: AgendarCitaPage;
  let fixture: ComponentFixture<AgendarCitaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AgendarCitaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
