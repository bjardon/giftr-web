import { Component, inject } from '@angular/core';
import { LetDirective } from '@ngrx/component';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import {
    GiftExchangeEntity,
    ParticipantEntity,
} from '../../../gift-exchanges/entities';
import {
    GiftExchangesSelectors,
    ParticipantsActions,
    ParticipantsSelectors,
} from '../../../gift-exchanges/store';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
    standalone: true,
    imports: [RouterModule, CommonModule, LetDirective],
    templateUrl: './view-exchange-summary.page.html',
})
export class ViewExchangeSummaryPage {
    private readonly store: Store = inject(Store);

    readonly exchange$: Observable<GiftExchangeEntity | null> =
        this.store.select(GiftExchangesSelectors.current);

    readonly participants$: Observable<ParticipantEntity[]> = this.store.select(
        ParticipantsSelectors.all,
    );
    readonly self$: Observable<ParticipantEntity | null> = this.store.select(
        ParticipantsSelectors.self,
    );

    acknowledge(exchangeId: string): void {
        this.store.dispatch(
            ParticipantsActions.acknowledgeSelf({ exchangeId }),
        );
    }
}
