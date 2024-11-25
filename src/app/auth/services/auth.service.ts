import { inject, Injectable } from '@angular/core';
import {
    Auth,
    createUserWithEmailAndPassword,
    idToken,
    signInAnonymously,
    signInWithEmailAndPassword,
    signOut,
    User,
    user,
    UserCredential,
} from '@angular/fire/auth';
import { defer, Observable } from 'rxjs';
import { authState } from '@angular/fire/auth';

@Injectable({
    providedIn: 'root',
})
export class AuthService {
    private readonly firebaseAuth: Auth = inject(Auth);

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

    signOut(): Observable<void> {
        return defer(() => signOut(this.firebaseAuth));
    }
}
