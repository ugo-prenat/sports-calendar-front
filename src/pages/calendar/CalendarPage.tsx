import { FC } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useTranslation } from '@/common/hooks/lang.hooks';
import { ICalendarTab } from './calendar.models';
import CalendarUpcomingTab from './tabs/upcoming/CalendarUpcomingTab';
import CalendarScheduleTab from './tabs/schedule/CalendarScheduleTab';
import { DEFAULT_CALENDAR_TAB, SCHEDULE, UPCOMING } from '@/constants';

const CalendarPage: FC = () => {
  const { t } = useTranslation();

  const tabs: ICalendarTab[] = [
    {
      id: UPCOMING,
      label: t(`tab.${UPCOMING}`),
      content: <CalendarUpcomingTab />
    },
    {
      id: SCHEDULE,
      label: t(`tab.${SCHEDULE}`),
      content: <CalendarScheduleTab />
    }
  ];

  return (
    <Tabs
      defaultValue={DEFAULT_CALENDAR_TAB}
      className="p-6 pb-0 flex-grow flex flex-col"
    >
      <TabsList className="w-fit">
        {tabs.map((tab) => (
          <TabsTrigger key={tab.id} value={tab.id}>
            {tab.label}
          </TabsTrigger>
        ))}
      </TabsList>
      {tabs.map((tab) => (
        <TabsContent
          key={tab.id}
          value={tab.id}
          className="mt-0 pt-6 flex-grow"
        >
          {tab.content}
        </TabsContent>
      ))}
    </Tabs>
  );
};

export default CalendarPage;
