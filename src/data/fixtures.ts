/**
 * Single source of truth for all fixtures.
 *
 * To update after a match:
 *   1. Find the fixture row below.
 *   2. Add a `result: { gf, ga }` field with goals-for / goals-against.
 *   3. (Optional) Set `reportSlug` to the slug of the news post in src/content/news/.
 *
 * To add a new fixture, append a row in the right month group. Order doesn't
 * matter — pages sort by `date`.
 */

export type Competition = 'league' | 'cup' | 'friendly';
export type HomeAway = 'H' | 'A' | 'BYE';

export type Fixture = {
  /** ISO 8601 in local AEST time, no timezone suffix. e.g. "2026-03-14T16:00" */
  date: string;
  /** Round label as shown in the table, e.g. "League · R1" or "Cup · R1" */
  comp: string;
  competition: Competition;
  homeAway: HomeAway;
  /** Full opponent name */
  opponent: string;
  /** 2-3 letter short for crest badge, e.g. "MS" */
  opponentShort: string;
  /** OKLCH hue 0-360 used for the auto-generated opponent crest */
  opponentHue: number;
  venue: string;
  /** Score after the match. Omit for upcoming fixtures. */
  result?: { gf: number; ga: number };
  /** Slug of the matching news post in src/content/news/, if there's one */
  reportSlug?: string;
  /** Set true on a BYE row */
  bye?: boolean;
};

export const fixtures: Fixture[] = [
  {
    date: '2026-03-14T16:00',
    comp: 'League · R1',
    competition: 'league',
    homeAway: 'H',
    opponent: 'Maroochydore Saints',
    opponentShort: 'MS',
    opponentHue: 60,
    venue: 'Russell Barker Memorial Park · Pitch 2',
    result: { gf: 2, ga: 0 },
    reportSlug: 'round-01-maroochydore-saints',
  },
  {
    date: '2026-03-21T14:00',
    comp: 'League · R2',
    competition: 'league',
    homeAway: 'A',
    opponent: 'Buderim Wanderers',
    opponentShort: 'BW',
    opponentHue: 280,
    venue: 'Mountain View Reserve',
    result: { gf: 4, ga: 2 },
    reportSlug: 'round-02-buderim-wanderers',
  },
  {
    date: '2026-04-11T14:00',
    comp: 'League · R4',
    competition: 'league',
    homeAway: 'A',
    opponent: 'Kawana FC',
    opponentShort: 'KFC',
    opponentHue: 30,
    venue: 'Kawana Sportshub · Field 3',
    result: { gf: 3, ga: 2 },
    reportSlug: 'round-04-kawana-fc',
  },
  {
    date: '2026-04-25T16:00',
    comp: 'League · R5',
    competition: 'league',
    homeAway: 'H',
    opponent: 'Glasshouse Mountains FC',
    opponentShort: 'GH',
    opponentHue: 180,
    venue: 'Russell Barker Memorial Park · Pitch 2',
    result: { gf: 1, ga: 1 },
    reportSlug: 'round-05-glasshouse-draw',
  },
  {
    date: '2026-05-02T14:00',
    comp: 'League · R6',
    competition: 'league',
    homeAway: 'A',
    opponent: 'Coolum Beach FC',
    opponentShort: 'CB',
    opponentHue: 140,
    venue: 'Tickle Park, Coolum',
    result: { gf: 3, ga: 1 },
    reportSlug: 'round-06-coolum-beach',
  },
  {
    date: '2026-05-16T16:00',
    comp: 'League · R7',
    competition: 'league',
    homeAway: 'H',
    opponent: 'Noosa Buderim United',
    opponentShort: 'NB',
    opponentHue: 100,
    venue: 'Russell Barker Memorial Park · Pitch 2',
  },
  {
    date: '2026-05-23T14:00',
    comp: 'League · R8',
    competition: 'league',
    homeAway: 'A',
    opponent: 'Beerwah Bulldogs',
    opponentShort: 'BB',
    opponentHue: 0,
    venue: 'Beerwah Sports Ground',
  },
  {
    date: '2026-05-30T00:00',
    comp: 'League',
    competition: 'league',
    homeAway: 'BYE',
    opponent: 'Bye round — no fixture',
    opponentShort: '',
    opponentHue: 0,
    venue: '—',
    bye: true,
  },
  {
    date: '2026-06-06T16:00',
    comp: 'League · R9',
    competition: 'league',
    homeAway: 'H',
    opponent: 'Mooloolaba Pirates',
    opponentShort: 'MP',
    opponentHue: 220,
    venue: 'Russell Barker Memorial Park · Pitch 2',
  },
  {
    date: '2026-06-13T14:00',
    comp: 'League · R10',
    competition: 'league',
    homeAway: 'A',
    opponent: 'Maroochydore Saints',
    opponentShort: 'MS',
    opponentHue: 60,
    venue: 'Maroochydore Sports Field',
  },
  {
    date: '2026-06-20T16:00',
    comp: 'Cup · R1',
    competition: 'cup',
    homeAway: 'H',
    opponent: 'TBC',
    opponentShort: 'TBC',
    opponentHue: 0,
    venue: 'Russell Barker Memorial Park · Pitch 2',
  },
  {
    date: '2026-06-27T16:00',
    comp: 'League · R11',
    competition: 'league',
    homeAway: 'H',
    opponent: 'Buderim Wanderers',
    opponentShort: 'BW',
    opponentHue: 280,
    venue: 'Russell Barker Memorial Park · Pitch 2',
  },
  {
    date: '2026-07-11T16:00',
    comp: 'League · R13',
    competition: 'league',
    homeAway: 'H',
    opponent: 'Kawana FC',
    opponentShort: 'KFC',
    opponentHue: 30,
    venue: 'Russell Barker Memorial Park · Pitch 2',
  },
  {
    date: '2026-07-18T14:00',
    comp: 'League · R14',
    competition: 'league',
    homeAway: 'A',
    opponent: 'Glasshouse Mountains FC',
    opponentShort: 'GH',
    opponentHue: 180,
    venue: 'Beerburrum Sports Field',
  },
];

// ---------- Derived helpers ----------

export type Played = Fixture & { result: NonNullable<Fixture['result']> };

const isPlayed = (f: Fixture): f is Played => !!f.result && !f.bye;

export const sortedByDate = [...fixtures].sort((a, b) => a.date.localeCompare(b.date));

export const playedFixtures = sortedByDate.filter(isPlayed);

/** Result outcome for a played fixture, from our side. */
export const outcome = (f: Played): 'W' | 'D' | 'L' => {
  if (f.result.gf > f.result.ga) return 'W';
  if (f.result.gf < f.result.ga) return 'L';
  return 'D';
};

/** Last 5 results, oldest → newest. */
export const formLast5 = (): ('W' | 'D' | 'L')[] =>
  playedFixtures.slice(-5).map(outcome);

export const stats = (() => {
  const gf = playedFixtures.reduce((n, f) => n + f.result.gf, 0);
  const ga = playedFixtures.reduce((n, f) => n + f.result.ga, 0);
  const w = playedFixtures.filter((f) => outcome(f) === 'W').length;
  const d = playedFixtures.filter((f) => outcome(f) === 'D').length;
  const l = playedFixtures.filter((f) => outcome(f) === 'L').length;
  return { played: playedFixtures.length, won: w, drawn: d, lost: l, gf, ga };
})();

/** Most-recent played fixture. */
export const lastFixture = (): Played | undefined =>
  playedFixtures[playedFixtures.length - 1];

/** Soonest upcoming non-bye fixture from now. */
export const nextFixture = (now = new Date()): Fixture | undefined => {
  const nowIso = now.toISOString().slice(0, 16);
  return sortedByDate.find((f) => !f.bye && !f.result && f.date >= nowIso)
    ?? sortedByDate.find((f) => !f.bye && !f.result);
};

/** Group fixtures by month label, e.g. "March 2026" — preserves order. */
export const byMonth = (list: Fixture[] = sortedByDate): { month: string; rows: Fixture[] }[] => {
  const groups = new Map<string, Fixture[]>();
  const monthName = (iso: string) => {
    const d = new Date(iso);
    return d.toLocaleDateString('en-AU', { month: 'long', year: 'numeric' });
  };
  for (const f of list) {
    const m = monthName(f.date);
    if (!groups.has(m)) groups.set(m, []);
    groups.get(m)!.push(f);
  }
  return [...groups.entries()].map(([month, rows]) => ({ month, rows }));
};

/** Format a fixture date for display. e.g. "Sat 14 Mar · 4:00 PM" */
export const formatFixtureDate = (f: Fixture): string => {
  if (f.bye) {
    const d = new Date(f.date);
    return `${d.toLocaleDateString('en-AU', { weekday: 'short', day: '2-digit', month: 'short' })} · BYE`;
  }
  const d = new Date(f.date);
  const day = d.toLocaleDateString('en-AU', { weekday: 'short', day: '2-digit', month: 'short' });
  const time = d.toLocaleTimeString('en-AU', { hour: 'numeric', minute: '2-digit', hour12: true }).replace(/\s/g, ' ');
  return `${day} · ${time}`;
};
