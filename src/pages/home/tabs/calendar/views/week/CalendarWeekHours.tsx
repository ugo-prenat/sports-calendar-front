import { useTranslation } from '@/common/hooks/lang.hooks';
import { getHours } from '@/pages/home/home.utils';

const CalendarWeekHours = () => {
  const { fnsLocale } = useTranslation();
  const hours = getHours(fnsLocale);

  return (
    <div className="mt-7">
      <div className="h-full flex flex-col">
        {hours.map((hour, index) => (
          <p
            key={index}
            className="flex-1 flex justify-end px-2 text-xs text-muted-foreground/50 -mt-[0.40rem]"
          >
            {hour}
          </p>
        ))}
      </div>
    </div>
  );
};

export default CalendarWeekHours;
