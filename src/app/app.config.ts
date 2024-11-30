import {
    ApplicationConfig,
    provideZoneChangeDetection,
    isDevMode,
} from '@angular/core';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { provideRouter } from '@angular/router';
import { provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { provideRouterStore } from '@ngrx/router-store';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { environment } from '../environments/environment';
import { authTokenInterceptor } from '../interceptors';
import { routes } from './app.routes';
import { AuthReducer, AuthEffects, AuthRouterEffects } from './auth/store';
import { UserEffects, UserReducer } from './user/store';
import {
    GiftExchangesReducer,
    GiftExchangesEffects,
    GiftExchangesRouterEffects,
    ParticipantsReducer,
    WishListItemsReducer,
} from './gift-exchanges/store/';

export const appConfig: ApplicationConfig = {
    providers: [
        provideZoneChangeDetection({ eventCoalescing: true }),
        provideFirebaseApp(() => initializeApp(environment.firebaseOptions)),
        provideAuth(() => getAuth()),
        provideRouter(routes),
        provideHttpClient(withInterceptors([authTokenInterceptor])),
        provideStore({
            auth: AuthReducer,
            user: UserReducer,
            exchanges: GiftExchangesReducer,
            participants: ParticipantsReducer,
            wishListItems: WishListItemsReducer,
        }),
        provideEffects([
            AuthEffects,
            AuthRouterEffects,
            UserEffects,
            GiftExchangesEffects,
            GiftExchangesRouterEffects,
        ]),
        provideRouterStore(),
        provideStoreDevtools({ maxAge: 25, logOnly: !isDevMode() }),
    ],
};
