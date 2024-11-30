import { Component, inject } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { Store } from '@ngrx/store';
import { LetDirective } from '@ngrx/component';
import { Observable } from 'rxjs';
import { AuthActions, AuthSelectors } from '../../store';

@Component({
    standalone: true,
    imports: [RouterModule, ReactiveFormsModule, LetDirective],
    templateUrl: './sign-up.page.html',
})
export class SignUpPage {
    private readonly store: Store = inject(Store);

    readonly busy$: Observable<boolean> = this.store.select(AuthSelectors.busy);
    readonly error$: Observable<unknown | null> = this.store.select(
        AuthSelectors.error,
    );

    readonly form = new FormGroup({
        email: new FormControl<string | null>(null),
        password: new FormControl<string | null>(null),
        acceptTos: new FormControl<boolean>(false),
    });

    submit(): void {
        const { email, password, acceptTos } = this.form.value;
        if (!email || !password || !acceptTos) return;

        const params = { email, password };
        this.store.dispatch(AuthActions.signUp({ params }));
    }
}
