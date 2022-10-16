import { Directive, ElementRef, Inject, Renderer2 } from '@angular/core';

@Directive({
  // eslint-disable-next-line @angular-eslint/directive-selector
  selector: '[data-cy]',
})
export class DataCyDirective {
  constructor(
    @Inject('SHOW_DATA_CY') showDataCy: boolean,
    el: ElementRef,
    renderer: Renderer2
  ) {
    if (!showDataCy) {
      renderer.removeAttribute(el.nativeElement, 'data-cy');
    }
  }
}
