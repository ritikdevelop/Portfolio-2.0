import rawCV from '@cv' with { type: 'json' };
import type { CVType } from './cv-types.d.ts';

export const CV: CVType = rawCV as unknown as CVType;

