import { Routes } from '@angular/router';
import {
    AuthGuard,
    redirectLoggedInTo,
    redirectUnauthorizedTo,
} from '@angular/fire/auth-guard';
import { AuthPage, SignInPage, SignUpPage } from './auth/pages';
import { HubPage } from './hub/pages';
import { UpdateProfilePage, ViewProfilePage } from './hub-profile/pages';
import { HomePage } from './hub-home/pages';
import { ViewExchangePage } from './hub-exchanges/pages';

export const routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: 'hub' },
    {
        path: 'auth',
        component: AuthPage,
        data: { authGuardPipe: () => redirectLoggedInTo('/hub') },
        canActivate: [AuthGuard],
        children: [
            { path: '', pathMatch: 'full', redirectTo: 'sign-in' },
            { path: 'sign-in', component: SignInPage },
            { path: 'sign-up', component: SignUpPage },
        ],
    },
    {
        path: 'hub',
        component: HubPage,
        data: { authGuardPipe: () => redirectUnauthorizedTo('/auth') },
        canActivate: [AuthGuard],
        children: [
            { path: '', pathMatch: 'full', redirectTo: 'home' },
            { path: 'home', component: HomePage },
            {
                path: 'exchanges',
                children: [
                    { path: ':exchangeId', component: ViewExchangePage },
                ],
            },
            {
                path: 'profile',
                children: [
                    { path: '', component: ViewProfilePage },
                    { path: 'update', component: UpdateProfilePage },
                ],
            },
        ],
    },
];
