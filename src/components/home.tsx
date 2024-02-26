import { FaCircleArrowUp } from "react-icons/fa6";
import "../styles/home.sass"
import {useEffect, useState} from "react";

export function Home() {
  const [scrolledDown, setScrolledDown] = useState<boolean>(false);

  useEffect(() => {
    function handleScroll() {
      if (window.scrollY > 0) {
        setScrolledDown(true);
      } else {
        setScrolledDown(false);
      }
    }

    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); // Empty dependency array ensures this effect runs only once

  const scrollBack = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth" // Smooth scrolling animation
    });
  };

  return (
    <>
      {scrolledDown && <button id={"home"} onClick={scrollBack}><FaCircleArrowUp size={30}/></button>}
    </>
  )
}