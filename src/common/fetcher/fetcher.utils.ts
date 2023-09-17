import { DEV_API_URL, PROD_API_URL } from '@/constants';

const API_URL =
  process.env.NODE_ENV === 'development' ? DEV_API_URL : PROD_API_URL;

export const makeUrl = (url: string) => API_URL + url;

export const ensureError = (value: unknown): Error => {
  if (value instanceof Error) return value;

  let stringified = '[Unable to stringify the thrown value]';
  try {
    stringified = JSON.stringify(value);
    // eslint-disable-next-line no-empty
  } catch {}

  const error = new Error(
    `This value was thrown as is, not through an Error: ${stringified}`
  );
  return error;
};
