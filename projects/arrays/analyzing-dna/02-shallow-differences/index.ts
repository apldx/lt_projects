export const shallowDifferences = (a: string[], b: string[]) => {
  if (a.length !== b.length) {
    return undefined;
  }
  const results = [];
  for (let i = 0; i < a.length; i++) {
    if (a[i] === b[i]) {
      results.push(a[i]);
    } else {
      results.push(undefined);
    }
  }
};
