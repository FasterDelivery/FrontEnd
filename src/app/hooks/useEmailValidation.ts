import { useState } from "react";
import { EmailValidationHook } from "../interfaces/emailValidationHook";

const useEmailValidation = (): EmailValidationHook => {
  const [email, setEmail] = useState<string>("");
  const [isValid, setIsValid] = useState<boolean>(false);
  const [validationErrors, setValidationErrors] = useState<string[]>([]);

  const validateEmail = (value: string) => {
    setEmail(value);

    const errors: string[] = [];

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
      errors.push("El email ingresado no es valido");
    }

    setValidationErrors(errors);

    if (!errors[0]) {
      setIsValid(true);
    }
  };

  return {
    email,
    setEmail: validateEmail,
    isValid,
    validationErrors
  };
};

export default useEmailValidation;
