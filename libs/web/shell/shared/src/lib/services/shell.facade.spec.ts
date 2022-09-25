import { DatePipe } from '@angular/common';
import { TestBed } from '@angular/core/testing';
import { first } from 'rxjs';

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

  describe('vm$', () => {
    it('should return initial values', (done) => {
      const sut = service.vm$;
      sut.pipe(first()).subscribe((vm) => {
        expect(vm.title).toBe('D13 Web App');
        done();
      });
    });
  });
});
