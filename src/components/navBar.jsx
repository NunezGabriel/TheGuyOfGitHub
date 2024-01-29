"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavBarComponent = () => {
  const pathname = usePathname();

  return (
    <div className="w-full h-16 px-4 bg-gray-950 shadow-lg shadow-gray-900 flex justify-around items-center ">
      <Link
        href={pathname == "/main-card" ? "/" : "/main-card"}
        className="w-full md:w-[300px] py-1 px-2 rounded-xl text-center text-[#4dffcd] border border-[#4dffcd]"
      >
        <button className="">
          {pathname == "/main-card" ? "Go Back" : "See your stats"}
        </button>
      </Link>
    </div>
  );
};

export default NavBarComponent;
