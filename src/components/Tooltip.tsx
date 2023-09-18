import { FC, PropsWithChildren } from 'react';
import {
  Tooltip as UITooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger
} from '@/components/ui/tooltip';

interface ITooltipProps {
  title: string;
}

const Tooltip: FC<PropsWithChildren<ITooltipProps>> = ({ title, children }) => {
  return (
    <TooltipProvider>
      <UITooltip>
        <TooltipTrigger asChild>{children}</TooltipTrigger>
        <TooltipContent>
          <p>{title}</p>
        </TooltipContent>
      </UITooltip>
    </TooltipProvider>
  );
};

export default Tooltip;
