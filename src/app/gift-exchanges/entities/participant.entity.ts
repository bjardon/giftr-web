import { UserEntity } from '../../user/entities';
import { GiftExchangeEntity } from './gift-exchange.entity';
import { WishListItemEntity } from './wish-list-item.entity';

export interface ParticipantEntity {
    _id: string;
    addedOn: string;
    acknowledgedOn: string;
    exchange: GiftExchangeEntity;
    user: UserEntity;
    giftee: ParticipantEntity;
    wishList: WishListItemEntity[];
    _exchange: string;
}
