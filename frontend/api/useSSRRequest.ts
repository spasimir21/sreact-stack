import { RequestrRequest, UseRequestConfig, useRequest } from '@libs/client/requestr';
import { getSSRDataValue } from '@libs/shared/ssr';
import { useMemo } from 'react';

function useSSRRequest<TParams, TResult, TConfig>(
  ssrKey: string,
  request: RequestrRequest<TParams, TResult, TConfig>,
  config?: UseRequestConfig<TParams, TResult, TConfig>
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
