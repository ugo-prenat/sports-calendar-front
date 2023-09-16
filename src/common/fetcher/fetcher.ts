import { GET_METHOD, POST_METHOD } from '@/constants';
import { defaultInit } from './fetcher.models';
import { makeUrl } from './fetcher.utils';

const fetcher = {
  get: <T>(url: string, init?: RequestInit): Promise<T> =>
    fetch(makeUrl(url), { ...defaultInit, ...init, method: GET_METHOD })
      .then((res) => res.json())
      .then((res) => res as T),

  post: (url: string, body: string, init?: RequestInit) =>
    fetch(makeUrl(url), {
      ...defaultInit,
      ...init,
      method: POST_METHOD,
      body
    })
};

// https://www.newline.co/@bespoyasov/how-to-use-fetch-with-typescript--a81ac257

export default fetcher;
