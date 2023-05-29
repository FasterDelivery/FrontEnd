import { ChangeEvent, useState } from "react";
import { InputHook } from "../interfaces/inputHook";

function useInput(): InputHook {
  const [value, setValue] = useState<string>("");

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  return { value, onChange };
}

export default useInput;
