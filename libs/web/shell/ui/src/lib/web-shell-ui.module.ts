import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './components/layout/layout.component';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SvgComponent } from './components/svg/svg-icons.component';
import { SharedUiModule } from '@d13/shared/ui';

@NgModule({
  imports: [CommonModule, RouterModule, NgbModule, SharedUiModule],
  declarations: [
    LayoutComponent,
    HeaderComponent,
    FooterComponent,
    SvgComponent,
  ],
  exports: [LayoutComponent],
})
export class WebShellUiModule {}
