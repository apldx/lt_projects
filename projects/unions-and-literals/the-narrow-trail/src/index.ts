export function runCommands() {
  let nextSupply: 'food' | 'water' | undefined;
  let food = 5;
  let water = 5;

  for (let time = 1; time <= 7; time += 1) {
    const roll = Math.floor(Math.random() * 6) + 1;
    console.log(time, roll, food, water);
    if (roll == 1) {
      nextSupply = 'food';
    } else if (roll == 2) {
      nextSupply = 'water';
    } else {
      if (nextSupply) {
        if (nextSupply === 'food') {
          food += roll;
        } else {
          water += roll;
        }
        nextSupply = undefined;
      } else {
        if (roll % 2 == 0) {
          nextSupply = 'food';
        } else {
          nextSupply = 'water';
        }
      }
    }

    food -= 1;
    water -= 1;
    if (food == 0 || water == 0) {
      console.log('Returning false');
      return false;
    }
  }

  return true;
}
