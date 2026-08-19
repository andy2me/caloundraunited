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
  { club: 'Stella Swans',       short: 'SS', hue: 220, logo: '/assets/clubs/stella-swans.png',   played: 14, won: 11, drawn: 2, lost: 1,  gf: 76, ga: 20, points: 35, form: ['W','W','W','W','D'] },
  { club: 'Buddina United',     short: 'BU', hue: 200, logo: '/assets/clubs/buddina-united.png', played: 14, won: 11, drawn: 2, lost: 1,  gf: 61, ga: 14, points: 35, form: ['W','W','W','W','D'] },
  { club: 'Currimundi Cobias',  short: 'CC', hue: 50,  logo: '/assets/clubs/currimundi.png',     played: 14, won: 9,  drawn: 2, lost: 3,  gf: 57, ga: 16, points: 29, form: ['W','L','W','W','D'] },
  { club: 'Buderim Power',      short: 'BP', hue: 210, logo: '/assets/clubs/buderim.png',        played: 14, won: 4,  drawn: 5, lost: 5,  gf: 31, ga: 35, points: 17, form: ['L','L','W','D','D'] },
  { club: 'Unity Strikers',     short: 'US', hue: 240, logo: '/assets/clubs/unity-strikers.png', played: 14, won: 5,  drawn: 2, lost: 7,  gf: 27, ga: 39, points: 17, form: ['L','W','L','L','W'] },
  { club: 'Caloundra United',   short: 'CU', hue: 0,                                              played: 14, won: 4,  drawn: 1, lost: 9,  gf: 32, ga: 39, points: 13, form: ['W','L','L','D','L'], isUs: true },
  { club: 'Coolum Hammers',     short: 'CH', hue: 30,  logo: '/assets/clubs/coolum-hammers.png', played: 14, won: 4,  drawn: 1, lost: 9,  gf: 27, ga: 71, points: 13, form: ['L','L','L','L','W'] },
  { club: 'Eumundi Platinum',   short: 'EP', hue: 0,   logo: '/assets/clubs/eumundi.png',        played: 14, won: 0,  drawn: 1, lost: 13, gf: 10, ga: 87, points: 1,  form: ['L','L','L','L','L'] },
];

export const TOP4_CUTOFF = 4;
export const ROUND = 14;

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
