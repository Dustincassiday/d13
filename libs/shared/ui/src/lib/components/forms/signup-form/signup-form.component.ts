import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ConfirmPasswordValidator } from '../../../validators';

@Component({
  selector: 'd13-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.scss'],
})
export class SignupFormComponent {
  public form: FormGroup;

  @Output() formSubmit = new EventEmitter<{
    name: string;
    email: string;
    password: string;
  }>();

  public get name() {
    return this.form.get('name');
  }

  public get email() {
    return this.form.get('email');
  }

  public get password() {
    return this.form.get('password');
  }

  public get confirm() {
    return this.form.get('confirm');
  }

  constructor() {
    this.form = this._buildForm();
  }

  public submit(): void {
    this.form.markAllAsTouched();
    if (!this.form.valid) {
      return;
    }
    this.formSubmit.emit(this.form.value);
  }

  private _buildForm(): FormGroup {
    return new FormGroup(
      {
        name: new FormControl('', [Validators.required]),
        email: new FormControl('', [Validators.email, Validators.required]),
        password: new FormControl('', [Validators.required]),
        confirm: new FormControl('', [Validators.required]),
      },
      {
        validators: [ConfirmPasswordValidator('password', 'confirm')],
      }
    );
  }
}
