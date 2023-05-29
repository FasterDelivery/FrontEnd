export interface EmailValidationHook {
  email: string;
  setEmail: (password: string) => void;
  isValid: boolean;
  validationErrors: string[];
}
