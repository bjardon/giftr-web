import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [RouterOutlet],
    template: `<div
        class="min-vh-100 d-flex flex-column align-items-center justify-content-center">
        <div class="container py-5 text-center">
            <router-outlet></router-outlet>
        </div>
    </div>`,
})
export class AppComponent {}
