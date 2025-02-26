export class Parrot {
  #name: string;
  #phrases: string[];

  constructor(name: string) {
    this.#name = name;
    this.#phrases = [`${this.#name} wants a cracker!`];
  }

  announce() {
    return `Squawk! I'm ${this.#name}!`;
  }

  learn(phrase: string) {
    this.#phrases.push(phrase);
  }

  speak() {
    const roll = Math.floor(Math.random() * this.#phrases.length);
    return this.#phrases[roll];
  }
}
