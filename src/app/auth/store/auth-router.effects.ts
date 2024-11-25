import { inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { tap } from 'rxjs';
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
                tap(() => this.router.navigate(['/hub'])), // TODO: redirect to complete profile route
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
}
