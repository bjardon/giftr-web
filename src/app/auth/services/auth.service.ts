import { inject, Injectable } from '@angular/core';
import {
    Auth,
    createUserWithEmailAndPassword,
    getIdToken,
    idToken,
    signInAnonymously,
    signInWithEmailAndPassword,
    signOut,
    User,
    user,
    UserCredential,
} from '@angular/fire/auth';
import { defer, map, Observable } from 'rxjs';
import { authState } from '@angular/fire/auth';
import { Store } from '@ngrx/store';
import { UserActions } from '../../user/store';

@Injectable({
    providedIn: 'root',
})
export class AuthService {
    private readonly firebaseAuth: Auth = inject(Auth);
    private readonly store: Store = inject(Store);

    /**
     * Observable that emits authentication changes such as a logged out or logged in state
     *
     * @type {Observable<User>}
     */
    authState$: Observable<User> = authState(this.firebaseAuth);

    /**
     * Observable that emits authentication changes such as a logged out, logged in, and token refresh state.
     * The token refresh emissions is what makes user() different from authState().
     *
     * @type {Observable<User>}
     */
    user$: Observable<User> = user(this.firebaseAuth);

    /**
     * Observable that emits the idToken refreshes. This is useful for keeping third party authentication in sync with Firebase Auth refreshes.
     *
     * @type {Observable<string | null>}
     */
    idToken$: Observable<string | null> = idToken(this.firebaseAuth);

    constructor() {
        this.authState$
            .pipe(map(() => this.store.dispatch(UserActions.fetchUser())))
            .subscribe();
    }

    signUpWithEmailAndPassword(
        email: string,
        password: string,
    ): Observable<UserCredential> {
        return defer(() =>
            createUserWithEmailAndPassword(this.firebaseAuth, email, password),
        );
    }

    signInWithEmailAndPassword(
        email: string,
        password: string,
    ): Observable<UserCredential> {
        return defer(() =>
            signInWithEmailAndPassword(this.firebaseAuth, email, password),
        );
    }

    signInAnonymously(): Observable<UserCredential> {
        return defer(() => signInAnonymously(this.firebaseAuth));
    }

    refreshToken(user: User) {
        return defer(() => getIdToken(user));
    }

    signOut(): Observable<void> {
        return defer(() => signOut(this.firebaseAuth));
    }
}
