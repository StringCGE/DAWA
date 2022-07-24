import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeccionMujeresComponent } from './seccion-mujeres.component';

describe('SeccionMujeresComponent', () => {
  let component: SeccionMujeresComponent;
  let fixture: ComponentFixture<SeccionMujeresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeccionMujeresComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SeccionMujeresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
