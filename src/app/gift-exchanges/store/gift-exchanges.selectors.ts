/* eslint-disable @ngrx/prefix-selectors-with-select */
import { createFeatureSelector, createSelector } from '@ngrx/store';
import {
    giftExchangesAdapter,
    GiftExchangesState,
} from './gift-exchanges.state';

const selectGiftExchanges =
    createFeatureSelector<GiftExchangesState>('exchanges');

const { selectIds, selectEntities, selectAll, selectTotal } =
    giftExchangesAdapter.getSelectors();

const ids = createSelector(selectGiftExchanges, selectIds);
const entities = createSelector(selectGiftExchanges, selectEntities);
const all = createSelector(selectGiftExchanges, selectAll);
const total = createSelector(selectGiftExchanges, selectTotal);
const busy = createSelector(selectGiftExchanges, (state) => state.busy);
const error = createSelector(selectGiftExchanges, (state) => state.error);
const currentId = createSelector(
    selectGiftExchanges,
    (state) => state.currentExchangeId,
);
const current = createSelector(entities, currentId, (entities, id) =>
    id ? entities[id]! : null,
);

export const GiftExchangesSelectors = {
    ids,
    entities,
    all,
    total,
    busy,
    error,
    currentId,
    current,
};
