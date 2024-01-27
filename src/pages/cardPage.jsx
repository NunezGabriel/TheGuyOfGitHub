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
  }, [start]);

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
        items-center text-md text-pretty font-light flex flex-col gap-10" // POSSIBLE BREAKPOINT IN FLEX DIRECTION
      >
        <div className="w-full p-10 gap-6 bg-gray-950 flex flex-col items-center rounded-lg text-white">
          {data ? (
            <Image
              src={`${data.avatar_url}`}
              className="w-36 h-36 rounded-full"
              width={36}
              height={36}
              alt="user image"
            />
          ) : (
            console.log("XD")
          )}
          {data ? (
            <div className="flex flex-col gap-4 text-center">
              <h1>User Name: {data.login}</h1>
              <h1>Name: {data.name}</h1>
              <h1>Public Repositories: {data.public_repos}</h1>
              <h1>Stars: {data.login}</h1>
              <h1>Followers: {data.followers}</h1>
              <h1>
                Blog:{" "}
                {data.blog ? (
                  <Link href={`${data.blog}`}>✓ click to see it</Link>
                ) : (
                  <h1>No Blog</h1>
                )}
              </h1>
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
export default CardPage;
