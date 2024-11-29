import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LetDirective } from '@ngrx/component';
import { Store } from '@ngrx/store';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AuthActions } from '../../../auth/store';
import { AuthService } from '../../../auth/services';
import { UserSelectors } from '../../../user/store';

@Component({
    standalone: true,
    imports: [RouterModule, NgbModule, LetDirective],
    templateUrl: './hub.page.html',
})
export class HubPage {
    private readonly store: Store = inject(Store);
    private readonly auth: AuthService = inject(AuthService);

    readonly user$ = this.store.select(UserSelectors.user);

    signOut(): void {
        this.store.dispatch(AuthActions.signOut());
    }
}
