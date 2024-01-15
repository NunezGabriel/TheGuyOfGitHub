"use client";

import Image from "next/image";
import { useState } from "react";
import MainCardComponent from "@/components/mainCardComp";

const CardPage = () => {
  const [value, setValue] = useState("");
  return (
    <div>
      <div className=" p-6 justify-center items-center text-md text-pretty flex gap-4">
        <div className="flex px-3 rounded-xl bg-gray-800 w-full">
          <input
            type="text"
            className="bg-transparent h-[32px] w-full border-transparent outline-none text-white"
            value={value}
            onChange={(event) => setValue(event.target.value)}
          />
          <Image
            src={"/img/lupa.png"}
            width={30}
            height={25}
            alt="lupa-image"
          />
        </div>
        <button className="py-1 px-2 rounded-xl w-20 bg-[#4dffcd]">Done</button>
      </div>
      <MainCardComponent user={value} />
    </div>
  );
};
//mover eso a un componente donde se hara el fetch de ddatos pasando como props el value asi se hara bien
export default CardPage;
