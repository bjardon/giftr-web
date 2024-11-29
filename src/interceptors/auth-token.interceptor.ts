import { HttpEvent, HttpHandlerFn, HttpRequest } from '@angular/common/http';
import { Observable, switchMap } from 'rxjs';
import { AuthService } from '../app/auth/services';
import { inject } from '@angular/core';

export function authTokenInterceptor(
    req: HttpRequest<unknown>,
    next: HttpHandlerFn,
): Observable<HttpEvent<unknown>> {
    const auth: AuthService = inject(AuthService);

    return auth.idToken$.pipe(
        switchMap((token) =>
            next(
                req.clone({
                    headers: req.headers.append(
                        'Authorization',
                        `Bearer ${token}`,
                    ),
                }),
            ),
        ),
    );
}
