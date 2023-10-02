export type Stock = {
  breads: number;
  fruits: number;
  sauces: number;
  vegetables: number;
};
export type Cleaner = (dirt: number, time?: number) => number;
export type Supplier = (expense: number) => Stock;
export type RecipeFailed = { succeeded: false };
export type RecipeSucceeded = { succeeded: true; newStock: Stock };
export type Recipe = (ingredients: Stock) => RecipeFailed | RecipeSucceeded;

export type Kitchen = {
  announce(): string;
  clean(time?: number): void;
  purchase(expense: number): boolean;
  prepare(recipe: Recipe): boolean;
};

export const createKitchen = (
  budget: number,
  cleaner: Cleaner,
  supplier: Supplier
): Kitchen => {
  let dirt = 0;
  let stock: Stock = {
    breads: 0,
    fruits: 0,
    sauces: 0,
    vegetables: 0
  };

  const announce = () => {
    return `I have ${dirt} much dirt, ${budget} budget, ${stock.breads} bread(s), ${stock.fruits} fruit(s), ${stock.sauces} sauce(s), and ${stock.vegetables} vegetable(s).`;
  };

  const clean = (time?: number) => {
    dirt = cleaner(dirt, time);
  };

  const purchase = (expense: number) => {
    if (expense > budget) {
      return false;
    }

    const purchasedStock = supplier(expense);

    for (const k in stock) {
      stock[k as keyof Stock] += purchasedStock[k as keyof Stock];
    }
    budget -= expense;
    return true;
  };

  const prepare = (recipe: Recipe) => {
    if (dirt >= 100) {
      return false;
    }
    const recipeResult = recipe(stock);
    dirt += 1;
    if (recipeResult.succeeded) {
      stock = recipeResult.newStock;
    }
    return recipeResult.succeeded;
  };

  return {
    announce,
    clean,
    purchase,
    prepare
  };
};
