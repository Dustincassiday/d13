import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route } from '@angular/router';
import { WebShellUiModule } from '@d13/web/shell/ui';
import { WebShellSharedModule } from '@d13/web/shell/shared';
import { ShellComponent } from './components';
import { SharedUiModule } from '@d13/shared/ui';

export const routes: Route[] = [
  {
    path: 'account',
    pathMatch: 'full',
    loadChildren: () =>
      import('@d13/web/account/feature').then((m) => m.WebAccountFeatureModule),
  },
  {
    path: 'contact',
    pathMatch: 'full',
    loadChildren: () =>
      import('@d13/web/contact/feature').then((m) => m.WebContactFeatureModule),
  },
  {
    path: 'locations',
    pathMatch: 'full',
    loadChildren: () =>
      import('@d13/web/location/feature').then(
        (m) => m.WebLocationFeatureModule
      ),
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
  providers: [],
  exports: [ShellComponent],
})
export class WebShellFeatureModule {}
