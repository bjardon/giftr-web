/* eslint-disable @ngrx/prefix-selectors-with-select */
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { participantsAdapter, ParticipantsState } from './gift-exchanges.state';

const selectParticipants =
    createFeatureSelector<ParticipantsState>('participants');

const { selectIds, selectEntities, selectAll, selectTotal } =
    participantsAdapter.getSelectors();

const ids = createSelector(selectParticipants, selectIds);
const entities = createSelector(selectParticipants, selectEntities);
const all = createSelector(selectParticipants, selectAll);
const total = createSelector(selectParticipants, selectTotal);
const busy = createSelector(selectParticipants, (state) => state.busy);
const error = createSelector(selectParticipants, (state) => state.error);
const self = createSelector(selectParticipants, (state) => state.self);
const giftee = createSelector(selectParticipants, (state) => state.giftee);

export const ParticipantsSelectors = {
    ids,
    entities,
    all,
    total,
    busy,
    error,
    self,
    giftee,
};
