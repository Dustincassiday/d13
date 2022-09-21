import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { WebShellFeatureModule } from '@d13/web/shell/feature';
import { AppComponent } from './app.component';
@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, WebShellFeatureModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
