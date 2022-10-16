import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataCyDirective } from './directives';

@NgModule({
  imports: [CommonModule],
  declarations: [DataCyDirective],
  exports: [DataCyDirective],
})
export class SharedUtilModule {}
