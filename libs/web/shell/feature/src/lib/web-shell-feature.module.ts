import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route } from '@angular/router';
import { WebShellUiModule } from '@d13/web/shell/ui';
import { WebShellSharedModule } from '@d13/web/shell/shared';
import { ShellComponent } from './components';
import { SharedUiModule } from '@d13/shared/ui';
import {
  AbstractAuthenticationService,
  AuthenticationMockService,
} from '@d13/shared/data-access';

export const routes: Route[] = [
  {
    path: 'account',
    pathMatch: 'full',
    loadChildren: () =>
      import('@d13/web/account/feature').then((m) => m.WebAccountFeatureModule),
  },
  {
    path: '',
    pathMatch: 'full',
    loadChildren: () =>
      import('@d13/web/landing/feature').then((m) => m.WebLandingFeatureModule),
  },
  {
    path: '**',
    redirectTo: '',
  },
];

@NgModule({
  imports: [
    CommonModule,
    WebShellSharedModule,
    WebShellUiModule,
    SharedUiModule,
    RouterModule.forRoot(routes),
  ],
  declarations: [ShellComponent],
  providers: [
    {
      provide: AbstractAuthenticationService,
      useClass: AuthenticationMockService,
    },
  ],
  exports: [ShellComponent],
})
export class WebShellFeatureModule {}
