import { Injectable } from '@angular/core';
import { AbstractLoggerService } from '../../abstract';

@Injectable({
  providedIn: 'root',
})
export class LoggerMockService extends AbstractLoggerService {
  public log(message: string, code: string = ''): void {
    console.log(message, code);
  }

  public warn(message: string, code: string = ''): void {
    console.warn(message, code);
  }

  public error(message: string, code: string = ''): void {
    console.error(message, code);
  }
}
