"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const CardPage = () => {
  const [value, setValue] = useState("");
  const [data, setData] = useState(null);
  const [start, setStart] = useState(false);

  const makeIt = () => {
    setStart(!start);
  };

  useEffect(() => {
    const getData = async () => {
      const res = await fetch(
        `https://api.github.com/users/${value ? value : "NunezGabriel"}`
      );
      const result = await res.json();
      setData(result);
    };
    getData();
  }, [start]); // FALTA CAPTURAR EL ERROR Y ESTARIA 10/10

  return (
    <div>
      <div className=" p-6 justify-center items-center text-md text-pretty flex max-w-[500px] mx-auto gap-4">
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
        <button
          onClick={() => {
            makeIt();
          }}
          className="py-1 px-2 rounded-xl w-20 bg-[#4dffcd]"
        >
          Done
        </button>
      </div>

      <div
        className=" p-6 justify-center
        items-center text-md text-pretty font-light flex flex-col gap-10 " // POSSIBLE BREAKPOINT IN FLEX DIRECTION
      >
        <div className="w-full p-10 gap-6 bg-gray-950 max-w-[1000px] flex flex-col md:flex-row md:justify-around md:gap-0  items-center rounded-lg text-white">
          {data ? (
            <Image
              src={`${
                data.avatar_url
                  ? data.avatar_url
                  : "/img/red-removebg-preview.png"
              }`}
              className="w-36 h-36 md:w-[350px] md:h-[350px] rounded-full"
              width={36}
              height={36}
              alt="user image"
            />
          ) : (
            console.log("it doesn't work")
          )}
          {data ? (
            <div className="flex flex-col gap-4 text-center md:text-start">
              <h1>
                <span className="text-[#9839ff]">User Name: </span>
                {data.login}
              </h1>
              <h1>
                <span className="text-[#9839ff]">Name: </span> {data.name}
              </h1>
              <h1>
                <span className="text-[#9839ff]">Public Repositories: </span>
                {data.public_repos}
              </h1>
              <h1>
                <span className="text-[#9839ff]">Stars: </span>
                {data.login}
              </h1>
              <h1>
                <span className="text-[#9839ff]">Followers: </span>
                {data.followers}
              </h1>
              <h1>
                <span className="text-[#9839ff]">Blog: </span>
                {data.blog ? (
                  <Link href={`${data.blog}`} className="text-green-400">
                    ✓ click to see it
                  </Link>
                ) : (
                  <h1 className="text-red-500">✗ No Blog</h1>
                )}
              </h1>
              <h1>
                <span className="text-[#9839ff]">Commits: </span>
                {data.login}
              </h1>
              <h1 className="text-2xl text-[#ff00d4]">
                <span className="text-2xl">RESULT: </span>
                {data.login}
              </h1>
            </div>
          ) : (
            console.log("no funciono")
          )}
        </div>
      </div>
    </div>
  );
};
export default CardPage;
