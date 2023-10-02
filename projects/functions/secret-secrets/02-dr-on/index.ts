export type Cipher = (character: string) => string;

export const createAdvancedCipher = (
  onVowel: Cipher,
  onConsonant: Cipher,
  onPunctuation: Cipher
) => {
  return (text: string) => {
    let output = '';
    for (const character of text) {
      const cipher = /[aeiou]/i.test(character)
        ? onVowel
        : /[a-z]/i.test(character)
        ? onConsonant
        : onPunctuation;
      output += cipher(character);
    }
    return output;
  };
};
