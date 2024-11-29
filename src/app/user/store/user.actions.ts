import { createAction, props } from '@ngrx/store';
import { UserEntity } from '../entities';
import { PatchUserDto } from '../dtos';

const fetchUser = createAction('[User] fetchUser');
const fetchUserSuccess = createAction(
    '[User] fetchUserSuccess',
    props<{ user: UserEntity }>(),
);
const fetchUserError = createAction(
    '[User] fetchUserError',
    props<{ error: unknown }>(),
);

const patchUser = createAction(
    '[User] patchUser',
    props<{ data: PatchUserDto }>(),
);
const patchUserSuccess = createAction(
    '[User] patchUserSuccess',
    props<{ user: UserEntity }>(),
);
const patchUserError = createAction(
    '[User] patchUserError',
    props<{ error: unknown }>(),
);

export const UserActions = {
    fetchUser,
    fetchUserSuccess,
    fetchUserError,
    patchUser,
    patchUserSuccess,
    patchUserError,
};
