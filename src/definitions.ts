export interface FingerPrintValidationPlugin {
  echo(options: { value: string }): Promise<{ value: string }>;
}
