import { createReducer, on } from '@ngrx/store';
import {
    giftExchangesAdapter,
    giftExchangesInitialState,
    GiftExchangesState,
    participantsAdapter,
    participantsInitialState,
    ParticipantsState,
    wishListItemsAdapter,
    wishListItemsInitialState,
    WishListItemsState,
} from './gift-exchanges.state';
import { GiftExchangesActions } from './gift-exchanges.actions';
import { ParticipantsActions } from './participants.actions';
import { WishListItemsActions } from './wish-list-items.actions';

export const GiftExchangesReducer = createReducer(
    giftExchangesInitialState(),
    on(
        GiftExchangesActions.fetchParticipating,
        (state): GiftExchangesState => ({
            ...state,
            busy: true,
        }),
    ),
    on(
        GiftExchangesActions.fetchParticipatingError,
        (state, { error }): GiftExchangesState => ({
            ...state,
            busy: false,
            error,
        }),
    ),
    on(
        GiftExchangesActions.fetchParticipatingSuccess,
        (state, { exchanges }): GiftExchangesState =>
            giftExchangesAdapter.setAll(exchanges, {
                ...state,
                busy: false,
                error: null,
            }),
    ),
    on(
        GiftExchangesActions.selectExchange,
        (state, { exchangeId }): GiftExchangesState => ({
            ...state,
            currentExchangeId: exchangeId,
        }),
    ),
);

export const ParticipantsReducer = createReducer(
    participantsInitialState(),
    on(
        ParticipantsActions.fetch,
        (state): ParticipantsState => ({
            ...state,
            busy: true,
        }),
    ),
    on(
        ParticipantsActions.fetchError,
        (state, { error }): ParticipantsState => ({
            ...state,
            busy: false,
            error,
        }),
    ),
    on(
        ParticipantsActions.fetchSuccess,
        (state, { participants }): ParticipantsState =>
            participantsAdapter.setAll(participants, {
                ...state,
                busy: false,
                error: null,
            }),
    ),
    on(
        ParticipantsActions.fetchSelf,
        (state): ParticipantsState => ({
            ...state,
            busy: true,
        }),
    ),
    on(
        ParticipantsActions.fetchSelfError,
        (state, { error }): ParticipantsState => ({
            ...state,
            busy: false,
            error,
        }),
    ),
    on(
        ParticipantsActions.fetchSelfSuccess,
        (state, { self }): ParticipantsState => ({
            ...state,
            busy: false,
            error: null,
            self,
        }),
    ),
    on(
        ParticipantsActions.fetchOwnGiftee,
        (state): ParticipantsState => ({
            ...state,
            busy: true,
        }),
    ),
    on(
        ParticipantsActions.fetchOwnGifteeError,
        (state, { error }): ParticipantsState => ({
            ...state,
            busy: false,
            error,
        }),
    ),
    on(
        ParticipantsActions.fetchOwnGifteeSuccess,
        (state, { giftee }): ParticipantsState => ({
            ...state,
            busy: false,
            error: null,
            giftee,
        }),
    ),
    on(
        ParticipantsActions.patchSelf,
        (state): ParticipantsState => ({
            ...state,
            busy: true,
        }),
    ),
    on(
        ParticipantsActions.patchSelfError,
        (state, { error }): ParticipantsState => ({
            ...state,
            busy: false,
            error,
        }),
    ),
    on(
        ParticipantsActions.patchSelfSuccess,
        (state, { participant }): ParticipantsState => ({
            ...state,
            busy: false,
            error: null,
            self: participant,
        }),
    ),
    on(
        ParticipantsActions.acknowledgeSelf,
        (state): ParticipantsState => ({
            ...state,
            busy: true,
        }),
    ),
    on(
        ParticipantsActions.acknowledgeSelfError,
        (state, { error }): ParticipantsState => ({
            ...state,
            busy: false,
            error,
        }),
    ),
    on(
        ParticipantsActions.acknowledgeSelfSuccess,
        (state, { participant }): ParticipantsState =>
            participantsAdapter.setOne(participant, {
                ...state,
                busy: false,
                error: null,
            }),
    ),
);

export const WishListItemsReducer = createReducer(
    wishListItemsInitialState(),
    on(
        WishListItemsActions.fetch,
        (state): WishListItemsState => ({
            ...state,
            busy: true,
        }),
    ),
    on(
        WishListItemsActions.fetchError,
        (state, { error }): WishListItemsState => ({
            ...state,
            busy: false,
            error,
        }),
    ),
    on(WishListItemsActions.fetchSuccess, (state, { wishListItems }) =>
        wishListItemsAdapter.setAll(wishListItems, {
            ...state,
            busy: false,
            error: null,
        }),
    ),
    on(
        WishListItemsActions.create,
        (state): WishListItemsState => ({
            ...state,
            busy: true,
        }),
    ),
    on(
        WishListItemsActions.createError,
        (state, { error }): WishListItemsState => ({
            ...state,
            busy: false,
            error,
        }),
    ),
    on(
        WishListItemsActions.createSuccess,
        (state, { wishListItem }): WishListItemsState =>
            wishListItemsAdapter.setOne(wishListItem, {
                ...state,
                busy: false,
                error: null,
            }),
    ),
    on(
        WishListItemsActions.remove,
        (state): WishListItemsState => ({
            ...state,
            busy: true,
        }),
    ),
    on(
        WishListItemsActions.removeError,
        (state, { error }): WishListItemsState => ({
            ...state,
            busy: false,
            error,
        }),
    ),
    on(
        WishListItemsActions.removeSuccess,
        (state, { wishListItem }): WishListItemsState =>
            wishListItemsAdapter.removeOne(wishListItem._id, {
                ...state,
                busy: false,
                error: null,
            }),
    ),
);
