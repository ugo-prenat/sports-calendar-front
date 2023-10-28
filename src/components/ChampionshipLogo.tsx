import { DetailedHTMLProps, FC, ImgHTMLAttributes } from 'react';
import { ChampionshipId } from '@/common/models/sports.models';
import { useTheme } from '@/common/hooks/theme.hooks';
import { CHAMIPONSHIP_CONFS } from '@/constants';
import { cn } from '@/common/utils/tailwind.utils';

interface IChampionshipLogoProps
  extends DetailedHTMLProps<
    ImgHTMLAttributes<HTMLImageElement>,
    HTMLImageElement
  > {
  championshipId: ChampionshipId;
}

const ChampionshipLogo: FC<IChampionshipLogoProps> = ({
  championshipId,
  className,
  ...props
}) => {
  const { isDark } = useTheme();

  const championshipConf = CHAMIPONSHIP_CONFS[championshipId];
  const logo = championshipConf.logo[isDark ? 'dark' : 'light'];

  return (
    <img
      alt={`${championshipId}-logo`}
      className={cn('', className)}
      src={logo}
      {...props}
    />
  );
};

export default ChampionshipLogo;
