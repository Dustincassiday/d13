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
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports: [CommonModule, RouterModule, ReactiveFormsModule, NgbModule],
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
