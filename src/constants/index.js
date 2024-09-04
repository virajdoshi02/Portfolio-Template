import {
  frontend,
  backend,
  ux,
  prototyping,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  git,
  figma,
  postgresql,
  rubyrails,
  graphql,
  komikult,
  leaderboard,
  math,
  movie,
  nyeusi,
  coverhunt,
  dcc,
  kelhel,
  microverse,
} from '../assets';

export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'projects',
    title: 'Projects',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];

const services = [
  {
    title: 'Extensive experience in Unity C#',
    icon: frontend,
  },
  {
    title: 'Game design Level design Writing',
    icon: backend,
  },
  {
    title: 'Game systems design in Unity, Godot, PyGame and many others',
    icon: ux,
  },
  {
    title: 'Iterative design Prototyping Playtesting Working ',
    icon: prototyping,
  }, 
];

const technologies = [
  {
    name: 'Unity',
    icon: html,
  },
  {
    name: 'Godot',
    icon: typescript,
  },
  {
    name: 'PyGame',
    icon: tailwind,
  },
  { 
    name: 'C',
    icon: postgresql,
  },
  {
    name: 'C#',
    icon: css,
  }, 
  {
    name: 'C++',
    icon: figma,
  },
  {
    name: 'Python',
    icon: redux,
  },
  {
    name: 'Java',
    icon: nodejs,
  },
  {
    name: 'Java Swing',
    icon: rubyrails,
  },
  {
    name: 'OpenGL',
    icon: javascript,
  },
  {
    name: 'Photoshop',
    icon: graphql,
  },
  {
    name: 'Android Studio',
    icon: reactjs,
  },
  {
    name: 'git',
    icon: git,
  },
];

const experiences = [
  {
    id: 'project-1',
    name: '2D Dungeon generator',
    description: 'I created a 2D random dungeon generator in Godot using MSTs and some other graph theory',
    tags: [
    ],
    image: typescript,
    repo: 'https://github.com/virajdoshi02/2DRandomDungeon',
  },
  {
    id: 'project-2',
    name: 'Fixed shooter',
    description:
      'A Space Invaders-inspired fixed shooter created using Java, and displayed using Swing',
    tags: [
    ],
    image: rubyrails,
    repo: 'https://github.com/virajdoshi02/SpaceShooter',
  },
  {
    id: 'project-3',
    name: 'Orb Monster Minigame',
    description: 'I am part of UPGRADE, a game dev club at UPenn, and I created one of the minigames minigame for our Gatcha Game',
    tags: [
    ],
    image: html,
    repo: 'https://github.com/virajdoshi02/OrbMinigame',
  },
];

const projects = [
  {
    id: 'project-1',
    name: 'Godot ARPG',
    description: 'A Zelda-inspired top-down ARPG created in Godot.',
    tags: [
    ],
    image: typescript,
    repo: 'https://github.com/virajdoshi02/TDRPG',
  },
  {
    id: 'project-2',
    name: 'Homefront',
    description:
      'A sci-fi FPS with unique intellectual challenges sprinkled in: Coding Questions',
    tags: [
    ],
    image: html,
    repo: 'https://github.com/virajdoshi02/HomefrontFPS',
  },
  {
    id: 'project-3',
    name: 'Edu game for CHOP',
    description: 'This is an educational game for children with down syndrome I created whilst contracted with the Children\'s Hospital of Philadelphia',
    tags: [
    ],
    image: html,
    repo: 'https://github.com/virajdoshi02/CHOPGame',
  },
  {
    id: 'project-4',
    name: 'Botanic Defenders',
    description: `With a few members of my club, I created a plant-themed multiplayer tower defence game in Unity`,
    tags: [
    ],
    image: html,
    repo: 'https://github.com/virajdoshi02/BotanicDefendersGame',
  },
];

export { services, technologies, experiences, projects };
