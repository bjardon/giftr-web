import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Store } from '@ngrx/store';
import { UserActions, UserSelectors } from '../../../user/store';
import { Observable } from 'rxjs';
import { RouterModule } from '@angular/router';
import { LetDirective } from '@ngrx/component';

@Component({
    standalone: true,
    imports: [RouterModule, ReactiveFormsModule, LetDirective],
    templateUrl: './update-profile.page.html',
})
export class UpdateProfilePage {
    private readonly store: Store = inject(Store);

    readonly busy$: Observable<boolean> = this.store.select(UserSelectors.busy);
    readonly error$: Observable<unknown | null> = this.store.select(
        UserSelectors.error,
    );

    readonly form: FormGroup = new FormGroup({
        name: new FormControl<string | null>(null),
    });

    submit(): void {
        const { name } = this.form.value;

        if (!name) return;

        const data = { name };
        this.store.dispatch(UserActions.patchUser({ data }));
    }
}
