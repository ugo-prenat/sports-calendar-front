import { FC } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useTranslation } from '@/common/hooks/lang.hooks';
import { ICalendarTab } from './calendar.models';
import CalendarUpcomingTab from './tabs/upcoming/CalendarUpcomingTab';
import CalendarScheduleTab from './tabs/schedule/CalendarScheduleTab';
import { MONTH, UPCOMING, WEEK, WEEKEND } from '@/constants';

const CalendarPage: FC = () => {
  const { t } = useTranslation();

  const tabs: ICalendarTab[] = [
    {
      id: UPCOMING,
      label: t('tab.upcoming'),
      content: <CalendarUpcomingTab />
    },
    {
      id: WEEKEND,
      label: t('tab.weekend'),
      content: <CalendarScheduleTab calendarRange={WEEKEND} />
    },
    {
      id: WEEK,
      label: t('tab.week'),
      content: <CalendarScheduleTab calendarRange={WEEK} />
    },
    {
      id: MONTH,
      label: t('tab.month'),
      content: <CalendarScheduleTab calendarRange={MONTH} />
    }
  ];

  return (
    <Tabs defaultValue={WEEKEND} className="p-6 pb-0 flex-grow flex flex-col">
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
