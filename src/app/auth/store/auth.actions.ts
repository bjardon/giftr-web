import { createAction, props } from '@ngrx/store';

export interface AuthSignInParams {
    email: string;
    password: string;
}

export interface AuthSignUpParams {
    email: string;
    password: string;
}

const signIn = createAction(
    '[Auth] signIn',
    props<{ params: AuthSignInParams }>(),
);
const signInSuccess = createAction(
    '[Auth] signInSuccess',
    props<{ success: true }>(),
);
const signInError = createAction(
    '[Auth] signInError',
    props<{ error: unknown }>(),
);

const signUp = createAction(
    '[Auth] signUp',
    props<{ params: AuthSignUpParams }>(),
);
const signUpSuccess = createAction('[Auth] signUpSuccess');
const signUpError = createAction(
    '[Auth] signUpError',
    props<{ error: unknown }>(),
);

const signOut = createAction('[Auth] signOut');
const signOutSuccess = createAction('[Auth] signOutSuccess');
const signOutError = createAction(
    '[Auth] signOutError',
    props<{ error: unknown }>(),
);

export const AuthActions = {
    signIn,
    signInSuccess,
    signInError,
    signUp,
    signUpSuccess,
    signUpError,
    signOut,
    signOutSuccess,
    signOutError,
};
