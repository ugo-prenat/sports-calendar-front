import { ReactNode } from 'react';
import { ChampionshipId } from './sports.models';
import z from 'zod';
import { CHAMPIONSHIPS } from '@/constants';

export interface IChampionshipsContextProps {
  children: ReactNode;
}
export interface IChampionshipsContextState {
  championships: ChampionshipId[];
  updateChampionships: (championship: ChampionshipId) => void;
}

export const storedChampionshipsSchema: z.ZodType<ChampionshipId[]> = z.array(
  z.enum(CHAMPIONSHIPS)
);
