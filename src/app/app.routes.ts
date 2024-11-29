import { Routes } from '@angular/router';
import {
    AuthGuard,
    redirectLoggedInTo,
    redirectUnauthorizedTo,
} from '@angular/fire/auth-guard';
import { AuthPage, SignInPage, SignUpPage } from './auth/pages';

export const routes: Routes = [
    {
        path: 'auth',
        component: AuthPage,
        data: { authGuardPipe: () => redirectLoggedInTo('/hub') },
        canActivate: [AuthGuard],
        // canActivateChild: [AuthGuard],
        children: [
            { path: '', pathMatch: 'full', redirectTo: 'sign-in' },
            { path: 'sign-in', component: SignInPage },
            { path: 'sign-up', component: SignUpPage },
        ],
    },
];
