import { Params } from '@angular/router';
import { SerializedRouterStateSnapshot } from '@ngrx/router-store';

export const getFullParamMap = (state: SerializedRouterStateSnapshot) => {
    let currentRoute = state?.root;
    let params: Params = {};
    while (currentRoute?.firstChild) {
        currentRoute = currentRoute.firstChild;
        params = {
            ...params,
            ...currentRoute.params,
        };
    }
    return params;
};
