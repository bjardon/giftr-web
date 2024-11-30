import { WishListItemEntity } from '../entities';

export interface CreateWishListItemDto
    extends Omit<WishListItemEntity, '_id'> {}
