import { useState } from 'react';
import { IInitialStates, Status } from './fetcher.models';

export interface IFetcherProps<T> {
  onSuccess?: (data: T) => void;
  onError?: () => void;
  initialStates?: IInitialStates<T>;
}

export function useFetcher<T>(
  fetchFunc: () => Promise<T>,
  { onSuccess, onError, initialStates }: IFetcherProps<T> = {}
) {
  const [data, setData] = useState<T | undefined>(initialStates?.initialData);
  const [status, setStatus] = useState<Status>(
    initialStates?.initialStatus || 'idle'
  );

  const handleFetch = () => {
    setStatus('loading');

    fetchFunc()
      .then((data) => {
        setData(data);
        onSuccess && onSuccess(data);
        setStatus('success');
      })
      .catch(() => {
        onError && onError();
        setStatus('error');
      });
  };

  return {
    data,
    status,
    setData,
    setStatus,
    handleFetch
  };
}
