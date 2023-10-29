import { FC, useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useTranslation } from '@/common/contexts/lang/lang.hooks';
import { TabId, ICalendarTab } from './home.models';
import UpcomingTab from './tabs/upcoming/UpcomingTab';
import CalendarTab from './tabs/calendar/CalendarTab';
import { DEFAULT_CALENDAR_VIEW, TAB_IDS, UPCOMING } from '@/constants';
import { useCalendar } from '@/common/contexts/calendar/calendar.hooks';
import { usePreferences } from '@/common/contexts/preferences/preferences.hooks';

const HomePage: FC = () => {
  const { t } = useTranslation();
  const { setCalendarView } = useCalendar();
  const { defaultTab } = usePreferences();

  const [activeTab, setActiveTab] = useState<TabId>(defaultTab);

  const handleChangeTab = (id: TabId) => () => {
    if (id !== UPCOMING) setCalendarView(id);
    setActiveTab(id);
  };

  const tabs: ICalendarTab[] = TAB_IDS.map((id) => ({
    id,
    label: t(`tab.${id}`)
  }));

  return (
    <Tabs
      defaultValue={DEFAULT_CALENDAR_VIEW}
      className="p-6 pb-0 flex flex-col h-full"
    >
      <TabsList className="w-fit py-6 px-2">
        {tabs.map((tab) => (
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
