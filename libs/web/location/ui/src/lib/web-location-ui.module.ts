import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LocationCardComponent } from './components/location-card/location-card.component';

@NgModule({
  imports: [CommonModule],
  declarations: [LocationCardComponent],
  exports: [LocationCardComponent],
})
export class WebLocationUiModule {}
