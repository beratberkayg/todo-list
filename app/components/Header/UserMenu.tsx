"use client";

import Image from "next/image";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import UserMenuItem from "./UserMenuItem";

import { AiOutlineLogin, AiOutlineUserAdd } from "react-icons/ai";

const UserMenu = () => {
  const [openMenu, setOpenMenu] = useState(false);
  console.log(openMenu);

  return (
    <div
      onClick={() => setOpenMenu(!openMenu)}
      className="relative flex items-center gap-2 cursor-pointer"
    >
      <GiHamburgerMenu size={25} cursor={"pointer"} />
      <Image
        src={
          "https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png"
        }
        alt=""
        width={40}
        height={40}
      />

      {openMenu && (
        <div className="absolute bg-slate-400 shadow-orange-300 w-[150px] top-16 right-2 rounded-md p-3 flex flex-col tracking-wide items-center  ">
          <UserMenuItem
            name="Giriş Yap"
            onClick={() => {}}
            icon={AiOutlineLogin}
          />
          <UserMenuItem
            name="Kayıt Ol"
            onClick={() => {}}
            icon={AiOutlineUserAdd}
          />
        </div>
      )}
    </div>
  );
};

export default UserMenu;
