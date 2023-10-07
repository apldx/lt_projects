interface ConsumedOpponent {
  name: string;
  evil: boolean;
  power: number;
}

type GetPowerFrom = (consumedOpponent: ConsumedOpponent) => number;
type IsEvil = () => boolean;

interface HorrorConfig {
  name: string;
  isEvil: IsEvil;
  getPowerFrom: GetPowerFrom;
}

export class Horror {
  readonly #name: string;
  readonly #getPowerFrom: GetPowerFrom;
  readonly isEvil: IsEvil;

  #consumedOpponents: ConsumedOpponent[] = [];

  constructor(config: HorrorConfig) {
    this.#name = config.name;
    this.#getPowerFrom = config.getPowerFrom;
    this.isEvil = config.isEvil;
  }

  doBattle(opponent: Horror) {
    if (this.getPower() >= opponent.getPower()) {
      this.#consume(opponent);
    }
  }

  getPower() {
    let power = 0;
    for (const opponent of this.#consumedOpponents) {
      power += this.#getPowerFrom(opponent);
    }
    power += this.#consumedOpponents.length;
    return power;
  }

  #consume(opponent: Horror) {
    const consumedOpponent: ConsumedOpponent = {
      name: opponent.#name,
      evil: opponent.isEvil(),
      power: opponent.getPower()
    };
    this.#consumedOpponents.push(consumedOpponent);
  }
}

export const createDemon = () => {
  const config: HorrorConfig = {
    name: 'Demon',
    getPowerFrom: (consumedOpponent: ConsumedOpponent) => {
      return consumedOpponent.evil
        ? 0.5 * consumedOpponent.power
        : 2 * consumedOpponent.power;
    },
    isEvil() {
      return true;
    }
  };
  return new Horror(config);
};

export const createSorcerer = (name: string, evil: boolean) => {
  const config: HorrorConfig = {
    name: name,
    getPowerFrom: (consumedOpponent: ConsumedOpponent) => {
      return consumedOpponent.evil == evil
        ? 2 * consumedOpponent.power
        : consumedOpponent.power;
    },
    isEvil: () => {
      return evil;
    }
  };

  return new Horror(config);
};
