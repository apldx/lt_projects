import { onlyTruthy } from '../utils/onlyTruthy';

export interface MammalsSettings {
  cute?: boolean;
  deadly?: boolean;
}

export function getMammals(settings?: MammalsSettings) {
  return onlyTruthy(
    settings?.cute && [
      'cats',
      'dogs',
      settings?.deadly && 'monty python rabbit'
    ],
    settings?.deadly && ['lion', 'tiger']
  );
}
export interface MammalsSettings {
  cute?: boolean;
  deadly?: boolean;
}
export function getMammals(settings?: MammalsSettings) {
  return onlyTruthy(
    settings?.cute && [
      'cats',
      'dogs',
      settings?.deadly && 'monty python rabbit'
    ],
    settings?.deadly && ['lion', 'tiger']
  );
}
