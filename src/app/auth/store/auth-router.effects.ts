import { inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { routerNavigatedAction } from '@ngrx/router-store';
import { map, tap } from 'rxjs';
import { AuthActions } from './auth.actions';

@Injectable()
export class AuthRouterEffects {
    private readonly actions$: Actions = inject(Actions);
    private readonly router: Router = inject(Router);

    signInRedirect$ = createEffect(
        () => {
            return this.actions$.pipe(
                ofType(AuthActions.signInSuccess),
                tap(() => this.router.navigate(['/hub'])),
            );
        },
        { dispatch: false },
    );

    signUpRedirect$ = createEffect(
        () => {
            return this.actions$.pipe(
                ofType(AuthActions.signUpSuccess),
                tap(() => this.router.navigate(['/hub/profile/update'])),
            );
        },
        { dispatch: false },
    );

    signOutRedirect$ = createEffect(
        () => {
            return this.actions$.pipe(
                ofType(AuthActions.signOutSuccess),
                tap(() => this.router.navigate(['/auth'])),
            );
        },
        { dispatch: false },
    );

    refreshTokenOnNavigate$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(routerNavigatedAction),
            map(() => AuthActions.refreshToken()),
        );
    });
}
