"use client";

import Image from "next/image";
import { useState } from "react";

const NavBarComponent = () => {
  const [value, setValue] = useState("");
  return (
    <div className="w-full h-16 bg-gray-950 shadow-lg shadow-gray-900 flex justify-around items-center">
      <div className="flex rounded-xl bg-gray-800 w-[250px] h-[32px]">
        <input
          type="text"
          className="bg-transparent w-[200px] border-transparent outline-none px-4 text-white"
          value={value}
          onChange={(event) => setValue(event.target.value)}
        />
        <Image src={"/img/lupa.png"} width={30} height={25} alt="lupa-image" />
      </div>
      <button className="py-1 px-2 rounded-xl w-20 bg-[#4dffcd]">Done</button>
      <p className="text-white">this is: {value}</p>
    </div>
  );
};

export default NavBarComponent;
