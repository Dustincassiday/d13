import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactComponent } from './contact.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedUtilModule } from '@d13/shared/util';

const routes: Routes = [
  {
    path: '',
    component: ContactComponent,
  },
];
@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes), SharedUtilModule],
  declarations: [ContactComponent],
})
export class WebContactFeatureModule {}
