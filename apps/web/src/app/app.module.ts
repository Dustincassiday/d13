import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { WebShellFeatureModule } from '@d13/web/shell/feature';
import { environment } from '../environments/environment';
import { AppComponent } from './app.component';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { provideAuth, getAuth } from '@angular/fire/auth';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';
import {
  AbstractAuthenticationService,
  AbstractLocationService,
  AbstractLoggerService,
  AuthenticationFirebaseService,
  googleMapApiLoader,
  LocationMockService,
  LoggerMockService,
  MAP_LOADED,
} from '@d13/shared/data-access';
import {
  HttpClient,
  HttpClientJsonpModule,
  HttpClientModule,
} from '@angular/common/http';
@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    WebShellFeatureModule,
    HttpClientModule,
    HttpClientJsonpModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
  ],
  providers: [
    {
      provide: 'SHOW_DATA_CY',
      useValue: !environment.production,
    },
    {
      provide: MAP_LOADED,
      useFactory: googleMapApiLoader('AIzaSyAyM2GBYjMSCHVeuYAEMiPLEommNprPzOs'),
      deps: [HttpClient],
    },
    {
      provide: AbstractAuthenticationService,
      useClass: AuthenticationFirebaseService,
    },
    {
      provide: AbstractLoggerService,
      useClass: LoggerMockService,
    },
    {
      provide: AbstractLocationService,
      useClass: LocationMockService,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
