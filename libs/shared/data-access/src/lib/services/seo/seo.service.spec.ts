/* eslint-disable @typescript-eslint/no-explicit-any */

import { Meta, MetaDefinition, Title } from '@angular/platform-browser';
import { SeoService } from './seo.service';

describe('SeoService', () => {
  let sut: SeoService;
  let title: Title;
  let meta: Meta;

  beforeEach(() => {
    title = {
      setTitle: jest.fn(),
    } as any;
    meta = {
      addTag: jest.fn(),
      addTags: jest.fn(),
    } as any;

    sut = new SeoService(title, meta);
  });

  it('should call meta.addTags on creation', () => {
    sut = new SeoService(title, meta);
    expect(meta.addTags).toHaveBeenCalled();
  });

  it('should be created', () => {
    expect(sut).toBeTruthy();
  });

  describe('setTitle', () => {
    it('should call title.setTitle w/ arg', () => {
      const arg = 'test title';
      sut.setTitle(arg);
      expect(title.setTitle).toHaveBeenCalledWith(arg);
    });
  });
  describe('addMetaTag', () => {
    it('should call meta.addTag w/ arg', () => {
      const arg: MetaDefinition = { name: 'test', content: 'test' };
      sut.addMetaTag(arg);
      expect(meta.addTag).toHaveBeenCalledWith(arg);
    });
  });
  describe('addMetaTag', () => {
    it('should call meta.addTags w/ arg', () => {
      const arg: MetaDefinition[] = [{ name: 'test', content: 'test' }];
      sut.addMetaTags(arg);
      expect(meta.addTags).toHaveBeenCalledWith(arg);
    });
  });
});
