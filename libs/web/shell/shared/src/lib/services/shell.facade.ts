import { DatePipe } from '@angular/common';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { ShellViewmodel } from '../models/shell.viewmodel';

@Injectable({
  providedIn: 'root',
})
export class ShellFacade {
  private _vm$: BehaviorSubject<ShellViewmodel>;

  public get vm$(): Observable<ShellViewmodel> {
    return this._vm$;
  }

  constructor(private readonly _datePipe: DatePipe) {
    const initialVm: ShellViewmodel = {
      title: 'D13 Web App',
      copyright: `&copy;${this._getCurrentYear()} D13`,
    };
    this._vm$ = new BehaviorSubject<ShellViewmodel>(initialVm);
  }

  private _getCurrentYear(): string {
    return this._datePipe.transform(Date.now(), 'yyyy') ?? '';
  }
}
