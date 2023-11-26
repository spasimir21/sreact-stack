import { fetchExecutor } from './fetchExecutor';

interface RequestrRequest<TParams = any, TResult = any> {
  request?: (request: any, params: TParams) => any;
  executor?: (input: any) => any;
  response?: (result: any) => TResult | Promise<TResult>;
}

async function sendRequest<TParams, TResult>(req: RequestrRequest<TParams, TResult>, params: TParams) {
  const executorInput = req.request ? await req.request(null, params) : params;

  const executor = req.executor ?? fetchExecutor;

  const executorResult = await executor(executorInput);

  if (req.response == null) return executorResult as TResult;

  return await req.response(executorResult);
}

export { sendRequest, RequestrRequest };
