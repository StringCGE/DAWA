import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientelogueadoComponent } from './clientelogueado.component';

describe('ClientelogueadoComponent', () => {
  let component: ClientelogueadoComponent;
  let fixture: ComponentFixture<ClientelogueadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientelogueadoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClientelogueadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
