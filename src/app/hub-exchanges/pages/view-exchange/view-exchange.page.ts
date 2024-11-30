import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LetDirective } from '@ngrx/component';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import {
    GiftExchangeEntity,
    ParticipantEntity,
    WishListItemEntity,
} from '../../../gift-exchanges/entities';
import {
    GiftExchangesSelectors,
    ParticipantsActions,
    ParticipantsSelectors,
    WishListItemsActions,
} from '../../../gift-exchanges/store';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { WishListItemsSelectors } from '../../../gift-exchanges/store/wish-list-items.selectors';

@Component({
    standalone: true,
    imports: [CommonModule, ReactiveFormsModule, LetDirective],
    templateUrl: './view-exchange.page.html',
})
export class ViewExchangePage {
    private readonly store: Store = inject(Store);

    readonly exchange$: Observable<GiftExchangeEntity | null> =
        this.store.select(GiftExchangesSelectors.current);

    readonly participants$: Observable<ParticipantEntity[]> = this.store.select(
        ParticipantsSelectors.all,
    );
    readonly self$: Observable<ParticipantEntity | null> = this.store.select(
        ParticipantsSelectors.self,
    );
    readonly wishListItems$: Observable<WishListItemEntity[]> =
        this.store.select(WishListItemsSelectors.all);

    readonly wishListForm = new FormGroup({
        name: new FormControl<string | null>(null),
        linkOrStore: new FormControl<string | null>(null),
    });

    showGiftee = false;

    acknowledge(exchangeId: string): void {
        this.store.dispatch(
            ParticipantsActions.acknowledgeSelf({ exchangeId }),
        );
    }

    addToWishList(participantId: string): void {
        const { name, linkOrStore } = this.wishListForm.value;

        if (!name || !linkOrStore) return;

        const data = { name, linkOrStore };
        this.store.dispatch(
            WishListItemsActions.create({ participantId, data }),
        );

        this.wishListForm.reset();
    }

    removeFromWishList(wishListItemId: string): void {
        this.store.dispatch(WishListItemsActions.remove({ wishListItemId }));
    }

    isLink(s: string): boolean {
        return /(?:https?):\/\/(\w+:?\w*)?(\S+)(:\d+)?(\/|\/([\w#!:.?+=&%!\-/]))?/.test(
            s,
        );
    }
}
