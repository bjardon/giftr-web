import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ParticipantEntity, WishListItemEntity } from '../entities';
import { generateApiPath } from '../../../utils';
import { CreateWishListItemDto, UpdateParticipantDto } from '../dtos';

@Injectable({
    providedIn: 'root',
})
export class ParticipantsService {
    private readonly http = inject(HttpClient);

    patchSelf(
        participantId: string,
        data: UpdateParticipantDto,
    ): Observable<ParticipantEntity> {
        return this.http.patch<ParticipantEntity>(
            generateApiPath([
                'gift-exchanges-api',
                'participants',
                participantId,
            ]),
            data,
        );
    }

    fetchWishListItems(
        participantId: string,
    ): Observable<WishListItemEntity[]> {
        return this.http.get<WishListItemEntity[]>(
            generateApiPath([
                'gift-exchanges-api',
                'participants',
                participantId,
                'wish-list-items',
            ]),
        );
    }

    createWishListItem(
        participantId: string,
        data: CreateWishListItemDto,
    ): Observable<WishListItemEntity> {
        return this.http.post<WishListItemEntity>(
            generateApiPath([
                'gift-exchanges-api',
                'participants',
                participantId,
                'wish-list-items',
            ]),
            data,
        );
    }

    deleteWishListItem(wishListItemId: string): Observable<WishListItemEntity> {
        return this.http.delete<WishListItemEntity>(
            generateApiPath([
                'gift-exchanges-api',
                'wish-list-items',
                wishListItemId,
            ]),
        );
    }
}
