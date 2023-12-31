import {
  ChampionshipId,
  IChampionshipConf
} from './common/models/sports.models';

// THEME
export const THEME_LIGHT = 'light';
export const THEME_DARK = 'dark';
export const THEME_SYSTEM = 'system';

export const THEME_STORAGE_KEY = 'theme';
export const DEFAULT_THEME = THEME_SYSTEM;

// LANGUAGE
export const LANG_EN = 'en';
export const LANG_FR = 'fr';

export const LANGS = [LANG_EN, LANG_FR] as const;

export const LANG_STORAGE_KEY = 'language';
export const DEFAULT_LANG = LANG_EN;

// SPORTS
export const MOTORSPORTS = 'motorsports';
export const SPORTS_TYPES = [MOTORSPORTS] as const;

// CHAMIPONSHIPS

// /!\ à chaque ajout d'un nouveau championnat :
//        - ajouter son id ci-dessous
//        - ajouter son id dans le tableau {SPORT_TYPE}_CHAMPIONSHIPS
//        - ajouter sa configuration dans le tableau CHAMIPONSHIP_CONFS
//        - faire la même chose côté back

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

export const DEFAULT_CHAMPIONSHIPS: ChampionshipId[] = [
  F1,
  WEC,
  GT_WORLD_CHALLENGE
];

export const CHAMPIONSHIPS = [...MOTORSPORTS_CHAMPIONSHIPS] as const;

export const CHAMIPONSHIP_CONFS: Record<ChampionshipId, IChampionshipConf> = {
  [F1]: {
    id: F1,
    sport: MOTORSPORTS,
    color: '225,6,0', // '#E10600',
    logo: {
      dark: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/F1.svg/320px-F1.svg.png',
      light:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/F1.svg/320px-F1.svg.png'
    }
  },
  [F2]: {
    id: F2,
    sport: MOTORSPORTS,
    color: '0,146,208', // '#0090D0',
    logo: {
      dark: 'https://img.redbull.com/images/e_trim:10:transparent/bo_5px_solid_rgb:00000000/q_auto,f_png/redbullcom/2020/5/29/dr0wsisnomqykmgi6q84/formula-2-logo',
      light:
        'https://upload.wikimedia.org/wikipedia/fr/thumb/7/7a/Formula_2.svg/1200px-Formula_2.svg.png'
    }
  },
  [F3]: {
    id: F3,
    sport: MOTORSPORTS,
    color: '233,4,0', // '#E90300'
    logo: {
      dark: 'https://www.fiaformula3.com/livetiming/img/f3/logo.8.png',
      light:
        'https://upload.wikimedia.org/wikipedia/commons/5/5b/FIA_F3_Championship_logo.png'
    }
  },
  [WEC]: {
    id: WEC,
    sport: MOTORSPORTS,
    color: '12,49,102', // #0c3266
    logo: {
      dark: 'https://images.squarespace-cdn.com/content/v1/5c784c56fb22a5229ab07d42/1556052342906-TRGNLIXQDCUMHJVKHIJW/wec-logo-wht.png',
      light:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/FIA_WEC_Logo_2019.svg/langfr-330px-FIA_WEC_Logo_2019.svg.png'
    }
  },
  [F1_ACADEMY]: {
    id: F1_ACADEMY,
    sport: MOTORSPORTS,
    color: '190,17,127', // #be117e
    logo: {
      dark: 'https://www.f1academy.com/_next/static/images/fa_logo_footer-1992667600d4ff845995310220de58a8.png',
      light:
        'https://www.f1academy.com/_next/static/images/fa_logo_footer-1992667600d4ff845995310220de58a8.png'
    }
  },
  [GT_WORLD_CHALLENGE]: {
    id: GT_WORLD_CHALLENGE,
    sport: MOTORSPORTS,
    color: '227,30,18', //#e31e12
    logo: {
      // dark: 'https://www.gt-world-challenge.com/assets/img/gt-world-challenge-fanatec-aws-neg-logo.svg',
      dark: 'https://www.gt-world-challenge.com/images/logo-gt-world-challenge.png',
      light:
        'https://www.gt-world-challenge.com/images/logo-gt-world-challenge.png'
    }
  }
};

export const CHAMPIONSHIPS_STORAGE_KEY = 'championships';

// CALENDAR
export const UPCOMING = 'upcoming';
export const WEEKEND = 'weekend';
export const WEEK = 'week';
export const MONTH = 'month';

export const DEFAULT_CALENDAR_VIEW = WEEKEND;

export const CALENDAR_VIEWS = [WEEKEND, WEEK, MONTH] as const;
export const TAB_IDS = [UPCOMING, WEEKEND, WEEK, MONTH] as const;

// FETCHER
export const GET_METHOD = 'GET';
export const POST_METHOD = 'POST';
export const PUT_METHOD = 'PUT';
export const DELETE_METHOD = 'DELETE';

export const PROD_API_URL = 'https://api.sports-calendar.com';
export const DEV_API_URL = 'http://localhost:3000';

// PREFERENCES
export const PREFERENCES_STORAGE_KEY = 'preferences';

// DENISTY
export const DENSITY_NORMAL = 'normal';
export const DENSITY_COMPACT = 'compact';

export const DEFAULT_DENSITY = DENSITY_NORMAL;

export const DENSITYS = [DENSITY_NORMAL, DENSITY_COMPACT] as const;

// SESSIONS
export const FREE_PRACTICE = 'free-practice';
export const FREE_PRACTICE_1 = 'free-practice-1';
export const FREE_PRACTICE_2 = 'free-practice-2';
export const FREE_PRACTICE_3 = 'free-practice-3';
export const PRE_QUALIFYING = 'pre-qualifying';
export const QUALIFYING = 'qualifying';
export const SPRINT_SHOOTOUT = 'sprint-shootout';
export const SPRINT = 'sprint';
export const RACE = 'race';
export const RACE_1 = 'race-1';
export const RACE_2 = 'race-2';

export const SESSIONS = [
  FREE_PRACTICE,
  FREE_PRACTICE_1,
  FREE_PRACTICE_2,
  FREE_PRACTICE_3,
  PRE_QUALIFYING,
  QUALIFYING,
  SPRINT_SHOOTOUT,
  SPRINT,
  RACE,
  RACE_1,
  RACE_2
] as const;

export const SESSIONS_DURATION = {
  'free-practice': 60,
  'free-practice-1': 60,
  'free-practice-2': 60,
  'free-practice-3': 60,
  'pre-qualifying': 60,
  qualifying: 60,
  'sprint-shootout': 45,
  sprint: 60,
  race: 120,
  'race-1': 60,
  'race-2': 60
};

export const DEFAULT_SESSION_DURATION = 60;
