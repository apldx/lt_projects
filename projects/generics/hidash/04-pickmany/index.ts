export const pickMany = <T, K extends keyof T>(container: T, keys: K[]) => {
  const output = [];
  for (const key of keys) {
    output.push(container[key]);
  }
  return output;
};
