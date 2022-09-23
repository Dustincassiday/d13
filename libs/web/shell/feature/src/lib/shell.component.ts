import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ShellFacade, ShellViewmodel } from '@d13/web/shell/shared';
import { Observable } from 'rxjs';

@Component({
  selector: 'd13-shell',
  template: `
    <d13-layout [vm]="vm$ | async">
      <router-outlet></router-outlet>
    </d13-layout>
  `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ShellComponent {
  public vm$: Observable<ShellViewmodel>;
  constructor(private readonly _facade: ShellFacade) {
    this.vm$ = _facade.vm$;
  }
}
