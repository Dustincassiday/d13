import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactComponent } from './contact.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedUiModule } from '@d13/shared/ui';

const routes: Routes = [
  {
    path: '',
    component: ContactComponent,
  },
];
@NgModule({
  imports: [CommonModule, SharedUiModule, RouterModule.forChild(routes)],
  declarations: [ContactComponent],
})
export class WebContactFeatureModule {}
