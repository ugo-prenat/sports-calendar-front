import { useTranslation } from '@/common/hooks/lang.hooks';
import ChampionshipLogo from '@/components/ChampionshipLogo';
import { CHAMPIONSHIPS } from '@/constants';
import { FC } from 'react';

const ManagePage: FC = () => {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col p-8">
      <h2 className="font-semibold text-2xl mb-16">
        {t('manage.sports.title')}
      </h2>

      <div className="flex flex-col">
        {CHAMPIONSHIPS.map((champ) => (
          <ChampionshipLogo
            className="max-w-[200px] mb-6 self-end"
            championshipId={champ}
            key={champ}
          />
        ))}
      </div>
    </div>
  );
};

export default ManagePage;
