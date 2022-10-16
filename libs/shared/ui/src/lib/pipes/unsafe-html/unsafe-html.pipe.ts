import { DomSanitizer } from '@angular/platform-browser';
import { PipeTransform, Pipe } from '@angular/core';

@Pipe({ name: 'unsafeHtml' })
export class UnsafeHtmlPipe implements PipeTransform {
  constructor(private sanitizer: DomSanitizer) {}

  public transform(value: string) {
    return this.sanitizer.bypassSecurityTrustHtml(value);
  }
}
