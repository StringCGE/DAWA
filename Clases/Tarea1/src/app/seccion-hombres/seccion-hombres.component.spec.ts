import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeccionHombresComponent } from './seccion-hombres.component';

describe('SeccionHombresComponent', () => {
  let component: SeccionHombresComponent;
  let fixture: ComponentFixture<SeccionHombresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeccionHombresComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SeccionHombresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
