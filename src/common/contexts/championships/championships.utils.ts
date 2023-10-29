import { CHAMPIONSHIPS_STORAGE_KEY } from '@/constants';
import { storedChampionshipsSchema } from './championships.models';
import { ChampionshipId } from '../../models/sports.models';

export const getStoredChampionships = (): ChampionshipId[] | undefined => {
  const storedChampionships = localStorage.getItem(CHAMPIONSHIPS_STORAGE_KEY);
  if (!storedChampionships) return undefined;

  const parse = storedChampionshipsSchema.safeParse(
    JSON.parse(storedChampionships)
  );

  if (!parse.success) return undefined;
  return parse.data;
};

export const updateStoredChampionships = (
  newChampionships: ChampionshipId[]
) => {
  localStorage.setItem(
    CHAMPIONSHIPS_STORAGE_KEY,
    JSON.stringify(newChampionships)
  );
};
