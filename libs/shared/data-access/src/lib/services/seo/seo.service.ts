import { Injectable } from '@angular/core';
import { Meta, MetaDefinition, Title } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root',
})
export class SeoService {
  constructor(private readonly _title: Title, private readonly _meta: Meta) {
    this._setDefaultTags();
  }

  public setTitle(title: string): void {
    this._title.setTitle(title);
  }

  public addMetaTag(tag: MetaDefinition): void {
    this._meta.addTag(tag);
  }

  public addMetaTags(tags: MetaDefinition[]) {
    this._meta.addTags(tags);
  }

  private _setDefaultTags() {
    const tags: MetaDefinition[] = [
      { name: 'writer', content: 'D13' },
      { name: 'robots', content: 'index, follow' },
      { charset: 'UTF-8' },
    ];
    this._meta.addTags(tags);
  }
}
