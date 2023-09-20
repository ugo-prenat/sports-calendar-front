import { IEvent } from '@/common/models/sports.models';
import { F1, FREE_PRACTICE_1, MOTORSPORTS } from '@/constants';
import { addDays, endOfToday, startOfToday } from 'date-fns';
import { IDateRange } from '../home/home.models';
import { ISchemaSession } from './creation.models';

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

export const makeVirginSession = (): ISchemaSession => ({
  type: FREE_PRACTICE_1,
  startTime: startOfToday().toISOString(),
  endTime: endOfToday().toISOString()
});
