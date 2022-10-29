import { InjectionToken } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, map, Observable, of, shareReplay } from 'rxjs';

export const MAP_LOADED = new InjectionToken<Observable<boolean>>(
  'Maps API Loaded'
);

export function googleMapApiLoader(apiKey: string) {
  return function loadMapApi(httpClient: HttpClient): Observable<boolean> {
    return httpClient
      .jsonp(
        `https://maps.googleapis.com/maps/api/js?key=${apiKey}`,
        'callback'
      )
      .pipe(
        shareReplay({ bufferSize: 1, refCount: true }),
        map(() => true),
        catchError(() => {
          return of(false);
        })
      );
  };
}
