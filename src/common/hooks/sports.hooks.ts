import { CHAMIPONSHIP_CONFS } from '@/constants';
import { ChampionshipId } from '../models/sports.models';

export const getChampionshipConfs = () => CHAMIPONSHIP_CONFS;
export const useChampionshipConfs = getChampionshipConfs;

export const getChampionshipConf = (id: ChampionshipId) => {
  const conf = CHAMIPONSHIP_CONFS.find((c) => c.id === id);
  if (!conf) throw new Error(`Championship conf not found for id ${id}`);
  return conf;
};
export const useChampionshipConf = getChampionshipConf;
