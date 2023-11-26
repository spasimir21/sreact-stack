import { RequestrRequest, sendRequest } from './request';
import { useCallback, useEffect, useState } from 'react';

interface UseRequestConfig<TParams, TResult> {
  onRequest?: (params: TParams) => void;
  onResult?: (result: TResult) => void;
  onError?: (error: Error) => void;
  initialParams?: TParams;
  initialResult?: TResult;
}

function useRequest<TParams, TResult>(
  request: RequestrRequest<TParams, TResult>,
  config?: UseRequestConfig<TParams, TResult>
) {
  const [result, setResult] = useState((config?.initialResult ?? null) as TResult | null);
  const [error, setError] = useState(null as null | Error);
  const [loading, setLoading] = useState(false);

  const send = useCallback(async (params: TParams) => {
    setLoading(true);
    if (config?.onRequest) config.onRequest(params);

    try {
      const result = await sendRequest(request, params);
      setResult(result);
      setError(null);

      if (config?.onResult) config.onResult(result);
    } catch (error) {
      setError(error as Error);
      setResult(null);

      if (config?.onError) config.onError(error as Error);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    if (config?.initialResult === undefined && config?.initialParams !== undefined) send(config.initialParams);
  }, [send]);

  return { send, result, error, loading };
}

export { useRequest, UseRequestConfig };
