import { FC, createContext, useState } from 'react';
import {
  IChampionshipsContextProps,
  IChampionshipsContextState
} from './championships.models';
import { ChampionshipId } from '../../models/sports.models';
import { DEFAULT_CHAMPIONSHIPS } from '@/constants';
import {
  getStoredChampionships,
  updateStoredChampionships
} from './championships.utils';

const initialState: IChampionshipsContextState = {
  championships: DEFAULT_CHAMPIONSHIPS,
  updateChampionships: () => {}
};

export const ChampionshipsProviderContext =
  createContext<IChampionshipsContextState>(initialState);

export const ChampionshipsProvider: FC<IChampionshipsContextProps> = ({
  children,
  ...props
}) => {
  const storedChampionships: ChampionshipId[] | undefined =
    getStoredChampionships();

  const [championships, setChampionships] = useState<ChampionshipId[]>(
    storedChampionships || DEFAULT_CHAMPIONSHIPS
  );

  const updateChampionships = (championshipId: ChampionshipId) => {
    const isChampionshipAlreadyAdded = championships.includes(championshipId);
    const newChampionships = isChampionshipAlreadyAdded
      ? championships.filter((championship) => championship !== championshipId)
      : [...championships, championshipId];

    setChampionships(newChampionships);
    updateStoredChampionships(newChampionships);
  };
  const value = {
    championships,
    updateChampionships
  };

  return (
    <ChampionshipsProviderContext.Provider {...props} value={value}>
      {children}
    </ChampionshipsProviderContext.Provider>
  );
};
