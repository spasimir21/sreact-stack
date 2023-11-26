import { RequestrRequest } from './request';

const endpoint = <TParams, TResult>(endpointConfig: RequestrRequest<TParams, TResult>) => endpointConfig;

export { endpoint };
