"use client";
import { beneficts } from "@/data";

const HomePage = () => {
  return (
    <div className=" text-gray-400 w-full">
      <div
        className="h-52 flex justify-center
        items-center text-6xl text-center text-white"
      >
        The Guy Of GitHub
      </div>
      <div
        className=" p-6 justify-center
        items-center text-md text-pretty font-light"
      >
        Hey you! Do you think you're a great developer with an awesome github
        profile? Well let's see if you have enough to be
        <span className="text-[#4dffcd]"> THE GUY OF GITHUB</span>, here you can
        look at all your statistics and if you have enough you will be
        <span className="text-[#4dffcd]">THE GUY OF GITHUB</span> but if not,
        don't worry you can carry out missions to boost your profile and thus be
        <span className="text-[#4dffcd]">THE GUY OF GITHUB.</span> See you
        around and good luck.
      </div>

      <div
        className=" p-6 justify-center
        items-center text-md text-pretty"
      >
        <h1 className="text-xl text-white">
          Benefits of using GiHub and having a great profile
        </h1>
      </div>
      <div
        className=" p-6 justify-center
        items-center text-md text-pretty font-light flex flex-col gap-10" // POSSIBLE ENDPOINT IN FLEX DIRECTION
      >
        {beneficts.map((benefict) => {
          return (
            <div className="w-full p-10 gap-6 bg-gray-950 flex flex-col items-center rounded-lg text-gray-950">
              <div className="bg-[#4dffcd]  text-3xl w-10 h-10 flex justify-center items-center rounded-full">
                {benefict.id}
              </div>
              <div className="text-gray-400">{benefict.text}</div>
            </div>
          );
        })}
      </div>
      <div
        className=" p-6 justify-center
        items-center text-md text-pretty text-center mt-10"
      >
        <h1 className="text-4xl text-white">Missions</h1>
      </div>
      <div
        className="p-6 justify-center gap-10
        items-center text-md text-pretty font-light text-center flex flex-col"
      >
        <p className="text-xl">
          Hey, do you remember what I mentioned about the missions to improve
          your profile and thus be the guy of GitHub? give them a look if you
          need them to become
          <span className="text-[#4dffcd]"> THE GUY OF GITHUB</span>.
        </p>
        <button className="py-1 text-gray-950 px-4 rounded-xl w-30 jello-horizontal bg-[#4dffcd]">
          Missions
        </button>
      </div>
    </div>
  );
};

export default HomePage;
