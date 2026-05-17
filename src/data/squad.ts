/**
 * Squad list. Group is what the squad page sections by.
 *
 * `stat` may contain inline <strong>...</strong> markup — it's rendered as HTML.
 * `image` is the filename (under /public/assets/players/) or null until you drop one in.
 */

export type Group = 'gk' | 'def' | 'mid' | 'fwd' | 'staff';

export type Player = {
  num?: number;
  name: string;
  nick: string;
  position: string;        // shown on shirt badge: "GK", "RB", "CF · CAPT" etc.
  group: Group;
  age?: number;
  image?: string;          // e.g. "player-twomey.webp"
  imageLabel?: string;     // placeholder caption (used until image is dropped in)
  stat: string;            // may contain <strong>
  isCaptain?: boolean;
};

export const squad: Player[] = [
  // GK
  { group: 'gk', num: 7, name: 'Steve Parker', nick: '"Spider"', position: 'GK',
    image: 'player-parker.webp',
    stat: 'Six-foot-something of windmilling limbs. Yet to come for a cross he wasn\'t entitled to. <strong>Mostly</strong>.' },
  { group: 'gk', num: 4, name: 'Dan Hope', nick: '"False Hope"', position: 'GK',
    image: 'player-hope.webp',
    stat: 'Doubles as the coach. Won\'t tell you what he saw on the team-talk because he <strong>was the team-talk</strong>.' },

  // DEF
  { group: 'def', num: 2,  name: 'Jezz Morgan',     nick: '"The Mayor"',      position: 'RB',
    image: 'player-morgan.webp',
    stat: 'Knows everyone in Caloundra by name. Marks them <strong>by reputation</strong>, which is faster than turning.' },
  { group: 'def', num: 6,  name: 'Jack Aviles',     nick: '"Jaws"',           position: 'CB',
    image: 'player-aviles.webp',
    stat: 'Bites at every tackle. Chews <strong>nothing</strong>. The two are not unrelated.' },
  { group: 'def', num: 17, name: 'Keith Gargan',    nick: '"The Gargoyle"',   position: 'CB',
    image: 'player-gargan.webp',
    stat: 'Stands so still in the box opponents have asked if he\'s <strong>hurt</strong>. He\'s not. He\'s just thinking.' },
  { group: 'def', num: 16, name: 'Luke Heazlwood',  nick: '"Heazlblock"',     position: 'CB',
    image: 'player-heazlwood.webp',
    stat: 'Will block the shot, the rebound, and the rebound\'s rebound. <strong>Won\'t</strong> always be his keeper\'s idea.' },
  { group: 'def', num: 15, name: 'Gavin Nunn',      nick: '"Nunchucks"',      position: 'LB',
    image: 'player-nunn.webp',
    stat: 'Slide-tackles in conditions where slide-tackling should be <strong>illegal</strong>. Wet grass. Wet socks. Wet eyes.' },
  { group: 'def', num: 19, name: 'Paul Amici',      nick: '"Friendly Fire"',  position: 'FB',
    image: 'player-amici.webp',
    stat: 'Means well in every challenge. Has <strong>twice</strong> apologised mid-tackle.' },

  // MID
  { group: 'mid', num: 22, name: 'Brandon Sammut',     nick: '"The Engine"',         position: 'CDM',
    image: 'player-sammut.webp',
    stat: 'Box-to-box at <strong>twice</strong> the speed of anyone watching. Including the ref.' },
  { group: 'mid', num: 11, name: 'Mark Brackley',      nick: '"Brackers"',           position: 'CM',
    image: 'player-brackley.webp',
    stat: 'Plays the half-spaces because the diagram <strong>told him to</strong>. Reads tactics PDFs in the carpark.' },
  { group: 'mid', num: 8,  name: 'Andy Twomey',        nick: '"Tombstone"',          position: 'CM · CAPT', isCaptain: true,
    image: 'player-twomey.webp',
    stat: 'Buries oppositions where they stand. Six feet, <strong>studs-down</strong>, marked with the names of the strikers he\'s sent home early.' },
  { group: 'mid', num: 18, name: 'Baz Sowerby',        nick: '"Bazza"',              position: 'CAM',
    image: 'player-sowerby.webp',
    stat: 'Long-range shooter. Hits the target <strong>occasionally</strong>. Hits a parked car biennially.' },
  { group: 'mid', num: 14, name: 'CBas Van H',         nick: '"Dutch"',              position: 'CM',
    image: 'player-vanh.webp',
    stat: 'Insists football was <strong>better in the 90s</strong>. He\'d know — he was watching it on a 14-inch.' },
  { group: 'mid', num: 10, name: 'Christian Jorgensen',nick: '"The Viking"',         position: 'AM',
    image: 'player-jorgensen.webp',
    stat: 'Came up through Danish youth football. Now plays Sunday <strong>fives</strong> with the same intensity.' },
  { group: 'mid', num: 5,  name: 'Nigel Robertson',    nick: '"Robbo"',              position: 'CM',
    image: 'player-robertson.webp',
    stat: 'Quietest player in the squad — until somebody passes <strong>square</strong>. Then it\'s a podcast.' },
  { group: 'mid', num: 12, name: 'Ben Williams',       nick: '"The Lens"',           position: 'LM',
    image: 'player-williams.webp',
    stat: 'Plays midfield, films highlights, edits the <strong>highlight reel</strong>. Owns the only working tripod.' },

  // FWD
  { group: 'fwd', num: 9,  name: 'Aaron Bullock', nick: '"Big Bull"',  position: 'CF',
    image: 'player-bullock-aaron.webp',
    stat: 'Nine on the back. Nine on the menu. Yet to score with anything <strong>other</strong> than his shoulder.' },
  { group: 'fwd', num: 13, name: 'Jared Bullock', nick: '"Little Bull"', position: 'ST',
    image: 'player-bullock-jared.webp',
    stat: 'The other Bullock. Faster, lighter, <strong>quieter</strong>. Brothers don\'t pass to each other on principle.' },

  // STAFF
  { group: 'staff', name: 'Andy Twomey', nick: '"Gaffer"',
    position: 'Manager',
    image: 'player-twomey.webp',
    stat: 'Picks the team. Captains the team. Subs himself off when <strong>he</strong> deserves it. Rare event.' },
  { group: 'staff', name: 'Dan Hope', nick: '"Coach"',
    position: 'Coach',
    image: 'player-hope.webp',
    stat: 'Coaches the keepers. <strong>Is</strong> a keeper. The drills are aggressive.' },
  { group: 'staff', name: 'Jason Briggs', nick: '"Mingle Boss"',
    position: 'Mingle Operator',
    image: 'player-briggs.webp',
    stat: 'Pre-game playlist, post-game speeches, the chant book. We don\'t <strong>have</strong> a chant book; he\'s writing it.' },
  { group: 'staff', name: 'Ben Williams', nick: '"Lensy"',
    position: 'Cameraman',
    image: 'player-williams.webp',
    stat: 'Films the matches he\'s also playing in. Yet to drop the camera. <strong>Yet</strong> to drop a pass either.' },
];

export const groupLabels: Record<Group, { title: string; eyebrow: string }> = {
  gk: { title: 'Goalkeepers', eyebrow: 'Position group · 01' },
  def: { title: 'Defenders', eyebrow: 'Position group · 02' },
  mid: { title: 'Midfielders', eyebrow: 'Position group · 03' },
  fwd: { title: 'Forwards', eyebrow: 'Position group · 04' },
  staff: { title: 'Staff', eyebrow: 'Off the pitch' },
};

export const playersBy = (g: Group): Player[] => squad.filter((p) => p.group === g);

export const avgAge = (players: Player[]): number => {
  const withAge = players.filter((p) => p.age !== undefined);
  if (withAge.length === 0) return 0;
  return Math.round(withAge.reduce((n, p) => n + (p.age ?? 0), 0) / withAge.length);
};

/**
 * Stated squad average age — used on the home page hero. Override here when the
 * roster turns over rather than back-filling individual `age` fields, since the
 * site is happy showing a single team-wide number.
 */
export const teamAverageAge = 43;
