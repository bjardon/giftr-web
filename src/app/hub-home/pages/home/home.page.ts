import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LetDirective } from '@ngrx/component';
import { Store } from '@ngrx/store';
import {
    GiftExchangesActions,
    GiftExchangesSelectors,
} from '../../../gift-exchanges/store';

@Component({
    standalone: true,
    imports: [CommonModule, RouterModule, LetDirective],
    templateUrl: './home.page.html',
})
export class HomePage {
    private readonly store: Store = inject(Store);

    readonly exchanges$ = this.store.select(GiftExchangesSelectors.all);
    readonly busy$ = this.store.select(GiftExchangesSelectors.busy);

    fetch() {
        this.store.dispatch(GiftExchangesActions.fetchParticipating());
    }
}
