import { FC } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useTranslation } from '@/common/hooks/lang.hooks';
import { CalendarView, ICalendarTab } from './home.models';
import UpcomingTab from './tabs/upcoming/UpcomingTab';
import CalendarScheduleTab from './tabs/calendar/CalendarTab';
import { CALENDAR_VIEWS, UPCOMING, WEEKEND } from '@/constants';
import { useCalendar } from '@/common/hooks/calendar.hooks';

const HomePage: FC = () => {
  const { t } = useTranslation();
  const { setCalendarView } = useCalendar();

  const handleChangeTab = (id: CalendarView) => () => setCalendarView(id);

  const calendarTabs: ICalendarTab[] = CALENDAR_VIEWS.map((view) => ({
    id: view,
    label: t(`tab.${view}`)
  }));

  return (
    <Tabs
      defaultValue={WEEKEND}
      className="p-6 pb-0 flex flex-col h-[calc(100%-6.5rem)]"
    >
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
        <TabsContent key={tab.id} value={tab.id} className="mt-0 py-6 h-full">
          <CalendarScheduleTab />
        </TabsContent>
      ))}
    </Tabs>
  );
};

export default HomePage;
