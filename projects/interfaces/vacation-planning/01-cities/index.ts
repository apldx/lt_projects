export type Coordinate = [number, number, number];

export interface Coordinates {
  north: Coordinate;
  west: Coordinate;
}

export interface City {
  coordinates: Coordinates;
  name: string;
  catchphrase?: string;
}

const formatCoordinate = (coordinate: Coordinate) => {
  return `${coordinate[0].toString().padStart(2, '0')}°${coordinate[1]
    .toString()
    .padStart(2, '0')}'${coordinate[2].toString().padStart(2, '0')}"`;
};

export const describeCity = (city: City) => {
  const result: string[] = [];
  result.push(`${city.name}, New York`);
  if (city.catchphrase) {
    result.push(`* "${city.catchphrase}"`);
  }
  result.push(
    `* Located at ${formatCoordinate(
      city.coordinates.north
    )}N ${formatCoordinate(city.coordinates.west)}W`
  );
  return result.join('\n');
};
