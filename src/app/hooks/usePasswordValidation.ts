import { useState } from "react";
import { PasswordValidationHook } from "../interfaces/passwordValidateHook";

const usePasswordValidation = (): PasswordValidationHook => {
  const [password, setPassword] = useState<string>("");
  const [isValid, setIsValid] = useState<boolean>(false);
  const [validationErrors, setValidationErrors] = useState<string[]>([]);

  const validatePassword = (value: string) => {
    setPassword(value);

    const errors: string[] = [];

    if (value.length < 8) {
      errors.push("La contraseña debe tener al menos 8 caracteres.");
    }

    if (!/(?=.*[a-z])/.test(value)) {
      errors.push("La contraseña debe contener al menos una minúscula.");
    }

    if (!/(?=.*[A-Z])/.test(value)) {
      errors.push("La contraseña debe contener al menos una mayúscula.");
    }

    if (!/(?=.*\d)/.test(value)) {
      errors.push("La contraseña debe contener al menos un número.");
    }

    setValidationErrors(errors);

    if (!errors[0]) {
      setIsValid(true);
    }
  };

  return {
    password,
    setPassword: validatePassword,
    isValid,
    validationErrors
  };
};

export default usePasswordValidation;
