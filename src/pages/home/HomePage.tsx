import { FC, useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useTranslation } from '@/common/hooks/lang.hooks';
import { TabId, ICalendarTab } from './home.models';
import UpcomingTab from './tabs/upcoming/UpcomingTab';
import CalendarTab from './tabs/calendar/CalendarTab';
import {
  CALENDAR_VIEWS,
  DEFAULT_CALENDAR_VIEW,
  MONTH,
  UPCOMING
} from '@/constants';
import { useCalendar } from '@/common/hooks/calendar.hooks';
import { cn } from '@/common/utils/tailwind.utils';

const HomePage: FC = () => {
  const { t } = useTranslation();
  const { calendarView, setCalendarView } = useCalendar();

  const [activeTab, setActiveTab] = useState<TabId>(DEFAULT_CALENDAR_VIEW);

  const handleChangeTab = (id: TabId) => () => {
    if (id !== UPCOMING) setCalendarView(id);
    setActiveTab(id);
  };

  const calendarTabs: ICalendarTab[] = CALENDAR_VIEWS.map((view) => ({
    id: view,
    label: t(`tab.${view}`)
  }));

  return (
    <Tabs
      defaultValue={DEFAULT_CALENDAR_VIEW}
      className={cn('p-6 pb-0 flex flex-col', {
        'h-[calc(100%-6.5rem)]': calendarView === MONTH,
        'h-[calc(100%-3rem)]': calendarView !== MONTH
      })}
    >
      <TabsList className="w-fit py-6 px-2">
        <TabsTrigger
          value={UPCOMING}
          className="px-4 py-2"
          onClick={handleChangeTab(UPCOMING)}
        >
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

      <TabsContent value={activeTab} className="mt-0 py-6 h-full">
        {activeTab !== UPCOMING ? <CalendarTab /> : <UpcomingTab />}
      </TabsContent>
    </Tabs>
  );
};

export default HomePage;
