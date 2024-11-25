import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, of, switchMap } from 'rxjs';
import { AuthService } from '../services';
import { AuthActions } from './auth.actions';

@Injectable()
export class AuthEffects {
    private readonly actions$: Actions = inject(Actions);
    private readonly auth: AuthService = inject(AuthService);

    signIn$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(AuthActions.signIn),
            switchMap(({ params }) =>
                this.auth
                    .signInWithEmailAndPassword(params.email, params.password)
                    .pipe(
                        map(() => AuthActions.signInSuccess({ success: true })),
                        catchError((error) =>
                            of(AuthActions.signInError({ error })),
                        ),
                    ),
            ),
        );
    });

    signUp$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(AuthActions.signUp),
            switchMap(({ params }) =>
                this.auth
                    .signUpWithEmailAndPassword(params.email, params.password)
                    .pipe(
                        map(() => AuthActions.signUpSuccess({ success: true })),
                        catchError((error) =>
                            of(AuthActions.signUpError({ error })),
                        ),
                    ),
            ),
        );
    });

    signOut$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(AuthActions.signOut),
            switchMap(() =>
                this.auth.signOut().pipe(
                    map(() => AuthActions.signOutSuccess()),
                    catchError((error) =>
                        of(AuthActions.signOutError({ error })),
                    ),
                ),
            ),
        );
    });
}
