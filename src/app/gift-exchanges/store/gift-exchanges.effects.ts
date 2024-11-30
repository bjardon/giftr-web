import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { GiftExchangesService, ParticipantsService } from '../services';
import { GiftExchangesActions } from './gift-exchanges.actions';
import { catchError, map, of, switchMap } from 'rxjs';
import { ParticipantsActions } from './participants.actions';
import { WishListItemsActions } from './wish-list-items.actions';

@Injectable()
export class GiftExchangesEffects {
    private readonly actions$: Actions = inject(Actions);
    private readonly giftExchanges: GiftExchangesService =
        inject(GiftExchangesService);
    private readonly participants: ParticipantsService =
        inject(ParticipantsService);

    fetchParticipating$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(GiftExchangesActions.fetchParticipating),
            switchMap(() =>
                this.giftExchanges.fetchParticipating().pipe(
                    map((exchanges) =>
                        GiftExchangesActions.fetchParticipatingSuccess({
                            exchanges,
                        }),
                    ),
                    catchError((error) =>
                        of(
                            GiftExchangesActions.fetchParticipatingError({
                                error,
                            }),
                        ),
                    ),
                ),
            ),
        );
    });

    fetchParticipants$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(ParticipantsActions.fetch),
            switchMap(({ exchangeId }) =>
                this.giftExchanges.fetchParticipants(exchangeId).pipe(
                    map((participants) =>
                        ParticipantsActions.fetchSuccess({ participants }),
                    ),
                    catchError((error) =>
                        of(ParticipantsActions.fetchError({ error })),
                    ),
                ),
            ),
        );
    });

    acknowledgeSelf$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(ParticipantsActions.acknowledgeSelf),
            switchMap(({ exchangeId }) =>
                this.giftExchanges.acknowledgeSelf(exchangeId).pipe(
                    map((participant) =>
                        ParticipantsActions.fetchSelf({
                            exchangeId: participant._exchange,
                        }),
                    ),
                    catchError((error) =>
                        of(ParticipantsActions.acknowledgeSelfError({ error })),
                    ),
                ),
            ),
        );
    });

    fetchSelfParticipant$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(ParticipantsActions.fetchSelf),
            switchMap(({ exchangeId }) =>
                this.giftExchanges.fetchSelfParticipant(exchangeId).pipe(
                    map((participant) =>
                        ParticipantsActions.fetchSelfSuccess({ participant }),
                    ),
                    catchError((error) =>
                        of(ParticipantsActions.fetchSelfError({ error })),
                    ),
                ),
            ),
        );
    });

    fetchWishListItems$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(WishListItemsActions.fetch),
            switchMap(({ participantId }) =>
                this.participants.fetchWishListItems(participantId).pipe(
                    map((wishListItems) =>
                        WishListItemsActions.fetchSuccess({ wishListItems }),
                    ),
                    catchError((error) =>
                        of(WishListItemsActions.fetchError({ error })),
                    ),
                ),
            ),
        );
    });

    createWishListItem$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(WishListItemsActions.create),
            switchMap(({ participantId, data }) =>
                this.participants.createWishListItem(participantId, data).pipe(
                    map((wishListItem) =>
                        WishListItemsActions.createSuccess({ wishListItem }),
                    ),
                    catchError((error) =>
                        of(WishListItemsActions.createError({ error })),
                    ),
                ),
            ),
        );
    });

    deleteWishListItem$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(WishListItemsActions.remove),
            switchMap(({ wishListItemId }) =>
                this.participants.deleteWishListItem(wishListItemId).pipe(
                    map((wishListItem) =>
                        WishListItemsActions.removeSuccess({ wishListItem }),
                    ),
                    catchError((error) =>
                        of(WishListItemsActions.removeError({ error })),
                    ),
                ),
            ),
        );
    });

    fetchRelatedOnSelect$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(GiftExchangesActions.selectExchange),
            switchMap(({ exchangeId }) =>
                of(
                    ParticipantsActions.fetch({ exchangeId }),
                    ParticipantsActions.fetchSelf({ exchangeId }),
                ),
            ),
        );
    });

    fetchWishListOnSelfFetch$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(ParticipantsActions.fetchSelfSuccess),
            map(({ participant }) =>
                WishListItemsActions.fetch({ participantId: participant._id }),
            ),
        );
    });
}
