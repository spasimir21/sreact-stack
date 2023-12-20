import { RequestrRequest } from './request';

const endpoint = <TParams, TResult, TConfig = any>(endpointConfig: RequestrRequest<TParams, TResult, TConfig>) =>
  endpointConfig;

export { endpoint };
