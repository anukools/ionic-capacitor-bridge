export interface CustomBridgePlugInPlugin {
  echo(options: { value: string }): Promise<{ value: string }>;
}
