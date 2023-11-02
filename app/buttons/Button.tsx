"use client";

import { IconType } from "react-icons";

type ButtonProps = {
  onSubmit: (e: React.MouseEvent<HTMLButtonElement>) => void;
  btnLabel: string;
  outline?: boolean;
  icon?: IconType;
};

const Button: React.FC<ButtonProps> = ({
  onSubmit,
  btnLabel,
  outline,
  icon: Icon,
}) => {
  return (
    <button
      className={` px-5 py-1 text-lg rounded-xl w-full ${
        outline ? "border border-black" : " bg-emerald-500 text-white"
      } `}
    >
      {Icon && <Icon size={25} />}
      {btnLabel}
    </button>
  );
};

export default Button;
