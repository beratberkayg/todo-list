"use client";

import { useRouter } from "next/navigation";
import { AiFillEdit } from "react-icons/ai";
const Logo = () => {
  const router = useRouter();
  return (
    <div
      onClick={() => router.push("/")}
      className="flex items-center cursor-pointer"
    >
      <AiFillEdit size={25} />
      <h1 className="pl-2 tracking-wide text-2xl ">BBG ToDo List</h1>
    </div>
  );
};

export default Logo;
