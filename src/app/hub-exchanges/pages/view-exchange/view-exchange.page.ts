import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LetDirective } from '@ngrx/component';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { GiftExchangeEntity } from '../../../gift-exchanges/entities';
import { GiftExchangesSelectors } from '../../../gift-exchanges/store';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
    standalone: true,
    imports: [CommonModule, RouterModule, ReactiveFormsModule, LetDirective],
    templateUrl: './view-exchange.page.html',
})
export class ViewExchangePage {
    private readonly store: Store = inject(Store);

    readonly exchange$: Observable<GiftExchangeEntity | null> =
        this.store.select(GiftExchangesSelectors.current);
}
