import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarNovedadesComponent } from './agregar-novedades.component';

describe('AgregarNovedadesComponent', () => {
  let component: AgregarNovedadesComponent;
  let fixture: ComponentFixture<AgregarNovedadesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgregarNovedadesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgregarNovedadesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
