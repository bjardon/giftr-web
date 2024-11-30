import { createAction, props } from '@ngrx/store';
import { ParticipantEntity } from '../entities';

const fetch = createAction(
    '[Participants] fetch',
    props<{ exchangeId: string }>(),
);
const fetchSuccess = createAction(
    '[Participants] fetchSuccess',
    props<{ participants: ParticipantEntity[] }>(),
);
const fetchError = createAction(
    '[Participants] fetchError',
    props<{ error: unknown }>(),
);

const fetchSelf = createAction(
    '[Participants] fetchSelf',
    props<{ exchangeId: string }>(),
);
const fetchSelfSuccess = createAction(
    '[Participants] fetchSelfSuccess',
    props<{ participant: ParticipantEntity }>(),
);
const fetchSelfError = createAction(
    '[Participants] fetchSelfError',
    props<{ error: unknown }>(),
);

const acknowledgeSelf = createAction(
    '[Participants] acknowledgeSelf',
    props<{ exchangeId: string }>(),
);
const acknowledgeSelfSuccess = createAction(
    '[Participants] acknowledgeSelfSuccess',
    props<{ participant: ParticipantEntity }>(),
);
const acknowledgeSelfError = createAction(
    '[Participants] acknowledgeSelfError',
    props<{ error: unknown }>(),
);

export const ParticipantsActions = {
    fetch,
    fetchSuccess,
    fetchError,
    fetchSelf,
    fetchSelfSuccess,
    fetchSelfError,
    acknowledgeSelf,
    acknowledgeSelfSuccess,
    acknowledgeSelfError,
};
