import {
    ApplicationConfig,
    provideZoneChangeDetection,
    isDevMode,
} from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { provideRouterStore } from '@ngrx/router-store';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { environment } from '../environments/environment';
import { AuthReducer, AuthEffects, AuthRouterEffects } from './auth/store';
import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
    providers: [
        provideZoneChangeDetection({ eventCoalescing: true }),
        provideFirebaseApp(() => initializeApp(environment.firebaseOptions)),
        provideAuth(() => getAuth()),
        provideRouter(routes),
        provideStore({ auth: AuthReducer }),
        provideEffects([AuthEffects, AuthRouterEffects]),
        provideRouterStore(),
        provideStoreDevtools({ maxAge: 25, logOnly: !isDevMode() }),
    ],
};
