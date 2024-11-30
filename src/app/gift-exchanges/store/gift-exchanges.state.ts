import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import {
    GiftExchangeEntity,
    ParticipantEntity,
    WishListItemEntity,
} from '../entities';

export interface GiftExchangesState extends EntityState<GiftExchangeEntity> {
    currentExchangeId: string | null;
    busy: boolean;
    error: unknown | null;
}

export const giftExchangesAdapter: EntityAdapter<GiftExchangeEntity> =
    createEntityAdapter<GiftExchangeEntity>({
        selectId: (entity: GiftExchangeEntity) => entity._id,
    });

export const giftExchangesInitialState = (): GiftExchangesState =>
    giftExchangesAdapter.getInitialState({
        currentExchangeId: null,
        busy: false,
        error: null,
    });

export interface ParticipantsState extends EntityState<ParticipantEntity> {
    self: ParticipantEntity | null;
    busy: boolean;
    error: unknown | null;
}

export const participantsAdapter: EntityAdapter<ParticipantEntity> =
    createEntityAdapter<ParticipantEntity>({
        selectId: (entity: ParticipantEntity) => entity._id,
    });

export const participantsInitialState = (): ParticipantsState =>
    participantsAdapter.getInitialState({
        self: null,
        busy: false,
        error: null,
    });

export interface WishListItemsState extends EntityState<WishListItemEntity> {
    busy: boolean;
    error: unknown | null;
}

export const wishListItemsAdapter: EntityAdapter<WishListItemEntity> =
    createEntityAdapter<WishListItemEntity>({
        selectId: (entity: WishListItemEntity) => entity._id,
    });

export const wishListItemsInitialState = (): WishListItemsState =>
    wishListItemsAdapter.getInitialState({
        busy: false,
        error: null,
    });
