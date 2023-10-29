import { Lang } from '@/common/contexts/lang/lang.models';
import { Theme } from '@/common/contexts/theme/theme.models';

export interface ILanguageSelect {
  label: string;
  value: Lang;
}

export interface IThemeSelect {
  label: string;
  value: Theme;
}
