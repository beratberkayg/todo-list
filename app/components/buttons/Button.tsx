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
    <div className="relative">
      <button
        onClick={onSubmit}
        className={` px-5 py-2 text-lg rounded-xl w-full ${
          outline ? "border border-black" : " bg-emerald-500 text-white"
        } `}
      >
        {Icon && <Icon className="absolute" size={25} />}
        {btnLabel}
      </button>
    </div>
  );
};

export default Button;
