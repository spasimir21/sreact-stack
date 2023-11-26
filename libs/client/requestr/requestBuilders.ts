import { FetchExecutorInput } from './fetchExecutor';

const fetchInit = () => {
  const request = {
    url: new URL(window.location.href),
    options: {
      headers: {}
    }
  };

  request.url.pathname = '/';

  return request;
};

const method = (method: string) => (request: FetchExecutorInput) => {
  request.options.method = method;
  return request;
};

const post = method('POST');
const get = method('GET');

const jsonBody = (request: FetchExecutorInput, params: any) => {
  request.options.body = JSON.stringify(params);
  (request.options.headers as any)['Content-Type'] = 'application/json';
  return request;
};

const service = (service: string) => (request: FetchExecutorInput) => {
  request.url.host = `${service}.${request.url.host}`;
  return request;
};

const path = (path: string) => {
  if (path.startsWith('/')) path = path.slice(1);

  return (request: FetchExecutorInput) => {
    if (!request.url.pathname.endsWith('/')) request.url.pathname += '/';
    request.url.pathname += path;
    return request;
  };
};

export { fetchInit, method, post, get, jsonBody, service, path };
