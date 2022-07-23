import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemSeccionHombresComponent } from './item-seccion-hombres.component';

describe('ItemSeccionHombresComponent', () => {
  let component: ItemSeccionHombresComponent;
  let fixture: ComponentFixture<ItemSeccionHombresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemSeccionHombresComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ItemSeccionHombresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
