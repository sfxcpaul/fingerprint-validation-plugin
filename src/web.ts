import { WebPlugin } from '@capacitor/core';

import type { FingerPrintValidationPlugin } from './definitions';

export class FingerPrintValidationWeb
  extends WebPlugin
  implements FingerPrintValidationPlugin
{
  async validateFingerPrint(options: { value: string }): Promise<{ value: string }> {
    console.log('validateFingerPrint', options);
    return options;
  }
}
