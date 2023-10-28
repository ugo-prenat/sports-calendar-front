import { FC, createContext, useState } from 'react';
import {
  IChampionshipsContextProps,
  IChampionshipsContextState
} from '../models/championships.models';
import { ChampionshipId } from '../models/sports.models';
import { DEFAULT_CHAMPIONSHIPS } from '@/constants';

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
  const [championships, setChampionships] = useState<ChampionshipId[]>(
    DEFAULT_CHAMPIONSHIPS
  );

  const updateChampionships = (championshipId: ChampionshipId) => {
    const isChampionshipAlreadyAdded = championships.includes(championshipId);

    setChampionships((prev) =>
      isChampionshipAlreadyAdded
        ? prev.filter((championship) => championship !== championshipId)
        : [...prev, championshipId]
    );
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
