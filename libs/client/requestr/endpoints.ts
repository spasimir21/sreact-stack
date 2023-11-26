import { RequestrRequest } from './request';
import { combine } from './combine';

const $IS_ENDPOINTS = Symbol('$IS_ENDPOINTS');

const combineTwo = (a: any, b: any) => {
  if (a != null && b != null) return combine(a, b);
  return b ?? a;
};

function endpoints<T>(base: RequestrRequest, requests: T): T {
  const newRequests: any = { [$IS_ENDPOINTS]: true };

  for (const key in requests) {
    const request = requests[key] as any;

    if (request[$IS_ENDPOINTS]) {
      newRequests[key] = endpoints(base, request);
      continue;
    }

    newRequests[key] = {
      request: combineTwo(base.request, request.request),
      executor: request.executor ?? base.executor,
      response: combineTwo(base.response, request.response)
    };
  }

  return newRequests;
}

export { endpoints };
