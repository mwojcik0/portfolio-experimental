import {TypeAnimation} from "react-type-animation";
import {useEffect} from "react";
import '../styles/loader.sass';

export function Loader({loading}: {loading: boolean}) {
  useEffect(() => {
    setTimeout(() => {
      if (!loading) {
        const loaderElement = document.getElementById("loader");
        if (loaderElement) {
          loaderElement.style.opacity = "0";
          setTimeout(() => {
            loaderElement.style.display = "none";
          }, 500);
        }
      }
    }, 2000);
  }, [loading]);

  return (
    <div id={"loader"}>
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