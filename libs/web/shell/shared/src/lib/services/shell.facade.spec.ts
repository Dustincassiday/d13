import { DatePipe } from '@angular/common';
import { TestBed } from '@angular/core/testing';

import { ShellFacade } from './shell.facade';

describe('ShellFacade', () => {
  let service: ShellFacade;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DatePipe],
    });
    service = TestBed.inject(ShellFacade);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
