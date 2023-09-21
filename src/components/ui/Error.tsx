import { FC } from 'react';
import { Button } from './button';
import { useTranslation } from '@/common/hooks/lang.hooks';

interface IErrorProps {
  text: string;
  retry: () => void;
}

const Error: FC<IErrorProps> = ({ text, retry }) => {
  const { t } = useTranslation();
  return (
    <div className="w-full h-fit flex items-center justify-between p-2 border rounded-sm border-destructive bg-destructive/10">
      <p className="text-destructive pl-1 text-sm">{text}</p>
      <Button
        size="sm"
        variant="outline"
        className="border-destructive bg-transparent text-destructive hover:bg-destructive"
        onClick={retry}
      >
        {t('retry')}
      </Button>
    </div>
  );
};

export default Error;
