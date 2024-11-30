/* eslint-disable @ngrx/prefix-selectors-with-select */
import { createFeatureSelector, createSelector } from '@ngrx/store';
import {
    wishListItemsAdapter,
    WishListItemsState,
} from './gift-exchanges.state';

const selectWishListItems =
    createFeatureSelector<WishListItemsState>('wishListItems');

const { selectIds, selectEntities, selectAll, selectTotal } =
    wishListItemsAdapter.getSelectors();

const ids = createSelector(selectWishListItems, selectIds);
const entities = createSelector(selectWishListItems, selectEntities);
const all = createSelector(selectWishListItems, selectAll);
const total = createSelector(selectWishListItems, selectTotal);
const busy = createSelector(selectWishListItems, (state) => state.busy);
const error = createSelector(selectWishListItems, (state) => state.error);

export const WishListItemsSelectors = {
    ids,
    entities,
    all,
    total,
    busy,
    error,
};
