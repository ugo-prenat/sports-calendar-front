import { useChampionships } from '@/common/hooks/championships.hooks';
import { useTranslation } from '@/common/hooks/lang.hooks';
import { ChampionshipId } from '@/common/models/sports.models';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { CHAMPIONSHIPS } from '@/constants';
import { FC } from 'react';

interface IChampionshipProps {
  championship: ChampionshipId;
  isChecked: boolean;
}

const ChampionshipsFilter: FC = () => {
  const { championships, updateChampionships } = useChampionships();
  const { t } = useTranslation();

  const handleClick = (championship: ChampionshipId) => () =>
    updateChampionships(championship);

  const Championship = ({ championship, isChecked }: IChampionshipProps) => (
    <div className="flex items-center gap-2 mb-6">
      <Checkbox
        id={championship}
        checked={isChecked}
        onClick={handleClick(championship)}
      />
      <Label htmlFor={championship} className="cursor-pointer font-normal">
        {t(championship)}
      </Label>
    </div>
  );

  return (
    <div className="pt-6 border-t flex-1">
      {CHAMPIONSHIPS.map((championship) => (
        <Championship
          key={championship}
          championship={championship}
          isChecked={championships.includes(championship)}
        />
      ))}
    </div>
  );
};

export default ChampionshipsFilter;
