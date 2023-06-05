"use client";
import { ChangeEvent, useState } from "react";
import { InputHook } from "../interfaces/inputHook";

function useInput(): InputHook {
  const [value, setValue] = useState("");

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  const validatePassword = (): string[] => {
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
    return errors;
  };

  const validateEmail = (): string[] => {
    const errors: string[] = [];
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
      errors.push("El email ingresado no es valido");
    }
    return errors;
  };

  return { value, onChange, validatePassword, validateEmail };
}

export default useInput;
