import { createAction, props } from '@ngrx/store';

export interface AuthLoginActionParams {
    email: string;
    password: string;
}

export interface AuthSignUpActionParams {
    email: string;
    password: string;
}

const signIn = createAction(
    '[Auth] login',
    props<{ params: AuthLoginActionParams }>(),
);
const signInSuccess = createAction(
    '[Auth] loginSuccess',
    props<{ success: true }>(),
);
const signInError = createAction(
    '[Auth] loginError',
    props<{ error: unknown }>(),
);

const signUp = createAction(
    '[Auth] signUp',
    props<{ params: AuthSignUpActionParams }>(),
);
const signUpSuccess = createAction(
    '[Auth] signUpSuccess',
    props<{ success: true }>(),
);
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
