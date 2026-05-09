export type Sponsor = {
  name: string;
  tier: string;        // shown beneath the logo, e.g. "Principal"
  logo: string;        // path under /public, e.g. "/assets/sponsors/max.png"
  href?: string;
  ariaLabel?: string;
  /** Optional inline image style override (max-height/width tweaks) */
  imgStyle?: string;
};

export const sponsors: Sponsor[] = [
  {
    name: 'hummel',
    tier: 'Kit',
    logo: '/assets/sponsors/hummel.png',
    ariaLabel: 'Hummel — official kit supplier',
    imgStyle: 'max-height:96px; max-width:200px;',
  },
  {
    name: 'Max Property',
    tier: 'Principal',
    logo: '/assets/sponsors/max.png',
    ariaLabel: 'Max Property Group',
  },
  {
    name: 'Jericho — Eat Drink Local',
    tier: 'Match Day',
    logo: '/assets/sponsors/jericho.png',
    ariaLabel: 'Jericho — Eat · Drink · Local',
  },
];
