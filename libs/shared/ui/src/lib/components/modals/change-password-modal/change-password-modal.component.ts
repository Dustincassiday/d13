import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'd13-change-password-modal',
  templateUrl: './change-password-modal.component.html',
  styleUrls: ['./change-password-modal.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChangePasswordModalComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
