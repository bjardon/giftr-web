import { environment } from '../environments/environment';

export const generateApiPath = (segments: string[] = []) =>
    [environment.apiUrl, ...segments].join('/');
