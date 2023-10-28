import { ReactNode } from 'react';
import { ChampionshipId } from './sports.models';

export interface IChampionshipsContextProps {
  children: ReactNode;
}
export interface IChampionshipsContextState {
  championships: ChampionshipId[];
  updateChampionships: (championship: ChampionshipId) => void;
}
