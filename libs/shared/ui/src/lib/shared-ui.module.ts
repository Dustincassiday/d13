import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  LoginFormComponent,
  LoginModalComponent,
  PasswordResetFormComponent,
  SignupFormComponent,
  SignupModalComponent,
} from './components';
import { ReactiveFormsModule } from '@angular/forms';
@NgModule({
  imports: [CommonModule, ReactiveFormsModule],
  declarations: [
    LoginFormComponent,
    SignupFormComponent,
    PasswordResetFormComponent,
    LoginModalComponent,
    SignupModalComponent,
  ],
  exports: [LoginModalComponent, SignupModalComponent],
})
export class SharedUiModule {}
