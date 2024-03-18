import "../styles/header.sass";
import {TypeAnimation} from "react-type-animation";

export function Header() {
  return (
    <div id={"header"}>
      <h1>
        Portfolio
      </h1>
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
      <h4>(Work in progress)</h4>
    </div>
  )
}