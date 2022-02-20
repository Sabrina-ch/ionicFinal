import { TestBed } from '@angular/core/testing';

import { VerificadorGuard } from './verificador.guard';

describe('VerificadorGuard', () => {
  let guard: VerificadorGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(VerificadorGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
