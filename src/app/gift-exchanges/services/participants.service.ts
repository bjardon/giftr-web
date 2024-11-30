import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { WishListItemEntity } from '../entities';
import { generateApiPath } from '../../../utils';
import { CreateWishListItemDto } from '../dtos';

@Injectable({
    providedIn: 'root',
})
export class ParticipantsService {
    private readonly http = inject(HttpClient);

    fetchWishListItems(
        participantId: string,
    ): Observable<WishListItemEntity[]> {
        return this.http.get<WishListItemEntity[]>(
            generateApiPath(['participants', participantId, 'wish-list-items']),
        );
    }

    createWishListItem(
        participantId: string,
        data: CreateWishListItemDto,
    ): Observable<WishListItemEntity> {
        return this.http.post<WishListItemEntity>(
            generateApiPath(['participants', participantId, 'wish-list-items']),
            data,
        );
    }

    deleteWishListItem(wishListItemId: string): Observable<WishListItemEntity> {
        return this.http.delete<WishListItemEntity>(
            generateApiPath(['wish-list-items', wishListItemId]),
        );
    }
}
