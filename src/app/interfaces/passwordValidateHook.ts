export interface PasswordValidationHook {
  password: string;
  setPassword: (password: string) => void;
  isValid: boolean;
  validationErrors: string[];
}
