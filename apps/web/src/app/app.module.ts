import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { WebShellFeatureModule } from '@d13/web/shell/feature';
import { environment } from '../environments/environment';
import { AppComponent } from './app.component';
@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, WebShellFeatureModule],
  providers: [
    {
      provide: 'SHOW_DATA_CY',
      useValue: !environment.production,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
