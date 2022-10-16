import { Component, EventEmitter, Input, Output } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'd13-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
})
export class LoginFormComponent {
  public loginForm: FormGroup;

  public get email(): AbstractControl | null {
    return this.loginForm.get('email');
  }

  public get password(): AbstractControl | null {
    return this.loginForm.get('password');
  }

  @Output() formSubmit = new EventEmitter<{
    email: string;
    password: string;
  }>();

  constructor() {
    this.loginForm = this._buildForm();
  }

  public submit(): void {
    this.loginForm.markAllAsTouched();
    if (this.loginForm.valid) {
      this.formSubmit.emit(this.loginForm.value);
    }
  }

  private _buildForm(): FormGroup {
    return new FormGroup(
      {
        email: new FormControl('', [Validators.required, Validators.email]),
        password: new FormControl('', [Validators.required]),
      },
      {
        updateOn: 'blur',
      }
    );
  }
}
