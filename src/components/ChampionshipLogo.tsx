import { DetailedHTMLProps, FC, ImgHTMLAttributes } from 'react';
import { ChampionshipId } from '@/common/models/sports.models';
import { useTheme } from '@/common/contexts/theme/theme.hooks';
import { cn } from '@/common/utils/tailwind.utils';
import { useChampionshipConf } from '@/common/hooks/sports.hooks';

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

  const championshipConf = useChampionshipConf(championshipId);
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
