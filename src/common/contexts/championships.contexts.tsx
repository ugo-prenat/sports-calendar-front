import { FC, createContext, useState } from 'react';
import {
  IChampionshipsContextProps,
  IChampionshipsContextState
} from '../models/championships.models';
import { ChampionshipId } from '../models/sports.models';

const initialState: IChampionshipsContextState = {
  championships: [],
  addChampionship: () => null,
  removeChampionship: () => null
};

export const ChampionshipsProviderContext =
  createContext<IChampionshipsContextState>(initialState);

export const ChampionshipsProvider: FC<IChampionshipsContextProps> = ({
  children,
  ...props
}) => {
  const [championships, setChampionships] = useState<ChampionshipId[]>([]);

  const addChampionship = (championshipId: ChampionshipId) => {
    const isChampionshipAlreadyAdded = championships.includes(championshipId);

    if (!isChampionshipAlreadyAdded)
      setChampionships((prev) => [...prev, championshipId]);
  };

  const removeChampionship = (championshipId: ChampionshipId) =>
    setChampionships((prev) =>
      prev.filter((championship) => championship !== championshipId)
    );

  const value = {
    championships,
    addChampionship,
    removeChampionship
  };

  return (
    <ChampionshipsProviderContext.Provider {...props} value={value}>
      {children}
    </ChampionshipsProviderContext.Provider>
  );
};
