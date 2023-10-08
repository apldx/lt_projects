export const zip = <T, U>(a1: T[], a2: U[]) => {
  let output: (T | U)[] = [];
  let rest: (T | U)[];
  let num_els: number;
  if (a1.length > a2.length) {
    num_els = a2.length;
    rest = a1.slice(a2.length);
  } else if (a2.length > a1.length) {
    num_els = a1.length;
    rest = a2.slice(a1.length);
  } else {
    num_els = a1.length;
    rest = [];
  }
  for (let i = 0; i < num_els; i++) {
    output.push(a1[i]);
    output.push(a2[i]);
  }
  output = output.concat(rest);
  return output;
};
