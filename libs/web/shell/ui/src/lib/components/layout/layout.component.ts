import { Component } from '@angular/core';

@Component({
  selector: 'd13-layout',
  template: ` <div class="d-flex flex-column h-100">
      <d13-header></d13-header>
      <main class="flex-shrink-0">
        <div class="container">
          <ng-content></ng-content>
        </div>
      </main>
      <d13-footer class="py-3 mt-auto border-top"></d13-footer>
    </div>
    <d13-svg></d13-svg>`,
})
export class LayoutComponent {
  public collapsed = true;
}
