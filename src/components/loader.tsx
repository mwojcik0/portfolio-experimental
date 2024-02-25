import {TypeAnimation} from "react-type-animation";
import {useEffect} from "react";
import '../styles/loader.sass';

export function Loader({loading}: {loading: boolean}) {
  useEffect(() => {
    setTimeout(() => {
      if (!loading) {
        const loaderElement = document.getElementById("loader");
        if (loaderElement) {
          loaderElement.classList.remove("loader-visible");
          setTimeout(() => {
            loaderElement.style.display = "none";
          }, 500);
        }
      }
    }, 2000);
  }, [loading]);

  return (
    <div id={"loader"} className={"loader-visible"}>
      <TypeAnimation
        sequence={[
          " Loading...",
          500
        ]}
        speed={50}
        repeat={Infinity}
        style={{ fontSize: '2em' }}
      />
    </div>
  );
}