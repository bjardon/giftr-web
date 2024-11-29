import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LetDirective } from '@ngrx/component';
import { Store } from '@ngrx/store';
import { AuthActions } from '../../../auth/store';
import { UserSelectors } from '../../../user/store';

@Component({
    standalone: true,
    imports: [RouterModule, LetDirective],
    templateUrl: './view-profile.page.html',
})
export class ViewProfilePage {
    private readonly store: Store = inject(Store);

    readonly user$ = this.store.select(UserSelectors.user);

    signOut(): void {
        this.store.dispatch(AuthActions.signOut());
    }
}
