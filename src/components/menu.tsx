import "../styles/menu.sass";
import GithubLogo from "../assets/github-mark-white.png";
import LinkedInLogo from "../assets/linkedin-mark-white.png";
import About from "./modals/about.tsx";
import Work from "./modals/work.tsx";
import Projects from "./modals/projects.tsx";

export function Menu() {
  return (
    <nav>
      <ul>
        <div id={"pages"}>
          <About />
          <Work />
          <Projects />
        </div>
        <div id={"socials"}>
          <li className={"button"}><a href={"https://github.com/mwojcik0"} target={"_blank"}>
            <img src={GithubLogo}/>
          </a></li>
          <li className={"button"}><a href={"https://linkedin.com/in/marcelwojcikshort"} target={"_blank"}>
            <img src={LinkedInLogo}/>
          </a></li>
        </div>
      </ul>
    </nav>
  )
}