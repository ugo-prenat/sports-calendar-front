import { DEFAULT_SCHEDULE_VIEW, SCHEDULE_VIEWS } from '@/constants';
import {
  IScheduleViewSelector,
  ScheduleView
} from '@/pages/calendar/calendar.models';
import { FC } from 'react';
import { useTranslation } from '@/common/hooks/lang.hooks';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useCalendar } from '@/pages/calendar/calendar.hooks';

const ScheduleViewSelector: FC = () => {
  const { t } = useTranslation();
  const { setCalendarView: setView } = useCalendar();

  const handleChange = (newView: ScheduleView) => () => setView(newView);

  const tabs: IScheduleViewSelector[] = SCHEDULE_VIEWS.map((view) => ({
    id: view,
    label: t(`tab.${view}`)
  }));

  return (
    <Tabs
      defaultValue={DEFAULT_SCHEDULE_VIEW}
      className="p-6 pb-0 flex-grow flex flex-col"
    >
      <TabsList className="w-fit">
        {tabs.map((tab) => (
          <TabsTrigger
            key={tab.id}
            value={tab.id}
            onClick={handleChange(tab.id)}
            id={tab.id}
          >
            {tab.label}
          </TabsTrigger>
        ))}
      </TabsList>
    </Tabs>
  );
};

export default ScheduleViewSelector;
