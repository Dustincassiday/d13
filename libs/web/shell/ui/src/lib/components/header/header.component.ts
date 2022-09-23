import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'd13-header',
  template: ` <header>
    <nav class="navbar navbar-expand-lg fixed-top navbar-dark bg-primary">
      <div class="container-fluid">
        <a
          routerLink="."
          class="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none"
        >
          <svg
            class="bi me-2"
            width="40"
            height="32"
            role="img"
            aria-label="Web App"
          >
            <use xlink:href="#logo" />
          </svg>
        </a>
        <button
          class="navbar-toggler"
          type="button"
          (click)="collapsed = !collapsed"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div
          [ngbCollapse]="collapsed"
          class="collapse navbar-collapse"
          id="navbarColor01"
        >
          <ul class="navbar-nav me-auto">
            <li class="nav-item">
              <a
                routerLink="/account"
                routerLinkActive="active"
                (click)="collapsed = true"
                class="nav-link px-2"
                >Account</a
              >
            </li>
            <li class="nav-item">
              <a
                routerLink="/landing"
                routerLinkActive="active"
                (click)="collapsed = true"
                class="nav-link px-2"
                >Landing</a
              >
            </li>

            <li
              class="nav-item"
              ngbDropdown
              display="static"
              placement="bottom-end"
            >
              <a class="nav-link" tabindex="0" ngbDropdownToggle role="button">
                Dropdown
              </a>
              <div
                ngbDropdownMenu
                aria-labelledby="navbarDropdown3"
                class="dropdown-menu"
              >
                <a ngbDropdownItem href="#" (click)="$event.preventDefault()"
                  >Action</a
                >
                <a ngbDropdownItem href="#" (click)="$event.preventDefault()"
                  >Another action</a
                >
                <div class="dropdown-divider"></div>
                <a ngbDropdownItem href="#" (click)="$event.preventDefault()"
                  >Something else here</a
                >
              </div>
            </li>
          </ul>
          <form class="d-flex">
            <button class="btn btn-success my-2 mx-1 my-sm-0" type="submit">
              Login
            </button>
            <button class="btn btn-info my-2 my-sm-0" type="submit">
              Signup
            </button>
          </form>
        </div>
      </div>
    </nav>
  </header>`,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
  public collapsed = true;
}
