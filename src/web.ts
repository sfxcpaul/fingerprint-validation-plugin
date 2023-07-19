import { WebPlugin } from '@capacitor/core';

import type { FingerPrintValidationPlugin } from './definitions';

export class FingerPrintValidationWeb
  extends WebPlugin
  implements FingerPrintValidationPlugin
{
  async echo(options: { value: string }): Promise<{ value: string }> {
    console.log('ECHO', options);
    return options;
  }
}
