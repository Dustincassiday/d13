import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import {
  LoginFormComponent,
  LoginModalComponent,
  PasswordResetFormComponent,
  SignupFormComponent,
  SignupModalComponent,
} from './components';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [CommonModule, RouterModule, ReactiveFormsModule],
  declarations: [
    LoginFormComponent,
    SignupFormComponent,
    PasswordResetFormComponent,
    LoginModalComponent,
    SignupModalComponent,
  ],
  exports: [
    LoginModalComponent,
    SignupModalComponent,
    LoginFormComponent,
    SignupFormComponent,
  ],
})
export class SharedUiModule {}
