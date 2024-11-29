/* eslint-disable @ngrx/prefix-selectors-with-select */
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { UserState } from './user.state';

const selectUser = createFeatureSelector<UserState>('user');

const user = createSelector(selectUser, (state) => state.user);
const busy = createSelector(selectUser, (state) => state.busy);
const error = createSelector(selectUser, (state) => state.error);

export const UserSelectors = {
    user,
    busy,
    error,
};
