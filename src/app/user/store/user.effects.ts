import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, of, switchMap } from 'rxjs';
import { UserService } from '../services';
import { UserActions } from './user.actions';

@Injectable()
export class UserEffects {
    private readonly actions$: Actions = inject(Actions);
    private readonly user: UserService = inject(UserService);

    fetchUser$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(UserActions.fetchUser),
            switchMap(() =>
                this.user.fetchUser().pipe(
                    map((user) => UserActions.fetchUserSuccess({ user })),
                    catchError((error) =>
                        of(UserActions.fetchUserError({ error })),
                    ),
                ),
            ),
        );
    });

    patchUser$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(UserActions.patchUser),
            switchMap(({ data }) =>
                this.user.patchUser(data).pipe(
                    map((user) => UserActions.patchUserSuccess({ user })),
                    catchError((error) =>
                        of(UserActions.patchUserError({ error })),
                    ),
                ),
            ),
        );
    });
}
