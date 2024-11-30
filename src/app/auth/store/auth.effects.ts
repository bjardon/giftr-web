import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, of, switchMap, withLatestFrom } from 'rxjs';
import { AuthActions } from './auth.actions';
import { AuthService } from '../services';

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

    refreshToken$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(AuthActions.refreshToken),
            // eslint-disable-next-line @ngrx/prefer-concat-latest-from
            withLatestFrom(this.auth.user$),
            switchMap(([, user]) =>
                this.auth.refreshToken(user).pipe(
                    map(() => AuthActions.refreshTokenSuccess()),
                    catchError((error) =>
                        of(AuthActions.refreshTokenError({ error })),
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
                        map(() => AuthActions.signUpSuccess()),
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
