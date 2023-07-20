export interface FingerPrintValidationPlugin {
  validateFingerPrint(options: { value: string }): Promise<{ value: string }>;
}
