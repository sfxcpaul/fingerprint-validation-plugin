import { registerPlugin } from '@capacitor/core';

import type { FingerPrintValidationPlugin } from './definitions';

const FingerPrintValidation = registerPlugin<FingerPrintValidationPlugin>(
  'FingerPrintValidation',
  {
    web: () => import('./web').then(m => new m.FingerPrintValidationWeb()),
  },
);

export * from './definitions';
export { FingerPrintValidation };
