import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LocationComponent } from './location.component';
import { WebLocationUiModule } from '@d13/web/location/ui';
import { GoogleMapsModule } from '@angular/google-maps';

const routes: Routes = [
  {
    path: '',
    component: LocationComponent,
  },
];

@NgModule({
  imports: [
    CommonModule,
    WebLocationUiModule,
    GoogleMapsModule,
    RouterModule.forChild(routes),
  ],
  declarations: [LocationComponent],
})
export class WebLocationFeatureModule {}
