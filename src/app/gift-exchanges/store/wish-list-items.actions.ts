import { createAction, props } from '@ngrx/store';
import { CreateWishListItemDto } from '../dtos';
import { WishListItemEntity } from '../entities';

const fetch = createAction(
    '[WishListItems] fetch',
    props<{ participantId: string }>(),
);
const fetchSuccess = createAction(
    '[WishListItems] fetchSuccess',
    props<{ wishListItems: WishListItemEntity[] }>(),
);
const fetchError = createAction(
    '[WishListItems] fetchError',
    props<{ error: unknown }>(),
);

const create = createAction(
    '[WishListItems] create',
    props<{ participantId: string; data: CreateWishListItemDto }>(),
);
const createSuccess = createAction(
    '[WishListItems] createSuccess',
    props<{ wishListItem: WishListItemEntity }>(),
);
const createError = createAction(
    '[WishListItems] createError',
    props<{ error: unknown }>(),
);

const remove = createAction(
    '[WishListItems] remove',
    props<{ wishListItemId: string }>(),
);
const removeSuccess = createAction(
    '[WishListItems] removeSuccess',
    props<{ wishListItem: WishListItemEntity }>(),
);
const removeError = createAction(
    '[WishListItems] removeError',
    props<{ error: unknown }>(),
);

export const WishListItemsActions = {
    fetch,
    fetchSuccess,
    fetchError,
    create,
    createSuccess,
    createError,
    remove,
    removeSuccess,
    removeError,
};
