interface Character {
  flying: boolean;
  name: string;
  power: number;
  toughness: number;
}

const mutationsLibrary = {
  energy: (hero: Character) => {
    hero.power *= 1.25;
    hero.flying = true;
  },
  healing: (hero: Character) => {
    hero.toughness *= 2;
  },
  luck: (hero: Character) => {
    hero.power *= 1.25;
    hero.toughness *= 1.25;
  },
  flight: (hero: Character) => {
    hero.flying = true;
  },
  strength: (hero: Character) => {
    hero.power *= 2;
  },
  wings: (hero: Character) => {
    hero.flying = true;
    hero.toughness *= 0.9;
  }
};

type Mutation = keyof typeof mutationsLibrary;

interface Fighter {
  name: string;
  mutations: Mutation[];
}

const createCharacter = (name: string, mutations: Mutation[]) => {
  const character: Character = {
    flying: false,
    name,
    power: 1,
    toughness: 1
  };

  for (const mutation of mutations) {
    mutationsLibrary[mutation](character);
  }

  return character;
};

interface Characters {
  [key: string]: Character;
}

export const duel = (good: Fighter, bad: Fighter) => {
  const fighters: Characters = {};
  fighters.hero = createCharacter(good.name, good.mutations);
  fighters.villain = createCharacter(bad.name, bad.mutations);
  const winner =
    fighters.hero.power / fighters.villain.toughness >=
    fighters.villain.power / fighters.hero.toughness
      ? 'hero'
      : 'villain';
  return [winner, fighters[winner]] as const;
};
