import { ChampionshipId } from '@/common/models/sports.models';
import { ICalendarDaySessions, IRange } from './home.models';
import fetcher from '@/common/fetcher/fetcher';

export const getCalendarDaysSessions = (
  range: IRange,
  championships: ChampionshipId[]
): Promise<ICalendarDaySessions[]> =>
  fetcher.get<ICalendarDaySessions[]>(
    `/sessions?range=${range.start.toISOString()},${range.end.toISOString()}&championships=${championships.join(
      ','
    )}`
  );
