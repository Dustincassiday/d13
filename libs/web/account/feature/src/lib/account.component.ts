import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'd13-account',
  template: ` <p>account works!</p> `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AccountComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
