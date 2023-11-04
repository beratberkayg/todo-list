"use client";

import Logo from "./Logo";
import UserMenu from "./UserMenu";
const Navbar = () => {
  return (
    <div className="w-full h-20 flex justify-between items-center px-5 bg-slate-300">
      <Logo />
      <UserMenu />
    </div>
  );
};

export default Navbar;
