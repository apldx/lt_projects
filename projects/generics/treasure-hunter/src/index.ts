export type Buried<T> = Buried<T>[] | NextArea<T> | Treasure<T>;

export type NextArea<T> = Catacomb<T> | TunnelSystem<T>;

export interface Catacomb<T> {
  inside: Buried<T>;
  type: 'catacomb';
}

export interface TunnelSystem<T> {
  entrances: Buried<T>[];
  type: 'tunnels';
}

export interface Treasure<T> {
  content: T;
  type: 'treasure';
}

export const collectTreasure = <
  Content,
  Fake extends Content,
  Real extends Content
>(
  buried: Buried<Content>,
  isFake: (datum: Content) => datum is Fake,
  isReal: (datum: Content) => datum is Real
) => {
  const fake: Fake[] = [];
  const real: Real[] = [];
  const scrap: Content[] = [];

  const recurse = (buried: Buried<Content>) => {
    const collected = collectTreasure(buried, isFake, isReal);
    fake.push(...collected.fake);
    real.push(...collected.real);
    scrap.push(...collected.scrap);
  };

  if (buried instanceof Array) {
    for (const subBuried of buried) {
      recurse(subBuried);
    }
  } else {
    switch (buried.type) {
      case 'catacomb':
        recurse(buried.inside);
        break;
      case 'tunnels':
        for (const entrance of buried.entrances) {
          recurse(entrance);
        }
        break;
      case 'treasure':
        if (isFake(buried.content)) {
          fake.push(buried.content);
        } else if (isReal(buried.content)) {
          real.push(buried.content);
        } else {
          scrap.push(buried.content);
        }
    }
  }

  return { fake, real, scrap };
};
