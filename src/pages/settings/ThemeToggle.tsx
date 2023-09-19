import { FC } from 'react';
import { useTheme } from '@/common/hooks/theme.hooks';
import { Theme } from '@/common/models/theme.models';
import { useTranslation } from '@/common/hooks/lang.hooks';
import { THEME_DARK, THEME_LIGHT, THEME_SYSTEM } from '@/constants';

const ThemeToggle: FC = () => {
  const { t } = useTranslation();
  const { setTheme } = useTheme();

  const handleChange = (theme: Theme) => () => setTheme(theme);

  return (
    <div className="flex flex-col gap-3">
      <h4 className="font-medium leading-none">{t('theme')}</h4>

      <div className="flex justify-between gap-3">
        <LightThemePlaceholder handleChange={handleChange(THEME_LIGHT)} />
        <DarkThemePlaceholder handleChange={handleChange(THEME_DARK)} />
        <SystemThemePlaceholder handleChange={handleChange(THEME_SYSTEM)} />
      </div>
    </div>
  );
};

interface IThemePlaceholder {
  handleChange: () => void;
}

const LightThemePlaceholder: FC<IThemePlaceholder> = ({ handleChange }) => (
  <div
    onClick={handleChange}
    className="items-center rounded-md border-2 border-muted p-1 hover:border-accent hover:bg-accent hover:text-accent-foreground cursor-pointer"
  >
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
);

const DarkThemePlaceholder: FC<IThemePlaceholder> = ({ handleChange }) => (
  <div
    onClick={handleChange}
    className="items-center rounded-md border-2 border-muted bg-popover p-1 hover:bg-accent hover:text-accent-foreground cursor-pointer"
  >
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
);

const SystemThemePlaceholder: FC<IThemePlaceholder> = ({ handleChange }) => (
  <div
    onClick={handleChange}
    className="relative overflow-hidden rounded-md border-2 border-muted cursor-pointer"
  >
    <div className="absolute left-1/2 overflow-hidden">
      <div className="relative left-1/2 -translate-x-full">
        <div className="items-center bg-popover p-1">
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
);

export default ThemeToggle;
