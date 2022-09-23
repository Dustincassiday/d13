import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { RouterModule, Route } from '@angular/router';
import { WebShellUiModule } from '@d13/web/shell/ui';
import { ShellComponent } from './shell.component';
import { WebShellSharedModule } from '@d13/web/shell/shared';

export const routes: Route[] = [
  {
    path: 'account',
    pathMatch: 'full',
    loadChildren: () =>
      import('@d13/web/account/feature').then((m) => m.WebAccountFeatureModule),
  },
  {
    path: 'landing',
    pathMatch: 'full',
    loadChildren: () =>
      import('@d13/web/landing/feature').then((m) => m.WebLandingFeatureModule),
  },
  {
    path: '',
    redirectTo: 'landing',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [
    CommonModule,
    WebShellSharedModule,
    WebShellUiModule,
    RouterModule.forRoot(routes),
  ],
  declarations: [ShellComponent],
  providers: [DatePipe],
  exports: [ShellComponent],
})
export class WebShellFeatureModule {}
