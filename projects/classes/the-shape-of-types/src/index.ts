export interface ConsumedOpponent {
  name: string;
  evil: boolean;
  power: number;
}

export abstract class Horror {
  abstract name: string;
  #consumedOpponents: ConsumedOpponent[] = [];

  doBattle(opponent: Horror) {
    if (this.getPower() >= opponent.getPower()) {
      this.consume(opponent);
    }
  }

  getPower() {
    let power = 0;
    for (const opponent of this.#consumedOpponents) {
      power += this.getPowerFrom(opponent);
    }
    power += this.#consumedOpponents.length;
    return power;
  }

  consume(opponent: Horror) {
    const consumedOpponent: ConsumedOpponent = {
      name: opponent.name,
      evil: opponent.isEvil(),
      power: opponent.getPower()
    };
    this.#consumedOpponents.push(consumedOpponent);
  }

  protected abstract getPowerFrom(consumedOpponent: ConsumedOpponent): number;

  protected abstract isEvil(): boolean;
}

export class Demon extends Horror {
  name: string;

  constructor() {
    super();
    this.name = 'Demon';
  }

  getPowerFrom(consumedOpponent: ConsumedOpponent) {
    return consumedOpponent.evil
      ? 0.5 * consumedOpponent.power
      : 2 * consumedOpponent.power;
  }

  isEvil() {
    return true;
  }
}

export class Sorcerer extends Horror {
  name: string;
  #evil: boolean;

  constructor(name: string, evil: boolean) {
    super();
    this.name = name;
    this.#evil = evil;
  }

  getPowerFrom(consumedOpponent: ConsumedOpponent) {
    return consumedOpponent.evil == this.#evil
      ? 2 * consumedOpponent.power
      : consumedOpponent.power;
  }

  isEvil() {
    return this.#evil;
  }
}
