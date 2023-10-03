interface BaseLandmark {
  name: string;
}

interface Fort extends BaseLandmark {
  type: 'fort';
}

interface Mountain extends BaseLandmark {
  height: number;
  type: 'mountain';
}

interface Lighthouse extends BaseLandmark {
  height: number;
  lit: number;
  type: 'lighthouse';
}

interface Lake extends BaseLandmark {
  miles: number;
  type: 'lake';
}

interface Waterfall extends BaseLandmark {
  height: number;
  type: 'waterfall';
}

interface River extends BaseLandmark {
  depth: number;
  length: number;
  type: 'river';
}

interface Park extends BaseLandmark {
  acres: number;
  type: 'park';
}

export type Landmark =
  | Fort
  | Mountain
  | Lighthouse
  | Lake
  | Waterfall
  | River
  | Park;

export const describeLandmark = (landmark: Landmark) => {
  const lines = [`${landmark.name} is a ${landmark.type} in Upstate New York.`];
  switch (landmark.type) {
    case 'lake':
      lines.push(`It covers ${landmark.miles} square miles of water.`);
      break;
    case 'lighthouse':
      lines.push(
        `It was first lit in ${landmark.lit} and is ${landmark.height} feet high.`
      );
      break;
    case 'mountain':
      lines.push(`Its peak is ${landmark.height} feet high.`);
      break;
    case 'park':
      lines.push(`It covers ${landmark.acres} square acres.`);
      break;
    case 'river':
      lines.push(
        `It flows for ${landmark.length} miles and is ${landmark.depth} feet deep at its deepest.`
      );
      break;
    case 'waterfall':
      lines.push(`It is ${landmark.height} feet high.`);
      break;
  }
  return lines.join('\n');
};
