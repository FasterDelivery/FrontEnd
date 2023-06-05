import { ChangeEvent } from "react";

export interface InputHook {
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  validatePassword: () => string[];
  validateEmail: () => string[];
}
