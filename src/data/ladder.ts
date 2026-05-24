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
  { club: 'Stella Swans',       short: 'SS', hue: 220, logo: '/assets/clubs/stella-swans.png',   played: 5, won: 4, drawn: 1, lost: 0, gf: 28, ga: 10, points: 13, form: ['W','D','W','W','W'] },
  { club: 'Currimundi Cobias',  short: 'CC', hue: 50,  logo: '/assets/clubs/currimundi.jpg',     played: 6, won: 4, drawn: 1, lost: 1, gf: 25, ga: 9,  points: 13, form: ['W','D','W','W','W'] },
  { club: 'Buddina United',     short: 'BU', hue: 200, logo: '/assets/clubs/buddina-united.png', played: 5, won: 3, drawn: 1, lost: 1, gf: 19, ga: 9,  points: 10, form: ['W','L','D','W','W'] },
  { club: 'Buderim Power',      short: 'BP', hue: 210, logo: '/assets/clubs/buderim.png',        played: 5, won: 2, drawn: 2, lost: 1, gf: 14, ga: 10, points: 8,  form: ['W','D','D','L','W'] },
  { club: 'Caloundra United',   short: 'CU', hue: 0,                                              played: 6, won: 2, drawn: 0, lost: 4, gf: 19, ga: 22, points: 6,  form: ['W','W','L','L','L'], isUs: true },
  { club: 'Coolum Hammers',     short: 'CH', hue: 30,  logo: '/assets/clubs/coolum-hammers.png', played: 5, won: 2, drawn: 0, lost: 3, gf: 12, ga: 20, points: 6,  form: ['W','W','L','L','L'] },
  { club: 'Unity Strikers',     short: 'US', hue: 240, logo: '/assets/clubs/unity-strikers.jpg', played: 6, won: 1, drawn: 1, lost: 4, gf: 11, ga: 31, points: 4,  form: ['L','D','W','L','L'] },
  { club: 'Eumundi Platinum',   short: 'EP', hue: 0,   logo: '/assets/clubs/eumundi.png',        played: 4, won: 0, drawn: 0, lost: 4, gf: 5,  ga: 22, points: 0,  form: ['L','L','L','L'] },
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
