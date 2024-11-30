import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { routerNavigatedAction } from '@ngrx/router-store';
import { filter, map } from 'rxjs';
import { GiftExchangesActions } from './gift-exchanges.actions';
import { getFullParamMap } from '../../../utils';

@Injectable()
export class GiftExchangesRouterEffects {
    private readonly actions$ = inject(Actions);

    fetchExchangesOnNavigateToHub$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(routerNavigatedAction),
            filter(({ payload }) =>
                new RegExp(/.*\/hub.*/g).test(payload.routerState.url),
            ),
            map(() => GiftExchangesActions.fetchParticipating()),
        );
    });

    setCurrentOnNavigateToSingleView$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(routerNavigatedAction),
            filter(({ payload }) =>
                new RegExp(/.*\/hub\/exchanges\/.+(\/.)*/g).test(
                    payload.routerState.url,
                ),
            ),
            map(({ payload }) => getFullParamMap(payload.routerState)),
            // map(
            //     ({ payload }) =>
            //         payload.routerState.root.paramMap.get('exchangeId')!,
            // ),
            map(({ exchangeId }) =>
                GiftExchangesActions.selectExchange({ exchangeId }),
            ),
        );
    });
}
