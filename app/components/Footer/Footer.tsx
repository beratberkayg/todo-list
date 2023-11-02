import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="w-full h-20 flex justify-center items-center bg-slate-400 absolute bottom-0">
      <h1 className=" pr-3">Made by</h1>
      <Link
        target="blank"
        className="underline underline-offset-4 "
        href="https://github.com/beratberkayg"
      >
        Berat Berkay
      </Link>
    </div>
  );
};

export default Footer;
