// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const isEmpty = (val: any): boolean =>
  val == null || !(Object.keys(val) || val).length;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const isNotEmpty = (val: any): boolean => !isEmpty(val);

export const randomNbs = (min: number, max: number) =>
  Math.round(Math.random() * (max - min)) + min;
