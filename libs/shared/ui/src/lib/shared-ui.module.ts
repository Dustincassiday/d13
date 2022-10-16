import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import {
  ChangePasswordFormComponent,
  ChangePasswordModalComponent,
  ContactFormComponent,
  LoginFormComponent,
  LoginModalComponent,
  PasswordResetFormComponent,
  PasswordResetModalComponent,
  SignupFormComponent,
  SignupModalComponent,
} from './components';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SharedUtilModule } from '@d13/shared/util';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    NgbModule,
    SharedUtilModule,
  ],
  declarations: [
    LoginFormComponent,
    SignupFormComponent,
    PasswordResetFormComponent,
    LoginModalComponent,
    SignupModalComponent,
    ChangePasswordFormComponent,
    ChangePasswordModalComponent,
    PasswordResetModalComponent,
    ContactFormComponent,
  ],
  exports: [
    LoginFormComponent,
    SignupFormComponent,
    PasswordResetFormComponent,
    LoginModalComponent,
    SignupModalComponent,
    ChangePasswordFormComponent,
    ChangePasswordModalComponent,
    PasswordResetModalComponent,
    ContactFormComponent,
  ],
})
export class SharedUiModule {}
