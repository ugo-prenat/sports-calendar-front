import { useTranslation } from '@/common/contexts/lang/lang.hooks';
import { cn } from '@/common/utils/tailwind.utils';
import Tooltip from '@/components/Tooltip';
import { Button } from '@/components/ui/button';
import { ChevronsLeft } from 'lucide-react';
import { FC } from 'react';

interface IToggleFiltersColumnBtnProps {
  action: 'open' | 'close';
  toggleFiltersColumn: () => void;
}

const ToggleFiltersColumnBtn: FC<IToggleFiltersColumnBtnProps> = ({
  action,
  toggleFiltersColumn
}) => {
  const { t } = useTranslation();

  return (
    <Tooltip title={t(`filtersColumn.${action}`)}>
      <Button
        variant={action === 'open' ? 'outline' : 'ghost'}
        size="icon"
        className={cn('w-8 h-8', {
          'rounded-l-none rounded-r-lg absolute -left-2 hover:left-0 transition-all':
            action === 'open'
        })}
        onClick={toggleFiltersColumn}
      >
        <ChevronsLeft
          className={cn('h-4 w-4', { 'rotate-180': action === 'open' })}
        />
      </Button>
    </Tooltip>
  );
};

export default ToggleFiltersColumnBtn;
