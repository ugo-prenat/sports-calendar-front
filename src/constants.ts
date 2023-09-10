import { IChampionshipConf } from './common/models/sports.models';

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
export const WEC = 'wec';
export const F1_ACADEMY = 'f1-academy';
export const GT_WORLD_CHALLENGE = 'gt-world-challenge';

export const MOTORSPORTS_CHAMPIONSHIPS = [
  F1,
  F2,
  F3,
  WEC,
  F1_ACADEMY,
  GT_WORLD_CHALLENGE
] as const;

export const UFC = 'ufc';
export const COMBAT_SPORTS_CHAMPIONSHIP = [UFC] as const;

export const CHAMIPONSHIP_CONFS: IChampionshipConf[] = [
  {
    id: F1,
    sport: MOTORSPORTS,
    color: '#e10600',
    logoUrl:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/F1.svg/320px-F1.svg.png'
  },
  {
    id: F2,
    sport: MOTORSPORTS,
    color: '#0090D0',
    logoUrl:
      'https://www.thesportsdb.com/images/media/league/badge/3iwfjg1536242234.png'
  },
  {
    id: F3,
    sport: MOTORSPORTS,
    color: '#E90300',
    logoUrl:
      'https://cdn.discordapp.com/attachments/1112352229962297434/1150433209444732988/ELxnupl53yCuIAAAAASUVORK5CYII.png'
  },
  {
    id: WEC,
    sport: MOTORSPORTS,
    color: '#0c3266',
    logoUrl:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/FIA_WEC_Logo_2019.svg/langfr-330px-FIA_WEC_Logo_2019.svg.png'
  },
  {
    id: F1_ACADEMY,
    sport: MOTORSPORTS,
    color: '#be117e',
    logoUrl:
      'https://www.f1academy.com/_next/static/images/fa_logo_footer-1992667600d4ff845995310220de58a8.png'
  },
  {
    id: GT_WORLD_CHALLENGE,
    sport: MOTORSPORTS,
    color: '#e31e12',
    logoUrl:
      'https://www.gt-world-challenge.com/images/logo-gt-world-challenge.png'
  },
  {
    id: UFC,
    sport: COMBAT_SPORTS,
    color: '#ff0000',
    logoUrl:
      'https://logos-marques.com/wp-content/uploads/2021/03/UFC-Logo-768x434.png'
  }
];

// CALENDAR
export const UPCOMING = 'upcoming';
export const WEEKEND = 'weekend';
export const WEEK = 'week';
export const MONTH = 'month';

export const DEFAULT_CALENDAR_VIEW = WEEKEND;

export const CALENDAR_VIEWS = [WEEKEND, WEEK, MONTH] as const;
export const TAB_IDS = [UPCOMING, WEEKEND, WEEK, MONTH] as const;
