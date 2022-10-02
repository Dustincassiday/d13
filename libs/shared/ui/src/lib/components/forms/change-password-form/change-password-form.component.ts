import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'd13-change-password-form',
  templateUrl: './change-password-form.component.html',
  styleUrls: ['./change-password-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChangePasswordFormComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
