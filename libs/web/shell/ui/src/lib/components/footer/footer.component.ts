import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { ShellViewmodel } from '@d13/web/shell/shared';

@Component({
  selector: 'd13-footer',
  template: `
    <footer>
      <div
        class="container d-flex flex-wrap justify-content-between align-items-center"
      >
        <div class="col-md-4 d-flex align-items-center">
          <a
            routerLink="/"
            class="mb-0 me-2 text-muted text-decoration-none lh-1"
          >
            <svg class="bi" width="30" height="24">
              <use xlink:href="#logo" />
            </svg>
          </a>
          <span class="mb-0 text-muted" [innerHTML]="vm?.copyright"></span>
        </div>

        <ul class="nav col-md-4 justify-content-end list-unstyled d-flex">
          <li class="ms-3">
            <a class="text-muted" href="#"
              ><svg
                class="bi"
                width="24"
                height="24"
                role="img"
                aria-label="twitter"
              >
                <use xlink:href="#twitter" /></svg
            ></a>
          </li>
          <li class="ms-3">
            <a class="text-muted" href="#"
              ><svg
                class="bi"
                width="24"
                height="24"
                role="img"
                aria-label="instagram"
              >
                <use xlink:href="#instagram" /></svg
            ></a>
          </li>
          <li class="ms-3">
            <a class="text-muted" href="#">
              <svg
                class="bi"
                width="24"
                height="24"
                role="img"
                aria-label="facebook"
              >
                <use xlink:href="#facebook" />
              </svg>
            </a>
          </li>
        </ul>
      </div>
    </footer>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FooterComponent {
  @Input() vm: ShellViewmodel | null = null;
}
