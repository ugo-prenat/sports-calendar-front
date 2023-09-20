import { WithoutIds } from '@/common/models/models';
import { IEvent, ISession } from '@/common/models/sports.models';
import { F1, MOTORSPORTS } from '@/constants';
import { addDays, startOfToday } from 'date-fns';
import { IDateRange } from '../home/home.models';

export interface ISchemaEvent
  extends Omit<IEvent, 'id' | 'startTime' | 'endTime'> {
  range: IDateRange;
}

export const makeVirginEvent = (): ISchemaEvent => ({
  sport: MOTORSPORTS,
  championship: F1,
  regionalized: {
    en: { name: '', shortName: '' },
    fr: { name: '', shortName: '' }
  },
  range: {
    from: startOfToday(),
    to: addDays(startOfToday(), 2)
  },
  country: {
    code: '',
    flag: ''
  },
  location: {
    regionalized: {
      en: { name: '', shortName: '' },
      fr: { name: '', shortName: '' }
    },
    coordinates: { lat: 0, lng: 0 },
    track: ''
  }
});

export const makeVirginSession = (): WithoutIds<ISession> => ({
  sport: MOTORSPORTS,
  championship: F1,
  regionalized: {
    en: { name: '', shortName: '' },
    fr: { name: '', shortName: '' }
  },
  startTime: '',
  endTime: ''
});
