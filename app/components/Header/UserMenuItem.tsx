"use client";

import { IconType } from "react-icons";

type UserMenuItemProps = {
  name: string;
  onClick: () => void;
  icon: IconType;
};

const UserMenuItem: React.FC<UserMenuItemProps> = ({
  name,
  onClick,
  icon: Icon,
}) => {
  return (
    <div
      onClick={onClick}
      className="text-xl hover:underline hover:underline-offset-2 flex items-center gap-2 m-2"
    >
      <Icon size={20} /> {name}
    </div>
  );
};

export default UserMenuItem;
