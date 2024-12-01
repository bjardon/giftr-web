import { Component, inject } from '@angular/core';
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
import { WishListItemsSelectors } from '../../../gift-exchanges/store/wish-list-items.selectors';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { LetDirective } from '@ngrx/component';

@Component({
    standalone: true,
    imports: [CommonModule, ReactiveFormsModule, LetDirective],
    templateUrl: './view-exchange-self.page.html',
})
export class ViewExchangeSelfPage {
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
    readonly wishListItemsCount$: Observable<number> = this.store.select(
        WishListItemsSelectors.total,
    );

    readonly addressForm = new FormGroup({
        address: new FormControl<string | null>(null),
    });
    readonly wishListForm = new FormGroup({
        name: new FormControl<string | null>(null),
        linkOrStore: new FormControl<string | null>(null),
    });

    showGiftee = false;
    editAddress = false;

    updateAddress(participantId: string): void {
        const { address } = this.addressForm.value;

        if (!address) return;

        const data = { address };
        this.store.dispatch(
            ParticipantsActions.patchSelf({ participantId, data }),
        );

        this.editAddress = false;
        this.addressForm.reset();
    }

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
