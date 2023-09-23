import { GET_METHOD, POST_METHOD } from '@/constants';
import { defaultInit } from './fetcher.models';
import { ensureError, makeUrl } from './fetcher.utils';

const fetcher = {
  get: <TResponse>(url: string, init?: RequestInit): Promise<TResponse> =>
    fetch(makeUrl(url), { ...defaultInit, ...init, method: GET_METHOD })
      .then((res) => {
        if (res.ok) return res.json();
        throw new Error(res.statusText);
      })
      .then((res) => res as TResponse)
      .catch((err) => {
        const error = ensureError(err);
        throw new Error(error.message);
      }),

  post: <TResponse = void>(
    url: string,
    body: unknown,
    init?: RequestInit
  ): Promise<TResponse> =>
    fetch(makeUrl(url), {
      ...defaultInit,
      ...init,
      method: POST_METHOD,
      body: JSON.stringify(body)
    })
      .then((res) => {
        if (res.ok) return res.json();
        throw new Error(res.statusText);
      })
      .then((res) => res as TResponse)
      .catch((err) => {
        const error = ensureError(err);
        throw new Error(error.message);
      })
};

// https://www.newline.co/@bespoyasov/how-to-use-fetch-with-typescript--a81ac257

export default fetcher;
