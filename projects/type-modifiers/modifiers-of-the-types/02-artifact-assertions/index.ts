const artifacts = {
  'Black Garnet': {
    type: 'magic'
  },
  'Castle TypeScript': {
    type: 'fortress'
  },
  'Cosmic Key': {
    type: 'device'
  },
  'Power Sword': {
    type: 'sword'
  },
  Starseed: {
    type: 'magic'
  },
  'Sword of the Ancients': {
    type: 'sword'
  }
} as const;

export type ArtifactName = keyof typeof artifacts;

export const getArtifactType = (artifactName: ArtifactName) => {
  return artifacts[artifactName].type;
};
