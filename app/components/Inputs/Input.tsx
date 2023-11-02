"use client";

import { useFormRegister, FieldErrors, FieldValues } from "react-hook-form";

type InputProps = {
  id: string;
  type: string;
  placeholder: string;
  register: useFormRegister<FieldValues>;
  errors: FieldErrors;
  required: boolean;
};

const Input: React.FC<InputProps> = ({
  id,
  type,
  placeholder,
  register,
  errors,
  required,
}) => {
  return (
    <div className="w-full h-14 my-10 flex justify-center flex-col">
      <label className="cursor-pointer" htmlFor={id}>
        {placeholder} :
      </label>
      <input
        className={`${
          errors[id] ? "border border-red-500" : "border-2 border-gray-200"
        }  w-full py-3 text-lg rounded-xl pl-3 `}
        {...(register(id), { required })}
        placeholder={placeholder}
        id={id}
        type={type}
      />
    </div>
  );
};

export default Input;
