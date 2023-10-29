import { FC, HTMLAttributes } from 'react';
import { AlertTriangle, CheckCircle2, XCircle } from 'lucide-react';
import { Button } from './ui/button';
import { useTranslation } from '@/common/hooks/lang.hooks';
import { cn } from '@/common/utils/tailwind.utils';

type AlertVariant = 'default' | 'success' | 'warning' | 'error';

interface IAlertProps extends HTMLAttributes<HTMLDivElement> {
  text: string;
  variant?: AlertVariant;
  retry?: () => void;
}

const Alert: FC<IAlertProps> = ({
  text,
  variant = 'default',
  retry,
  className,
  ...props
}) => {
  const { t } = useTranslation();

  return (
    <div
      className={cn(
        'w-full h-fit flex justify-between p-3 border rounded-md border-primary/70 bg-primary/5',
        className,
        {
          'bg-warning/10 border-warning': variant === 'warning',
          'bg-success/10 border-success': variant === 'success',
          'bg-destructive/10 border-destructive': variant === 'error'
        }
      )}
      {...props}
    >
      <div className="flex items-center gap-2">
        <AlertIcon variant={variant} />
        <AlertTitle variant={variant} text={text} />
      </div>

      {retry && (
        <Button
          size="sm"
          variant="outline"
          className="border-destructive bg-transparent text-destructive hover:bg-destructive"
          onClick={retry}
        >
          {t('retry')}
        </Button>
      )}
    </div>
  );
};

const AlertIcon = ({ variant }: { variant: AlertVariant }) => {
  const defaultIconClassName = 'w-4 h-4 min-w-fit min-h-fit';

  switch (variant) {
    case 'warning':
      return (
        <AlertTriangle className={cn(defaultIconClassName, 'text-warning')} />
      );
    case 'success':
      return (
        <CheckCircle2 className={cn(defaultIconClassName, 'text-success')} />
      );
    case 'error':
      return (
        <XCircle className={cn(defaultIconClassName, 'text-destructive')} />
      );
    default:
      return null;
  }
};

const AlertTitle = ({
  variant,
  text
}: {
  variant: AlertVariant;
  text: string;
}) => (
  <p
    className={cn('text-sm', {
      'text-destructive': variant === 'error',
      'text-warning': variant === 'warning',
      'text-success': variant === 'success'
    })}
  >
    {text}
  </p>
);

export default Alert;
