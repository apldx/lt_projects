export type SmallPetFood =
  | 'bugs'
  | 'fruits'
  | 'insects'
  | 'plants'
  | 'seeds'
  | 'vegetables';

abstract class SmallFurryPet {
  readonly species: string;
  protected happiness = 0;

  constructor(species: string) {
    this.species = species;
  }

  abstract eats(food: SmallPetFood): boolean;

  isHappy() {
    return this.happiness > 0;
  }
}

export class Gerbil extends SmallFurryPet {
  constructor() {
    super('Gerbil');
  }

  dig() {
    this.happiness += 1;
  }

  eats(food: SmallPetFood) {
    return ['insects', 'plants', 'seeds', 'vegetables'].includes(food);
  }
}

export class Hamster extends SmallFurryPet {
  constructor() {
    super('Hamster');
  }

  run() {
    this.happiness += 1;
  }

  eats() {
    return true;
  }
}
