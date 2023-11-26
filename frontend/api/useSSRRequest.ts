import { RequestrRequest, UseRequestConfig, useRequest } from '@libs/client/requestr';
import { getSSRDataValue } from '@libs/client/ssr';
import { useMemo } from 'react';

function useSSRRequest<TParams, TResult>(
  ssrKey: string,
  request: RequestrRequest<TParams, TResult>,
  config?: UseRequestConfig<TParams, TResult>
) {
  const newConfig = useMemo(() => {
    return {
      ...config,
      initialResult: getSSRDataValue(ssrKey, undefined)
    };
  }, []);

  return useRequest(request, newConfig);
}

export { useSSRRequest };
