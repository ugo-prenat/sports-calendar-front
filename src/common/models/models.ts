export type WithoutId<T> = Omit<T, 'id'>;
export type WithoutIds<T> = Omit<WithoutId<T>, 'eventId'>;
