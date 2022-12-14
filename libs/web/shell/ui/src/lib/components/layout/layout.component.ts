import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ShellViewmodel } from '@d13/web/shell/shared';

@Component({
  selector: 'd13-layout',
  templateUrl: './layout.component.html',
})
export class LayoutComponent {
  @Input() public vm: ShellViewmodel | null = null;

  @Output() public loginBtnClick = new EventEmitter();
  @Output() public signupBtnClick = new EventEmitter();
  @Output() public logoutBtnClick = new EventEmitter();
}
