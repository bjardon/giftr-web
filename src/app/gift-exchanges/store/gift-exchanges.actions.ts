import { createAction, props } from '@ngrx/store';
import { GiftExchangeEntity } from '../entities';

// const fetchOwn = createAction('[GiftExchanges] fetchOwn');
// const fetchOwnSuccess = createAction(
//     '[GiftExchanges] fetchOwnSuccess',
//     props<{ exchanges: GiftExchangeEntity[] }>(),
// );
// const fetchOwnError = createAction(
//     '[GiftExchanges] fetchOwnError',
//     props<{ error: unknown }>(),
// );

const fetchParticipating = createAction('[GiftExchanges] fetchParticipating');
const fetchParticipatingSuccess = createAction(
    '[GiftExchanges] fetchParticipatingSuccess',
    props<{ exchanges: GiftExchangeEntity[] }>(),
);
const fetchParticipatingError = createAction(
    '[GiftExchanges] fetchParticipatingError',
    props<{ error: unknown }>(),
);

const selectExchange = createAction(
    '[GiftExchanges] selectExchange',
    props<{ exchangeId: string }>(),
);

export const GiftExchangesActions = {
    // fetchOwn,
    // fetchOwnSuccess,
    // fetchOwnError,
    fetchParticipating,
    fetchParticipatingSuccess,
    fetchParticipatingError,
    selectExchange,
};
