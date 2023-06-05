import { ChangeEvent } from "react";

export interface InputHook {
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  validatePassword: () => void;
  validateConfirmPassword: (password: string) => void;
  validateEmail: () => void;
  passwordErrors: string[];
  confirmPasswordErrors: string[];
  emailErrors: string[];
}
