import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GiftExchangeEntity, ParticipantEntity } from '../entities';
import { generateApiPath } from '../../../utils';

@Injectable({
    providedIn: 'root',
})
export class GiftExchangesService {
    private readonly http = inject(HttpClient);

    fetchOwn(): Observable<GiftExchangeEntity[]> {
        return this.http.get<GiftExchangeEntity[]>(
            generateApiPath(['gift-exchanges', 'own']),
        );
    }

    fetchParticipating(): Observable<GiftExchangeEntity[]> {
        return this.http.get<GiftExchangeEntity[]>(
            generateApiPath(['gift-exchanges', 'participating']),
        );
    }

    fetchParticipants(exchangeId: string): Observable<ParticipantEntity[]> {
        return this.http.get<ParticipantEntity[]>(
            generateApiPath(['gift-exchanges', exchangeId, 'participants']),
        );
    }

    fetchSelfParticipant(exchangeId: string): Observable<ParticipantEntity> {
        return this.http.get<ParticipantEntity>(
            generateApiPath([
                'gift-exchanges',
                exchangeId,
                'participants',
                'self',
            ]),
        );
    }

    fetchOwnGiftee(exchangeId: string): Observable<ParticipantEntity> {
        return this.http.get<ParticipantEntity>(
            generateApiPath([
                'gift-exchanges',
                exchangeId,
                'participants',
                'giftee',
            ]),
        );
    }

    acknowledgeSelf(exchangeId: string): Observable<ParticipantEntity> {
        return this.http.patch<ParticipantEntity>(
            generateApiPath([
                'gift-exchanges',
                exchangeId,
                'participants',
                'acknowledge',
                'self',
            ]),
            null,
        );
    }
}
