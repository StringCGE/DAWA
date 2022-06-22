import { TestBed } from '@angular/core/testing';

import { EstalogueadoService } from './estalogueado.service';

describe('EstalogueadoService', () => {
  let service: EstalogueadoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EstalogueadoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
