export interface Restaurant {
  city: string;
  name: string;
}

export interface Landmarks {
  [key: string]: string[];
}

export const groupRestaurants = (restaurants: Restaurant[]) => {
  const landmarks: Landmarks = {};
  for (const restaurant of restaurants) {
    if (!(restaurant.city in landmarks)) {
      landmarks[restaurant.city] = [];
    }
    landmarks[restaurant.city].push(restaurant.name);
  }
  return landmarks;
};
