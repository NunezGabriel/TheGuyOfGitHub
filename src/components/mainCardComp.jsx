"use client";
import Image from "next/image";
import { useState, useEffect } from "react";

function MainCardComponent({ userReal }) {
  const [user, setUser] = useState(null);
  const useUser = () => {
    const fetchUser = async () => {
      let response = await fetch(
        `https://api.github.com/users/${userReal}/starred`
      );

      if (response.status === 200) {
        const data = await response.json();
        setUser(data);
      }
    };

    useEffect(() => {
      fetchUser();
    }, [userReal]);

    console.log(user);
    return user;
  }; // si funciona este fetch ero no lo puedes guardar en una variable no se prq

  let hpola = useUser();

  return <div> </div>;
}

export default MainCardComponent;
