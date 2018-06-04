export let matchesData = [
  {
    id: 0,
    players: [0, 1],
    teams: [0, 1],
    score: [3, 1],
    date: "2018-02-26T18:23:56.611Z"
  },
  {
    id: 1,
    players: [0, 2],
    teams: [2, 3],
    score: [3, 4],
    date: "2018-02-27T16:31:32.897Z"
  },
  {
    id: 2,
    players: [1, 2],
    teams: [4, 5],
    score: [3, 2],
    date: "2018-02-28T18:57:56.431Z"
  },
  {
    id: 3,
    players: [1, 0],
    teams: [1, 5],
    score: [3, 2],
    date: "2018-03-02T10:23:56.611Z"
  },
  {
    id: 4,
    players: [2, 0],
    teams: [2, 5],
    score: [1, 4],
    date: "2018-03-02T10:34:27.981Z"
  },
  {
    id: 5,
    players: [1, 2],
    teams: [1, 0],
    score: [3, 2],
    date: "2018-03-02T18:03:09.007Z"
  }
];

export let playersData = [
  {
    id: 0,
    name: "Beber",
    played: 4,
    wins: 2,
    draws: 0,
    losses: 2,
    points: 6,
    goaldiff: 3,
    for: 12,
    against: 9,
    trophies: [0, 2, 3]
  },
  {
    id: 1,
    name: "Borcky",
    played: 4,
    wins: 3,
    draws: 0,
    losses: 1,
    points: 9,
    goaldiff: 1,
    for: 10,
    against: 9,
    trophies: [1, 4]
  },
  {
    id: 2,
    name: "Tutur",
    played: 4,
    wins: 1,
    draws: 0,
    losses: 3,
    points: 3,
    goaldiff: -4,
    for: 9,
    against: 13,
    trophies: [2, 4]
  }
];

export let teamsData = [
  {
    id: 0,
    name: "Liverpool",
    img: "../images/resultats_recents/liv.jpg"
  },
  {
    id: 1,
    name: "Man City",
    img: "../images/resultats_recents/mancity.jpg"
  },
  {
    id: 2,
    name: "RMA",
    img: "../images/resultats_recents/rma.jpg"
  },
  {
    id: 3,
    name: "FCB",
    img: "../images/resultats_recents/fcb.jpg"
  },
  {
    id: 4,
    name: "Arsenal",
    img: "../images/resultats_recents/arsn.jpg"
  },
  {
    id: 5,
    name: "Juventus",
    img: "../images/resultats_recents/juv.jpg"
  }
];

export let trophiesData = [
  {
    id: 0,
    name: "Ligue des Champions",
    description: "Finir premier du classement général sur une saison"
  },
  {
    id: 1,
    name: "Ballon d'Or",
    description: "Terminer une saison en étant invaincu"
  },
  {
    id: 2,
    name: "Soulier d'Or",
    description: "Terminer une saison en étant meilleure attaque"
  },
  {
    id: 3,
    name: "Gant d'Or",
    description: "Terminer une saison en étant meilleure défense"
  },
  {
    id: 4,
    name: "Manita",
    description: "Gagner un match sur le score de 5-0"
  }
];

export default {
  matchesData,
  playersData,
  teamsData,
  trophiesData
};
