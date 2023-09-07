// THEME
export const THEME_LIGHT = 'light';
export const THEME_DARK = 'dark';
export const THEME_SYSTEM = 'system';

export const THEME_STORAGE_KEY = 'theme';
export const DEFAULT_THEME = THEME_SYSTEM;

// LANGUAGE
export const LANG_EN = 'en';
export const LANG_FR = 'fr';

export const LANG_STORAGE_KEY = 'language';
export const DEFAULT_LANG = LANG_EN;

// SPORTS
export const MOTORSPORTS = 'motorsports';
export const COMBAT_SPORTS = 'combat-sports';
export const SPORTS_TYPES = [MOTORSPORTS, COMBAT_SPORTS] as const;

// CHAMIPONSHIPS

// /!\ à chaque ajout d'un nouveau championnat :
//        - ajouter son id ci-dessous
//        - ajouter son id dans le tableau {SPORT_TYPE}_CHAMPIONSHIPS
//        - ajouter sa configuration dans le tableau CHAMIPONSHIP_CONFS

export const F1 = 'f1';
export const F2 = 'f2';
export const F3 = 'f3';
export const F1_ACADEMY = 'f1-academy';
export const GT_WORLD_CHALLENGE = 'gt-world-challenge';

export const MOTORSPORTS_CHAMPIONSHIPS = [
  F1,
  F2,
  F3,
  F1_ACADEMY,
  GT_WORLD_CHALLENGE
] as const;

export const UFC = 'ufc';
export const COMBAT_SPORTS_CHAMPIONSHIP = [UFC] as const;

// SPORTS CONFS
export const CHAMIPONSHIP_CONFS = [
  {
    id: F1,
    name: 'Formula 1',
    shortName: 'F1',
    logo: {
      default:
        'https://www.formula1.com/etc/designs/fom-website/images/f1_logo.svg',
      light:
        'https://www.formula1.com/etc/designs/fom-website/images/f1_logo.svg',
      dark: 'https://www.formula1.com/etc/designs/fom-website/images/f1_logo.svg'
    },
    color: '#ff0000'
  }
];

// CALENDAR
export const UPCOMING = 'upcoming';
export const WEEKEND = 'weekend';
export const WEEK = 'week';
export const MONTH = 'month';

export const DEFAULT_CALENDAR_VIEW = WEEKEND;

export const CALENDAR_VIEWS = [WEEKEND, WEEK, MONTH] as const;
