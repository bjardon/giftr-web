/* eslint-disable @ngrx/prefix-selectors-with-select */
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AuthState } from './auth.state';

const selectAuth = createFeatureSelector<AuthState>('auth');

const busy = createSelector(selectAuth, (state) => state.busy);
const error = createSelector(selectAuth, (state) => state.error);

export const AuthSelectors = {
    busy,
    error,
};
