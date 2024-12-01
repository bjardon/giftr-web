import { createAction, props } from '@ngrx/store';
import { ParticipantEntity } from '../entities';
import { UpdateParticipantDto } from '../dtos';

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
    props<{ self: ParticipantEntity }>(),
);
const fetchSelfError = createAction(
    '[Participants] fetchSelfError',
    props<{ error: unknown }>(),
);

const fetchOwnGiftee = createAction(
    '[Participants] fetchOwnGiftee',
    props<{ exchangeId: string }>(),
);
const fetchOwnGifteeSuccess = createAction(
    '[Participants] fetchOwnGifteeSuccess',
    props<{ giftee: ParticipantEntity }>(),
);
const fetchOwnGifteeError = createAction(
    '[Participants] fetchSelfError',
    props<{ error: unknown }>(),
);

const patchSelf = createAction(
    '[Participants] patchSelf',
    props<{ participantId: string; data: UpdateParticipantDto }>(),
);
const patchSelfSuccess = createAction(
    '[Participants] patchSelfSuccess',
    props<{ participant: ParticipantEntity }>(),
);
const patchSelfError = createAction(
    '[Participants] patchSelfError',
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
    fetchOwnGiftee,
    fetchOwnGifteeSuccess,
    fetchOwnGifteeError,
    patchSelf,
    patchSelfSuccess,
    patchSelfError,
    acknowledgeSelf,
    acknowledgeSelfSuccess,
    acknowledgeSelfError,
};
