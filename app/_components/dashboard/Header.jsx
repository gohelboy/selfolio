import React from "react";
import Image from "next/image";

const Header = () => {
  return (
    <nav className="flex items-center justify-center w-full py-5 mb-7">
      <div className="w-full flex justify-between items-center">
        <div className="flex items-center gap-2 cursor-pointer">
          <Image src={"/logo.svg"} width={34} height={34} alt="logo" />
          <h3 className="font-semibold text-3xl text-[#775732]">Selfolio</h3>
        </div>
        <div className="rounded-full w-8 h-8 cursor-pointer overflow-hidden">
          <Image src={"/jack.webp"} width={34} height={34} alt="profile" />
        </div>
      </div>
    </nav>
  );
};

export default Header;
