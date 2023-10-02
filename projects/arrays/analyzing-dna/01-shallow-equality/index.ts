export const shallowEquality = (a: string[], b: string[]) => {
  if (a.length != b.length) {
    return false;
  }

  let equal = true;
  a.forEach((el, idx) => {
    if (el !== b[idx]) {
      equal = false;
    }
  });

  return equal;
};
