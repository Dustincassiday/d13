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
  AbstractLoggerService,
  AuthenticationFirebaseService,
  AuthenticationMockService,
  LoggerMockService,
} from '@d13/shared/data-access';
@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    WebShellFeatureModule,
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
      provide: AbstractAuthenticationService,
      useClass: AuthenticationFirebaseService,
    },
    {
      provide: AbstractLoggerService,
      useClass: LoggerMockService,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
