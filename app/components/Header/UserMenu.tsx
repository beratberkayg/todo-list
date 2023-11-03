"use client";

import Image from "next/image";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import UserMenuItem from "./UserMenuItem";

import { AiOutlineLogin, AiOutlineUserAdd } from "react-icons/ai";
import { useAppDispatch } from "@/app/redux/hooks";
import { loginModalFunch, registerModalFunc } from "@/app/redux/modalSlice";

const UserMenu = () => {
  const [openMenu, setOpenMenu] = useState(false);
  console.log(openMenu);
  const dispatch = useAppDispatch();

  return (
    <div
      onClick={() => setOpenMenu(!openMenu)}
      className="relative flex items-center gap-2 cursor-pointer"
    >
      <Image
        src={
          "https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png"
        }
        alt=""
        width={40}
        height={40}
      />
      <GiHamburgerMenu size={25} cursor={"pointer"} />

      {openMenu && (
        <div className="absolute bg-slate-400 shadow-orange-300 w-[150px] top-16 right-2 rounded-md p-3 flex flex-col tracking-wide items-center  ">
          <UserMenuItem
            name="Giriş Yap"
            onClick={() => {
              dispatch(loginModalFunch());
            }}
            icon={AiOutlineLogin}
          />
          <UserMenuItem
            name="Kayıt Ol"
            onClick={() => {
              dispatch(registerModalFunc());
            }}
            icon={AiOutlineUserAdd}
          />
        </div>
      )}
    </div>
  );
};

export default UserMenu;
