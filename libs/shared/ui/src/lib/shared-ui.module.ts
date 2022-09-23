import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  LoginFormComponent,
  PasswordResetFormComponent,
  SignupFormComponent,
} from './components';
import { ReactiveFormsModule } from '@angular/forms';
@NgModule({
  imports: [CommonModule, ReactiveFormsModule],
  declarations: [
    LoginFormComponent,
    SignupFormComponent,
    PasswordResetFormComponent,
  ],
})
export class SharedUiModule {}
