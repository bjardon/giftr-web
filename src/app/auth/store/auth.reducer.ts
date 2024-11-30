import { createReducer, on } from '@ngrx/store';
import { authInitialState, AuthState } from './auth.state';
import { AuthActions } from './auth.actions';

export const AuthReducer = createReducer(
    authInitialState(),
    on(
        AuthActions.signIn,
        (state): AuthState => ({
            ...state,
            busy: true,
        }),
    ),
    on(
        AuthActions.signInError,
        (state, { error }): AuthState => ({
            ...state,
            busy: false,
            error,
        }),
    ),
    on(
        AuthActions.signInSuccess,
        (state): AuthState => ({
            ...state,
            busy: false,
            error: null,
        }),
    ),
    on(
        AuthActions.signUp,
        (state): AuthState => ({
            ...state,
            busy: true,
        }),
    ),
    on(
        AuthActions.signUpError,
        (state, { error }): AuthState => ({
            ...state,
            busy: false,
            error,
        }),
    ),
    on(
        AuthActions.signUpSuccess,
        (state): AuthState => ({
            ...state,
            busy: false,
            error: null,
        }),
    ),
);
