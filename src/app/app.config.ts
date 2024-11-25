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
import { AuthReducer, AuthEffects, AuthRouterEffects } from './auth/store';
import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
    providers: [
        provideZoneChangeDetection({ eventCoalescing: true }),
        provideFirebaseApp(() =>
            initializeApp({
                projectId: 'giftr-46af7',
                appId: '1:179695453416:web:1e55197309e011d22c355d',
                storageBucket: 'giftr-46af7.firebasestorage.app',
                apiKey: 'AIzaSyCWPSPOWZc9tmAOY7_SS7lPqONBFhrWbl8',
                authDomain: 'giftr-46af7.firebaseapp.com',
                messagingSenderId: '179695453416',
                measurementId: 'G-FDCMKX8PH2',
            }),
        ),
        provideAuth(() => getAuth()),
        provideRouter(routes),
        provideStore({ auth: AuthReducer }),
        provideEffects([AuthEffects, AuthRouterEffects]),
        provideRouterStore(),
        provideStoreDevtools({ maxAge: 25, logOnly: !isDevMode() }),
    ],
};
