import { registerPlugin } from '@capacitor/core';
import type { MyCustomBridgePlugin } from './definitions';

const MyCustomBridge = registerPlugin<MyCustomBridgePlugin>('MyCustomBridge');

export * from './definitions';
export { MyCustomBridge };