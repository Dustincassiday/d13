import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ConfirmPasswordValidator } from '../../../validators';

@Component({
  selector: 'd13-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.scss'],
})
export class SignupFormComponent {
  public signupForm: FormGroup;

  @Output() formSubmit = new EventEmitter<{
    name: string;
    email: string;
    password: string;
  }>();

  public get name() {
    return this.signupForm.get('name');
  }

  public get email() {
    return this.signupForm.get('email');
  }

  public get password() {
    return this.signupForm.get('password');
  }

  public get confirm() {
    return this.signupForm.get('confirm');
  }

  constructor() {
    this.signupForm = this._buildForm();
  }

  public submit(): void {
    this.signupForm.markAllAsTouched();
    if (this.signupForm.valid) {
      this.formSubmit.emit(this.signupForm.value);
    }
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
        updateOn: 'blur',
        validators: [ConfirmPasswordValidator('password', 'confirm')],
      }
    );
  }
}
