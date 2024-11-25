export interface AuthState {
    error: unknown | null;
    busy: boolean;
}

export const authInitialState = (): AuthState => ({
    error: null,
    busy: false,
});
