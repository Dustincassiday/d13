/* eslint-disable @typescript-eslint/no-explicit-any */

import { DomSanitizer } from '@angular/platform-browser';
import { UnsafeHtmlPipe } from './unsafe-html.pipe';

describe('UnsafeHtmlPipe', () => {
  let mockSanitizer: DomSanitizer;
  let sut: UnsafeHtmlPipe;

  beforeEach(() => {
    mockSanitizer = {
      bypassSecurityTrustHtml: jest.fn(),
    } as any;

    sut = new UnsafeHtmlPipe(mockSanitizer);
  });

  it('should be created', () => {
    expect(sut).toBeTruthy();
  });

  it('should call html sanitizer with given html string', () => {
    const value = '<i>test</i>';
    sut.transform(value);
    expect(mockSanitizer.bypassSecurityTrustHtml).toHaveBeenCalledWith(value);
  });
});
