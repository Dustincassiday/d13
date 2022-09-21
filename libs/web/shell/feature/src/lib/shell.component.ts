import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'd13-shell',
  template: `
    <d13-layout>
      <router-outlet></router-outlet>
    </d13-layout>
  `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ShellComponent {}
