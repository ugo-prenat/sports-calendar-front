import { FC } from 'react';
import { useTheme } from '@/common/contexts/theme/theme.hooks';
import { Theme } from '@/common/contexts/theme/theme.models';
import { useTranslation } from '@/common/contexts/lang/lang.hooks';
import { THEME_DARK, THEME_LIGHT, THEME_SYSTEM } from '@/constants';

const ThemeToggle: FC = () => {
  const { t } = useTranslation();
  const { setTheme } = useTheme();

  const handleChange = (theme: Theme) => () => setTheme(theme);

  return (
    <div className="flex flex-col gap-3">
      <h4 className="font-medium leading-none">{t('theme')}</h4>

      <div className="flex justify-between gap-4">
        <LightThemePlaceholder
          handleChange={handleChange(THEME_LIGHT)}
          label={t('theme.light')}
        />
        <DarkThemePlaceholder
          handleChange={handleChange(THEME_DARK)}
          label={t('theme.dark')}
        />
        <SystemThemePlaceholder
          handleChange={handleChange(THEME_SYSTEM)}
          label={t('theme.system')}
        />
      </div>
    </div>
  );
};

interface IThemePlaceholder {
  handleChange: () => void;
  label: string;
}

const LightThemePlaceholder: FC<IThemePlaceholder> = ({
  handleChange,
  label
}) => (
  <div onClick={handleChange} className="flex flex-col flex-1 items-center">
    <div className="w-full items-center rounded-md border-2 border-muted p-1 hover:border-accent hover:bg-accent hover:text-accent-foreground cursor-pointer">
      <div className="space-y-2 rounded-sm bg-[#ecedef] p-2">
        <div className="space-y-2 rounded-md bg-white p-2 shadow-sm">
          <div className="h-2 w-[80px] rounded-lg bg-[#ecedef]" />
          <div className="h-2 w-[100px] rounded-lg bg-[#ecedef]" />
        </div>
        <div className="flex items-center space-x-2 rounded-md bg-white p-2 shadow-sm">
          <div className="h-4 w-4 rounded-full bg-[#ecedef]" />
          <div className="h-2 w-[100px] rounded-lg bg-[#ecedef]" />
        </div>
        <div className="flex items-center space-x-2 rounded-md bg-white p-2 shadow-sm">
          <div className="h-4 w-4 rounded-full bg-[#ecedef]" />
          <div className="h-2 w-[100px] rounded-lg bg-[#ecedef]" />
        </div>
      </div>
    </div>
    <p className="text-sm text-muted-foreground leading-4 mt-2">{label}</p>
  </div>
);

const DarkThemePlaceholder: FC<IThemePlaceholder> = ({
  handleChange,
  label
}) => (
  <div onClick={handleChange} className="flex flex-col flex-1 items-center">
    <div className="w-full items-center rounded-md border-2 border-muted bg-popover p-1 hover:bg-accent hover:text-accent-foreground cursor-pointer">
      <div className="space-y-2 rounded-sm bg-slate-950 p-2">
        <div className="space-y-2 rounded-md bg-slate-800 p-2 shadow-sm">
          <div className="h-2 w-[80px] rounded-lg bg-slate-400" />
          <div className="h-2 w-[100px] rounded-lg bg-slate-400" />
        </div>
        <div className="flex items-center space-x-2 rounded-md bg-slate-800 p-2 shadow-sm">
          <div className="h-4 w-4 rounded-full bg-slate-400" />
          <div className="h-2 w-[100px] rounded-lg bg-slate-400" />
        </div>
        <div className="flex items-center space-x-2 rounded-md bg-slate-800 p-2 shadow-sm">
          <div className="h-4 w-4 rounded-full bg-slate-400" />
          <div className="h-2 w-[100px] rounded-lg bg-slate-400" />
        </div>
      </div>
    </div>
    <p className="text-sm text-muted-foreground leading-4 mt-2">{label}</p>
  </div>
);

const SystemThemePlaceholder: FC<IThemePlaceholder> = ({
  handleChange,
  label
}) => (
  <div onClick={handleChange} className="flex flex-1 flex-col items-center">
    <div className="group w-full relative overflow-hidden rounded-md border-2 border-muted cursor-pointer hover:border-accent hover:bg-accent hover:text-accent-foreground">
      <div className="absolute w-full left-[40%] overflow-hidden [clip-path:polygon(0_0,_100%_0,_100%_100%,_20%_100%)]">
        <div className="relative left-[40%] -translate-x-[80%]">
          <div className="items-center bg-popover p-1 group-hover:border-accent group-hover:bg-accent group-hover:text-accent-foreground">
            <div className="space-y-2 rounded-sm bg-slate-950 p-2">
              <div className="space-y-2 rounded-md bg-slate-800 p-2 shadow-sm">
                <div className="h-2 w-[80px] rounded-lg bg-slate-400" />
                <div className="h-2 w-[100px] rounded-lg bg-slate-400" />
              </div>
              <div className="flex items-center space-x-2 rounded-md bg-slate-800 p-2 shadow-sm">
                <div className="h-4 w-4 rounded-full bg-slate-400" />
                <div className="h-2 w-[100px] rounded-lg bg-slate-400" />
              </div>
              <div className="flex items-center space-x-2 rounded-md bg-slate-800 p-2 shadow-sm">
                <div className="h-4 w-4 rounded-full bg-slate-400" />
                <div className="h-2 w-[100px] rounded-lg bg-slate-400" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="items-center p-1">
          <div className="space-y-2 rounded-sm bg-[#ecedef] p-2">
            <div className="space-y-2 rounded-md bg-white p-2 shadow-sm">
              <div className="h-2 w-[80px] rounded-lg bg-[#ecedef]" />
              <div className="h-2 w-[100px] rounded-lg bg-[#ecedef]" />
            </div>
            <div className="flex items-center space-x-2 rounded-md bg-white p-2 shadow-sm">
              <div className="h-4 w-4 rounded-full bg-[#ecedef]" />
              <div className="h-2 w-[100px] rounded-lg bg-[#ecedef]" />
            </div>
            <div className="flex items-center space-x-2 rounded-md bg-white p-2 shadow-sm">
              <div className="h-4 w-4 rounded-full bg-[#ecedef]" />
              <div className="h-2 w-[100px] rounded-lg bg-[#ecedef]" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <p className="text-sm text-muted-foreground leading-4 mt-2">{label}</p>
  </div>
);

export default ThemeToggle;
