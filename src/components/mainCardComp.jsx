import { Result } from "postcss";
import { useState, useEffect } from "react";

function MainCardComponent({ user }) {
  const useUser = () => {
    const [user, setUser] = useState(null);

    const fetchUser = async () => {
      const response = await fetch("https://api.github.com/users/NunezGabriel");

      if (response.status === 200) {
        const data = await response.json();
        setUser(data);
      }
    };

    useEffect(() => {
      fetchUser();
    }, []);

    console.log(user);
    return user;
  }; // si funciona este fetch ero no lo puedes guardar en una variable no se prq

  return (
    <div
      className=" p-6 justify-center
        items-center text-md text-pretty font-light flex flex-col gap-10" // POSSIBLE BREAKPOINT IN FLEX DIRECTION
    >
      <div className="w-full p-10 gap-6 bg-gray-950 flex flex-col items-center rounded-lg text-white">
        <div className="bg-red-600 w-36 h-36 rounded-full"></div>
        <h1>Repositories: </h1>
        <h1>Stars: </h1>
        <h1>Followers: </h1>
        <h1>Contributions: </h1>
        <h1>Commits: </h1>
        <h1>RESULT: </h1>
      </div>
    </div>
  );
}

export default MainCardComponent;
