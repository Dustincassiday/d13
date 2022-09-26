import { Component, EventEmitter, Output } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'd13-password-reset-form',
  templateUrl: './password-reset-form.component.html',
  styleUrls: ['./password-reset-form.component.scss'],
})
export class PasswordResetFormComponent {
  public passwordResetForm: FormGroup;

  public get email(): AbstractControl | null {
    return this.passwordResetForm.get('email');
  }

  @Output() formSubmit = new EventEmitter<string>();

  constructor() {
    this.passwordResetForm = this._buildForm();
  }

  public submit(): void {
    this.passwordResetForm.markAllAsTouched();
    if (this.passwordResetForm.valid) {
      this.formSubmit.emit(this.email?.value);
    }
  }

  private _buildForm(): FormGroup {
    return new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
    });
  }
}
