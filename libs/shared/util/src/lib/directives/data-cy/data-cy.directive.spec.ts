/* eslint-disable @typescript-eslint/no-explicit-any */

import { ElementRef, Renderer2 } from '@angular/core';
import { DataCyDirective } from './data-cy.directive';

describe('DataCyDirective', () => {
  let sut: DataCyDirective;
  let renderer: Renderer2;
  let elementRef: ElementRef;

  beforeEach(() => {
    renderer = {
      removeAttribute: jest.fn(),
    } as any;

    elementRef = { nativeElement: {} } as any;
  });

  it('should be created', () => {
    sut = new DataCyDirective(true, elementRef, renderer);
    expect(sut).toBeTruthy();
  });

  it('should call renderer2.removeAttribute when showDataCy is true', () => {
    const showDataCy = false;
    sut = new DataCyDirective(showDataCy, elementRef, renderer);
    expect(renderer.removeAttribute).toHaveBeenCalledWith(
      elementRef.nativeElement,
      'data-cy'
    );
  });

  it('should not call renderer2.removeAttribute when showDataCy is false', () => {
    const showDataCy = true;
    sut = new DataCyDirective(showDataCy, elementRef, renderer);
    expect(renderer.removeAttribute).not.toHaveBeenCalled();
  });
});
