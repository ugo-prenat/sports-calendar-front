import { Lang } from '@/common/models/lang.models';
import { Theme } from '@/common/models/theme.models';

export interface ILanguageSelect {
  label: string;
  value: Lang;
}

export interface IThemeSelect {
  label: string;
  value: Theme;
}
