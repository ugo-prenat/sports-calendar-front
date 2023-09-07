import { FC } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useTranslation } from '@/common/hooks/lang.hooks';
import { CalendarView, ICalendarTab } from './home.models';
import UpcomingTab from './tabs/upcoming/UpcomingTab';
import CalendarScheduleTab from './tabs/calendar/CalendarTab';
import { MONTH, UPCOMING, WEEK, WEEKEND } from '@/constants';
import { useCalendar } from '@/common/hooks/calendar.hooks';

const HomePage: FC = () => {
  const { t } = useTranslation();
  const { setCalendarView } = useCalendar();

  const handleChangeTab = (id: CalendarView) => () => setCalendarView(id);

  const calendarTabs: ICalendarTab[] = [
    {
      id: WEEKEND,
      label: t(`tab.${WEEKEND}`),
      content: <CalendarScheduleTab />
    },
    {
      id: WEEK,
      label: t(`tab.${WEEK}`),
      content: <CalendarScheduleTab />
    },
    {
      id: MONTH,
      label: t(`tab.${MONTH}`),
      content: <CalendarScheduleTab />
    }
  ];

  return (
    <Tabs defaultValue={WEEKEND} className="p-6 pb-0 flex-grow flex flex-col">
      <TabsList className="w-fit py-6 px-2">
        <TabsTrigger value={UPCOMING} className="px-4 py-2">
          {t(`tab.${UPCOMING}`)}
        </TabsTrigger>
        {calendarTabs.map((tab) => (
          <TabsTrigger
            key={tab.id}
            value={tab.id}
            onClick={handleChangeTab(tab.id)}
            className="px-4 py-2 font-semibold"
          >
            {tab.label}
          </TabsTrigger>
        ))}
      </TabsList>

      <TabsContent value={UPCOMING} className="mt-0 pt-6 flex-grow">
        <UpcomingTab />
      </TabsContent>
      {calendarTabs.map((tab) => (
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

export default HomePage;
