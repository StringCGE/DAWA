import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemSeccionMujeresComponent } from './item-seccion-mujeres.component';

describe('ItemSeccionMujeresComponent', () => {
  let component: ItemSeccionMujeresComponent;
  let fixture: ComponentFixture<ItemSeccionMujeresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemSeccionMujeresComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ItemSeccionMujeresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
