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
    date: '2026-03-27T18:30',
    comp: 'League · R1',
    competition: 'league',
    homeAway: 'H',
    opponent: 'Buddina United',
    opponentShort: 'BU',
    opponentHue: 200,
    venue: 'Palmview Sports Complex · Field 1',
    result: { gf: 1, ga: 5 },
  },
  {
    date: '2026-04-17T20:15',
    comp: 'League · R2',
    competition: 'league',
    homeAway: 'H',
    opponent: 'Unity Strikers',
    opponentShort: 'US',
    opponentHue: 240,
    venue: 'Palmview Sports Complex · Field 1',
    result: { gf: 7, ga: 2 },
  },
  {
    date: '2026-04-24T18:30',
    comp: 'League · R3',
    competition: 'league',
    homeAway: 'H',
    opponent: 'Eumundi Platinum',
    opponentShort: 'EP',
    opponentHue: 0,
    venue: 'Palmview Sports Complex · Field 1',
    result: { gf: 4, ga: 0 },
    reportSlug: 'round-03-eumundi-magpies',
  },
  {
    date: '2026-05-08T20:15',
    comp: 'League · R4',
    competition: 'league',
    homeAway: 'H',
    opponent: 'Stella Swans',
    opponentShort: 'SS',
    opponentHue: 220,
    venue: 'Kelman St',
    result: { gf: 2, ga: 4 },
    reportSlug: 'round-04-stella-swans',
  },
  {
    date: '2026-05-15T18:30',
    comp: 'League · R5',
    competition: 'league',
    homeAway: 'A',
    opponent: 'Currimundi Cobias',
    opponentShort: 'CC',
    opponentHue: 50,
    venue: 'Bli Bli FC',
    result: { gf: 2, ga: 6 },
    reportSlug: 'round-05-currimundi-cobias',
  },
  {
    date: '2026-05-22T20:15',
    comp: 'League · R6',
    competition: 'league',
    homeAway: 'H',
    opponent: 'Buderim Power',
    opponentShort: 'BP',
    opponentHue: 210,
    venue: 'Maroochydore (Fishermans Road) · Field 5',
    result: { gf: 3, ga: 5 },
    reportSlug: 'round-06-buderim-power',
  },
  {
    date: '2026-06-05T20:15',
    comp: 'League · R7',
    competition: 'league',
    homeAway: 'A',
    opponent: 'Buddina United',
    opponentShort: 'BU',
    opponentHue: 200,
    venue: 'Recreation Drive',
    result: { gf: 0, ga: 4 },
    reportSlug: 'round-07-buddina-united',
  },
  {
    date: '2026-06-09T18:30',
    comp: 'League · R8',
    competition: 'league',
    homeAway: 'H',
    opponent: 'Coolum Hammers',
    opponentShort: 'CH',
    opponentHue: 30,
    venue: 'Parklakes · Field 1',
    result: { gf: 7, ga: 1 },
    reportSlug: 'round-08-coolum-hammers',
  },
  {
    date: '2026-06-12T20:15',
    comp: 'League · R9',
    competition: 'league',
    homeAway: 'H',
    opponent: 'Unity Strikers',
    opponentShort: 'US',
    opponentHue: 240,
    venue: 'Parklakes · Field 1',
    result: { gf: 2, ga: 3 },
    reportSlug: 'round-09-unity-strikers',
  },
  {
    date: '2026-06-19T18:30',
    comp: 'League · R10',
    competition: 'league',
    homeAway: 'H',
    opponent: 'Eumundi Platinum',
    opponentShort: 'EP',
    opponentHue: 0,
    venue: 'Multi-sport Complex 2 · Field 2',
  },
  {
    date: '2026-07-10T18:30',
    comp: 'League · R11',
    competition: 'league',
    homeAway: 'H',
    opponent: 'Stella Swans',
    opponentShort: 'SS',
    opponentHue: 220,
    venue: 'Palmview Sports Complex · Field 1',
  },
  {
    date: '2026-07-17T20:15',
    comp: 'League · R12',
    competition: 'league',
    homeAway: 'A',
    opponent: 'Currimundi Cobias',
    opponentShort: 'CC',
    opponentHue: 50,
    venue: 'Multi-sport Complex 2 · Field 2',
  },
  {
    date: '2026-07-24T20:15',
    comp: 'League · R13',
    competition: 'league',
    homeAway: 'H',
    opponent: 'Buderim Power',
    opponentShort: 'BP',
    opponentHue: 210,
    venue: 'Maroochydore (Fishermans Road) · Field 1',
  },
  {
    date: '2026-07-31T18:30',
    comp: 'League · R14',
    competition: 'league',
    homeAway: 'H',
    opponent: 'Coolum Hammers',
    opponentShort: 'CH',
    opponentHue: 30,
    venue: 'Parklakes · Field 2',
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
