/**
 * League ladder snapshot.
 *
 * To update after a round, replace this whole array with the new standings.
 * Order top → bottom. The first row is position 1.
 *
 * Note: bar widths are computed from points; you don't set them manually.
 */

export type LadderRow = {
  club: string;
  /** 2-3 letter short for the auto-generated crest, e.g. "MS" */
  short: string;
  /** OKLCH hue 0-360 used for the auto-generated crest */
  hue: number;
  played: number;
  won: number;
  drawn: number;
  lost: number;
  gf: number;
  ga: number;
  points: number;
  /** Last 5 results, oldest → newest */
  form: ('W' | 'D' | 'L')[];
  /** Set true on our row */
  isUs?: boolean;
};

export const ladder: LadderRow[] = [
  { club: 'Maroochydore Saints',     short: 'MS',  hue: 60,  played: 6, won: 5, drawn: 1, lost: 0, gf: 18, ga: 5,  points: 16, form: ['W','W','W','D','W'] },
  { club: 'Coolum Beach FC',         short: 'CB',  hue: 140, played: 6, won: 4, drawn: 2, lost: 0, gf: 13, ga: 4,  points: 14, form: ['W','W','D','W','L'] },
  { club: 'Caloundra United',        short: 'CU',  hue: 0,   played: 6, won: 4, drawn: 1, lost: 1, gf: 14, ga: 7,  points: 13, form: ['W','W','D','W','L'], isUs: true },
  { club: 'Mooloolaba Pirates',      short: 'MP',  hue: 220, played: 6, won: 4, drawn: 0, lost: 2, gf: 11, ga: 9,  points: 12, form: ['W','L','W','W','L'] },
  { club: 'Buderim Wanderers',       short: 'BW',  hue: 280, played: 6, won: 3, drawn: 1, lost: 2, gf: 10, ga: 8,  points: 10, form: ['L','W','W','D','W'] },
  { club: 'Kawana FC',               short: 'KFC', hue: 30,  played: 6, won: 2, drawn: 2, lost: 2, gf: 9,  ga: 9,  points: 8,  form: ['D','W','L','W','D'] },
  { club: 'Noosa Buderim United',    short: 'NB',  hue: 100, played: 6, won: 2, drawn: 1, lost: 3, gf: 7,  ga: 10, points: 7,  form: ['W','L','L','D','W'] },
  { club: 'Glasshouse Mountains FC', short: 'GH',  hue: 180, played: 6, won: 1, drawn: 2, lost: 3, gf: 6,  ga: 12, points: 5,  form: ['D','L','L','D','L'] },
];

export const TOP4_CUTOFF = 4;
export const ROUND = 6;

/** Position of our team. */
export const ourPosition = (): number => {
  const i = ladder.findIndex((r) => r.isUs);
  return i === -1 ? -1 : i + 1;
};

/** Highest points in the ladder. */
export const topPoints = (): number => Math.max(...ladder.map((r) => r.points));

export const usRow = (): LadderRow | undefined => ladder.find((r) => r.isUs);

/** Bar width as % of the leader's points. */
export const barWidth = (pts: number): number => {
  const top = topPoints();
  return top === 0 ? 0 : Math.round((pts / top) * 80); // 80% max so '20' axis label has room
};
