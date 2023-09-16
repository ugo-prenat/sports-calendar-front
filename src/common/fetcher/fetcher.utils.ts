import { DEV_API_URL, PROD_API_URL } from '@/constants';

const API_URL =
  process.env.NODE_ENV === 'development' ? DEV_API_URL : PROD_API_URL;

export const makeUrl = (url: string) => API_URL + url;
