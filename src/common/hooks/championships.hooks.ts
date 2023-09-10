import { useContext } from 'react';
import { ChampionshipsProviderContext } from '../contexts/championships.contexts';

export const useChampionships = () => {
  const context = useContext(ChampionshipsProviderContext);

  if (context === undefined)
    throw new Error(
      'useChampionships must be used within a ChampionshipsProvider'
    );

  return context;
};
