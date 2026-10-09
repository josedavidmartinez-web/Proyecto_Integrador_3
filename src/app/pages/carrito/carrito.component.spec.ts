import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular/lazy';

import { CarritoComponent } from './carrito.component';

describe('CarritoComponent', () => {
  let component: CarritoComponent;
  let fixture: ComponentFixture<CarritoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CarritoComponent],
      imports: [IonicModule.forRoot()],
    });

    fixture = TestBed.createComponent(CarritoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
