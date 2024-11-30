import { UserEntity } from '../entities';

export interface UserState {
    user: UserEntity | null;
    error: unknown | null;
    busy: boolean;
}

export const userInitialState = (): UserState => ({
    user: null,
    error: null,
    busy: false,
});
