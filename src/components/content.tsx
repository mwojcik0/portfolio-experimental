import "../styles/content.sass";
import {TypeAnimation} from "react-type-animation";

export function Content() {
  return (
    <div id={"content"}>
      <h1>Portfolio</h1>
      <h2>Marcel Wójcik</h2>
      <p>
        <TypeAnimation
          sequence={[
            "",
            3000,
            "Web Developer",
            1000,
            "Software Developer",
            1000,
            "UX/UI Designer",
            1000
          ]}
          speed={50}
          repeat={Infinity}
        />
      </p>
    </div>
  )
}