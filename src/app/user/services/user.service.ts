import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { generateApiPath } from '../../../utils';
import { UserEntity } from '../entities';
import { PatchUserDto } from '../dtos';

@Injectable({
    providedIn: 'root',
})
export class UserService {
    private readonly http: HttpClient = inject(HttpClient);

    fetchUser(): Observable<UserEntity> {
        return this.http.get<UserEntity>(generateApiPath(['users', 'self']));
    }

    patchUser(data: PatchUserDto) {
        return this.http.patch<UserEntity>(
            generateApiPath(['users', 'self']),
            data,
        );
    }
}
