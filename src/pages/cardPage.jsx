"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const CardPage = () => {
  const [data, setData] = useState(null);
  useEffect(() => {
    const getData = async () => {
      const res = await fetch("https://api.github.com/users/NunezGabriel");
      const result = await res.json();
      setData(result);
    };
    getData();
  }, []);
  console.log(data);

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

      <div
        className=" p-6 justify-center
        items-center text-md text-pretty font-light flex flex-col gap-10" // POSSIBLE BREAKPOINT IN FLEX DIRECTION
      >
        <div className="w-full p-10 gap-6 bg-gray-950 flex flex-col items-center rounded-lg text-white">
          <Image
            src={``}
            className="border border-red-500 w-36 h-36 rounded-full"
            width={36}
            height={36}
            alt="user image"
          />
          {data ? (
            <div className="flex flex-col gap-4">
              <h1>Repositories: {data.login}</h1>
              <h1>Stars: {data.login}</h1>
              <h1>Followers: {data.login}</h1>
              <h1>Contributions: {data.login}</h1>
              <h1>Commits: {data.login}</h1>
              <h1>RESULT: {data.login}</h1>
            </div>
          ) : (
            console.log("no funciono")
          )}
        </div>
      </div>
    </div>
  );
};
//mover eso a un componente donde se hara el fetch de ddatos pasando como props el value asi se hara bien
export default CardPage;
