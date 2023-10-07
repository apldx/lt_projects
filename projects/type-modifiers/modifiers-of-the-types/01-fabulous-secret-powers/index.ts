export interface Character {
  name: string;
  powers: string[];
  side: 'good' | 'evil';
}

export const announceCharacter = (rawCharacter: string) => {
  const character = JSON.parse(rawCharacter) as Character;
  console.log(`I am ${character.name}.`);
  console.log(`My powers are: ${character.powers.join(', ')}.`);
  console.log(`I am ${character.side}.`);
  return character;
};
