export type MakeGuess = (text: string, attempt: number) => string;
export type ValidateGuess = (guess: string) => boolean;

export type Settings = {
  attempts: number;
  makeGuess: MakeGuess;
  validateGuess: ValidateGuess;
};

export const createCodeCracker = (settings: Settings) => {
  return (text: string) => {
    let attempt = 0;
    while (attempt < settings.attempts) {
      const guess = settings.makeGuess(text, attempt);
      if (settings.validateGuess(guess)) {
        return guess;
      }
      attempt += 1;
    }
    return undefined;
  };
};
