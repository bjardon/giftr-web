import { createReducer, on } from '@ngrx/store';
import { userInitialState, UserState } from './user.state';
import { UserActions } from './user.actions';

export const UserReducer = createReducer(
    userInitialState(),
    on(
        UserActions.fetchUser,
        (state): UserState => ({
            ...state,
            busy: true,
        }),
    ),
    on(
        UserActions.fetchUserError,
        (state, { error }): UserState => ({
            ...state,
            busy: false,
            error,
        }),
    ),
    on(
        UserActions.fetchUserSuccess,
        (state, { user }): UserState => ({
            ...state,
            busy: false,
            error: null,
            user,
        }),
    ),
    on(
        UserActions.patchUser,
        (state): UserState => ({
            ...state,
            busy: true,
        }),
    ),
    on(
        UserActions.patchUserError,
        (state, { error }): UserState => ({
            ...state,
            busy: false,
            error,
        }),
    ),
    on(
        UserActions.patchUserSuccess,
        (state, { user }): UserState => ({
            ...state,
            busy: false,
            error: null,
            user,
        }),
    ),
);
