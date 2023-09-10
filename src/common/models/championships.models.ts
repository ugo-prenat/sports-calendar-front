import { ReactNode } from 'react';
import { ChampionshipId } from './sports.models';

export interface IChampionshipsContextProps {
  children: ReactNode;
}
export interface IChampionshipsContextState {
  championships: ChampionshipId[];
  addChampionship: (championship: ChampionshipId) => void;
  removeChampionship: (championship: ChampionshipId) => void;
}
