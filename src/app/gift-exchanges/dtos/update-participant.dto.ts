import { ParticipantEntity } from '../entities';

export interface UpdateParticipantDto
    extends Pick<ParticipantEntity, 'address'> {}
