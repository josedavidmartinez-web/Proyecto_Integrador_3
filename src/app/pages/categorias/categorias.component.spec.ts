import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular/lazy';

import { CategoriasComponent } from './categorias.component';

describe('CategoriasComponent', () => {
  let component: CategoriasComponent;
  let fixture: ComponentFixture<CategoriasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CategoriasComponent],
      imports: [IonicModule.forRoot()],
    });

    fixture = TestBed.createComponent(CategoriasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
