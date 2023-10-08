export const unique = <T>(...items: T[][]) => {
  const found = new Set<T>();
  for (const item of items) {
    for (const el of item) {
      found.add(el);
    }
  }
  return Array.from(found);
};
