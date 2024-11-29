import { UserEntity } from '../entities';

export interface PatchUserDto
    extends Omit<UserEntity, '_id' | 'email' | 'firebaseId'> {}
