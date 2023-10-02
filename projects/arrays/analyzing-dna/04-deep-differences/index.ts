export const deepDifferences = (a: string[][], b: string[][]) => {
  if (a.length !== b.length) {
    return undefined;
  }

  const result: ((string | undefined)[] | undefined)[] = [];
  for (let i = 0; i < a.length; i++) {
    if (a[i].length !== b[i].length) {
      result.push(undefined);
    } else {
      const these_results: (string | undefined)[] = [];
      for (let j = 0; j < a[i].length; j++) {
        if (a[i][j] !== b[i][j]) {
          these_results.push(undefined);
        } else {
          these_results.push(a[i][j]);
        }
      }
      result.push(these_results);
    }
  }

  return result;
};
