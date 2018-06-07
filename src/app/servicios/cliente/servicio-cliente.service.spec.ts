import { TestBed, inject } from '@angular/core/testing';

import { ServicioClienteService } from './servicio-cliente.service';

describe('ServicioClienteService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ServicioClienteService]
    });
  });

  it('should be created', inject([ServicioClienteService], (service: ServicioClienteService) => {
    expect(service).toBeTruthy();
  }));
});
