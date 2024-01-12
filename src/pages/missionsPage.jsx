import Image from "next/image";
import { missionsData } from "@/data";
import Link from "next/link";
const MissionsPage = () => {
  return (
    <div className=" text-gray-400 w-full">
      <div
        className=" p-6 justify-center
        items-center text-md text-pretty"
      >
        <Link href={"/"}>
          <div className="text-[#4dffcd] mb-9">{"<- Back"}</div>
        </Link>
        <h1 className="text-xl text-white mb-4">The Missions ✦</h1>
        <p className="text-md text-gray-400">
          Here you can see the missions that you have to carry out in order to
          have a great profile and become THE GUY OF GITHUB, some are very easy
          and others much more complex, but remember that the results come from
          effort, if you have already done all the missions Well, you just have
          to maintain your commit rate since from that moment on you will be
          considered THE GUY OF GITHUB. Good luck with your assignments
        </p>
      </div>
      <div
        className=" p-6 justify-center
        items-center text-md text-pretty font-light flex flex-col gap-10" // POSSIBLE BREAKPOINT IN FLEX DIRECTION
      >
        {missionsData.map((mission) => {
          return (
            <div className="w-full p-7 cardContainer gap-6  flex flex-col rounded-lg">
              <Image
                src={mission.img}
                width={330}
                height={330}
                alt="mission-img"
                className="rotate-vertical-center"
              />
              <div className="flex gap-4">
                {mission.dificult.map((e) => {
                  return (
                    <div key={e} className="h-4 w-4">
                      <span
                        className={`relative inline-flex rounded-full h-4 w-4 bg-[white]`}
                      >
                        <span
                          className={`animate-ping absolute inline-flex h-full w-full rounded-full bg-[white] opacity-75`}
                        ></span>
                      </span>
                    </div>
                  );
                })}
              </div>
              <p className="text-gray-400">{mission.text}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MissionsPage;
