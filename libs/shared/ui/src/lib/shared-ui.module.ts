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
import { UnsafeHtmlPipe } from './pipes';
import { DataCyDirective } from './directives';
import { TipControlComponent } from './components/controls/tip-control/tip-control.component';

@NgModule({
  imports: [CommonModule, RouterModule, ReactiveFormsModule, NgbModule],
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
    UnsafeHtmlPipe,
    DataCyDirective,
    TipControlComponent,
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
    UnsafeHtmlPipe,
    DataCyDirective,
    TipControlComponent,
  ],
})
export class SharedUiModule {}
