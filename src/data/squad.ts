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
  image?: string;          // e.g. "player-twomey.jpg"
  imageLabel?: string;     // placeholder caption (used until image is dropped in)
  stat: string;            // may contain <strong>
  isCaptain?: boolean;
};

export const squad: Player[] = [
  // GK
  { group: 'gk', num: 1,  name: 'Pete Hollings',  nick: '"Hollywood"',           position: 'GK', age: 42,
    imageLabel: 'player-hollings.jpg',
    stat: 'Once saved a penalty, refused to leave the dressing room until everyone watched the replay. <strong>4 clean sheets</strong> · 2026.' },
  { group: 'gk', num: 13, name: 'Stuart McFee',   nick: '"Big Stu"',             position: 'GK', age: 40,
    imageLabel: 'player-mcfee.jpg',
    stat: 'Outfield until 2024. Now keeps because nobody else volunteered. <strong>Best save</strong>: round 2, 2025, vs Saints — ask him.' },

  // DEF
  { group: 'def', num: 2,  name: 'Liam Grant',     nick: '"Granty"',  position: 'RB', age: 37,
    imageLabel: 'player-grant.jpg',
    stat: 'Overlapping runs aged <strong>37</strong>. The lung capacity to do it is, frankly, suspicious.' },
  { group: 'def', num: 4,  name: 'Dave Thompson',  nick: '"Tank"',    position: 'CB', age: 39,
    imageLabel: 'player-thompson.jpg',
    stat: 'Hasn\'t lost a header in <strong>three seasons</strong>. Did once concede one. We don\'t talk about it.' },
  { group: 'def', num: 5,  name: 'Chuks Okafor',   nick: '"The Wall"',position: 'CB', age: 41,
    imageLabel: 'player-okafor.jpg',
    stat: 'Played semi-pro in his twenties. Reminds you of this <strong>at every set piece</strong>.' },
  { group: 'def', num: 3,  name: 'Mark Westin',    nick: '"Westy"',   position: 'LB', age: 38,
    imageLabel: 'player-westin.jpg',
    stat: 'Left foot of god. Right foot purely <strong>decorative</strong>.' },
  { group: 'def', num: 15, name: 'Tom Burgess',    nick: '"Burger"',  position: 'CB', age: 39,
    imageLabel: 'player-burgess.jpg',
    stat: 'Tackles cleanly. Celebrates <strong>aggressively</strong>. Both have caused minor incidents.' },

  // MID
  { group: 'mid', num: 6,  name: 'Sanjay Rao',     nick: '"The Anchor"',          position: 'CDM', age: 40,
    imageLabel: 'player-rao.jpg',
    stat: 'Stays in his half. <strong>Always</strong>. Even at corners.' },
  { group: 'mid', num: 8,  name: 'Per Andersen',   nick: '"Per-fect"',            position: 'CM',  age: 38,
    imageLabel: 'player-andersen.jpg',
    stat: 'Pass-completion leader. Also the team <strong>spreadsheet</strong> guy. We\'ve all noticed.' },
  { group: 'mid', num: 10, name: 'Joe Quinn',      nick: '"Number Ten"',          position: 'CAM', age: 36,
    imageLabel: 'player-quinn.jpg',
    stat: 'Wore <strong>10</strong> on his under-12s shirt. Wears 10 now. Will die in 10.' },
  { group: 'mid', num: 14, name: 'Étienne Laurent',nick: '"Le Croissant"',        position: 'CM',  age: 37,
    imageLabel: 'player-laurent.jpg',
    stat: 'French. Insists tactics work better in French. <strong>Hard to argue</strong> with the results.' },
  { group: 'mid', num: 17, name: 'Ravi Singh',     nick: '"Speedy Ravi"',         position: 'RW',  age: 36,
    imageLabel: 'player-singh.jpg',
    stat: 'Quickest in the squad over <strong>5 metres</strong>. Past that, the lungs close shop.' },
  { group: 'mid', num: 11, name: 'Tony Pirelli',   nick: '"The Tyre"',            position: 'LW',  age: 39,
    imageLabel: 'player-pirelli.jpg',
    stat: 'Round, dependable, <strong>never punctures</strong>. Take from that what you will.' },

  // FWD
  { group: 'fwd', num: 9,  name: 'Andy Twomey',       nick: '"The Skipper"',         position: 'CF · CAPT', age: 36, isCaptain: true,
    imageLabel: 'player-twomey.jpg',
    stat: 'Captain. Top scorer. Has scored more <strong>own-goals at training</strong> than competitive games. Won\'t be drawn on it.' },
  { group: 'fwd', num: 7,  name: 'Marko Pajic',       nick: '"Pelé from Caloundra"', position: 'RW', age: 37,
    imageLabel: 'player-pajic.jpg',
    stat: 'Took up football aged 36. Now reckons he could\'ve gone <strong>pro</strong>.' },
  { group: 'fwd', num: 19, name: 'Brendan Fitzgerald',nick: '"Fitzy"',               position: 'ST', age: 35,
    imageLabel: 'player-fitzgerald.jpg',
    stat: 'Striker by trade, <strong>shouting</strong> by hobby. Useful in both phases.' },

  // STAFF
  { group: 'staff', name: 'Steve Merrick', nick: '"Boss"',
    position: 'Manager',
    imageLabel: 'staff-merrick.jpg',
    stat: 'Diamond formation enthusiast. Tactics whiteboard is <strong>colour-coded</strong>. Nobody asked.' },
  { group: 'staff', name: 'Dr. Yara Ali', nick: '"The Magic Sponge"',
    position: 'Physio',
    imageLabel: 'staff-ali.jpg',
    stat: 'Has heard "I think it\'s just tight" <strong>312 times</strong> this season. Believed it once.' },
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
