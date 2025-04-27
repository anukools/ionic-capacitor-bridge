import { WebPlugin } from '@capacitor/core';

import type { CustomBridgePlugInPlugin } from './definitions';

export class CustomBridgePlugInWeb extends WebPlugin implements CustomBridgePlugInPlugin {
  async echo(options: { value: string }): Promise<{ value: string }> {
    console.log('ECHO', options);
    return options;
  }
}
