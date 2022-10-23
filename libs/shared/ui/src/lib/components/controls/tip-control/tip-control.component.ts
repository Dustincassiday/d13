import {
  ChangeDetectionStrategy,
  Component,
  forwardRef,
  Input,
  TemplateRef,
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'd13-tip-control',
  templateUrl: './tip-control.component.html',
  styleUrls: ['./tip-control.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => TipControlComponent),
      multi: true,
    },
  ],
})
export class TipControlComponent implements ControlValueAccessor {
  private _showTipInput = true;

  @Input() public controlTemplate!: TemplateRef<unknown>;
  @Input() public total = 42;
  @Input() public presets: number[] = [15, 20, 25];
  @Input() public allowOther = true;
  public tipValue: string | number = '0';

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  public onChange = (_: number | '') => {
    /* noop */
  };
  public onTouched = () => {
    /* noop */
  };

  public get showTipInput(): boolean {
    return this.allowOther
      ? this.allowOther && this._showTipInput
      : this._showTipInput;
  }

  public set showTipInput(value) {
    this._showTipInput = value;
  }

  public setValue(value: string) {
    this.onTouched();
    this.tipValue = parseFloat(value);
  }

  public addTipByPercentage(value: number) {
    const percent = Math.round(value * this.total) / 100;
    console.log('addTipByPercentage', percent);
    this.writeValue(percent);
  }

  public addTipByAmount(value: number) {
    console.log('addTipByAmount', value);
    this.writeValue(value);
  }

  public handleInputChange({ value }: HTMLInputElement) {
    this.addTipByAmount(parseFloat(value));
  }

  public writeValue(value: number): void {
    this.tipValue = value;
    this.onChange(value);
  }

  public registerOnChange(fn: (_: number | '') => void): void {
    this.onChange = fn;
  }

  public registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }
}
