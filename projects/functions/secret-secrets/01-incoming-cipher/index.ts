export type Cipher = (character: string) => string;

export const createCipher = (cipher: Cipher) => {
  return (text: string) => {
    let output = '';
    for (const character of text) {
      output += cipher(character);
    }
    return output;
  };
};
