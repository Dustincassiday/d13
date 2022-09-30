import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export abstract class AbstractLoggerService {
  abstract log(message: string, code?: string): void;

  abstract warn(message: string, code?: string): void;

  abstract error(message: string, code?: string): void;
}
