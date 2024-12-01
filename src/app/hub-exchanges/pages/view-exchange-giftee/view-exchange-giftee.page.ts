import { Component, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { ParticipantEntity } from '../../../gift-exchanges/entities';
import { Store } from '@ngrx/store';
import { ParticipantsSelectors } from '../../../gift-exchanges/store';
import { LetDirective } from '@ngrx/component';
import { CommonModule } from '@angular/common';

@Component({
    standalone: true,
    imports: [CommonModule, LetDirective],
    templateUrl: './view-exchange-giftee.page.html',
})
export class ViewExchangeGifteePage {
    private readonly store: Store = inject(Store);

    readonly giftee$: Observable<ParticipantEntity | null> = this.store.select(
        ParticipantsSelectors.giftee,
    );
    readonly self$: Observable<ParticipantEntity | null> = this.store.select(
        ParticipantsSelectors.self,
    );

    isLink(s: string): boolean {
        return /(?:https?):\/\/(\w+:?\w*)?(\S+)(:\d+)?(\/|\/([\w#!:.?+=&%!\-/]))?/.test(
            s,
        );
    }
}
