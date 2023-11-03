"use client";

import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";

type InputProps = {
  id: string;
  type: string;
  placeholder: string;
  register: UseFormRegister<FieldValues>;
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
    <div className="w-full h-14 my-10 flex justify-center flex-col text-lg">
      <label className="cursor-pointer pl-2" htmlFor={id}>
        {placeholder}
      </label>
      <input
        id={id}
        className={`${
          errors[id] ? "border border-red-500" : "border-2 border-gray-200"
        }  w-full py-3 text-lg rounded-xl pl-3 outline-none `}
        {...(register(id), { required })}
        placeholder={placeholder}
        type={type}
      />
    </div>
  );
};

export default Input;
