import { registerPlugin } from '@capacitor/core';

import type { CustomBridgePlugInPlugin } from './definitions';

const CustomBridgePlugIn = registerPlugin<CustomBridgePlugInPlugin>('CustomBridgePlugIn', {
  web: () => import('./web').then((m) => new m.CustomBridgePlugInWeb()),
});

export * from './definitions';
export { CustomBridgePlugIn };
