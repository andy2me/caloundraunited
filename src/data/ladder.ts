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
  /** Optional path under /public to a club crest image. If set, used instead of the SVG fallback. */
  logo?: string;
  played: number;
  won: number;
  drawn: number;
  lost: number;
  gf: number;
  ga: number;
  points: number;
  /** Last 5 results, oldest → newest. Optional — leave undefined when not available. */
  form?: ('W' | 'D' | 'L')[];
  /** Set true on our row */
  isUs?: boolean;
};

export const ladder: LadderRow[] = [
  { club: 'Buddina United',     short: 'BU', hue: 200, logo: '/assets/clubs/buddina-united.png', played: 8, won: 6, drawn: 1, lost: 1, gf: 36, ga: 9,  points: 19, form: ['D','W','W','W','W'] },
  { club: 'Stella Swans',       short: 'SS', hue: 220, logo: '/assets/clubs/stella-swans.png',   played: 8, won: 6, drawn: 1, lost: 1, gf: 41, ga: 16, points: 19, form: ['W','W','W','L','W'] },
  { club: 'Currimundi Cobias',  short: 'CC', hue: 50,  logo: '/assets/clubs/currimundi.png',     played: 8, won: 5, drawn: 1, lost: 2, gf: 37, ga: 12, points: 16, form: ['W','D','W','W','L'] },
  { club: 'Buderim Power',      short: 'BP', hue: 210, logo: '/assets/clubs/buderim.png',        played: 8, won: 3, drawn: 3, lost: 2, gf: 19, ga: 23, points: 12, form: ['D','D','W','W','D'] },
  { club: 'Unity Strikers',     short: 'US', hue: 240, logo: '/assets/clubs/unity-strikers.png', played: 9, won: 3, drawn: 2, lost: 4, gf: 21, ga: 33, points: 11, form: ['D','W','L','D','W'] },
  { club: 'Coolum Hammers',     short: 'CH', hue: 30,  logo: '/assets/clubs/coolum-hammers.png', played: 9, won: 3, drawn: 1, lost: 5, gf: 24, ga: 30, points: 10, form: ['L','L','L','D','W'] },
  { club: 'Caloundra United',   short: 'CU', hue: 0,                                              played: 9, won: 3, drawn: 0, lost: 6, gf: 28, ga: 30, points: 9,  form: ['L','L','L','W','L'], isUs: true },
  { club: 'Eumundi Platinum',   short: 'EP', hue: 0,   logo: '/assets/clubs/eumundi.png',        played: 9, won: 0, drawn: 1, lost: 8, gf: 8,  ga: 61, points: 1,  form: ['L','L','L','D','L'] },
];

export const TOP4_CUTOFF = 4;
export const ROUND = 12;

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
