import "../styles/menu.css";
import GithubLogo from "../assets/github-mark-white.png";
import LinkedInLogo from "../assets/linkedin-mark-white.png";
import Modal from "./modal.tsx";

export function Menu() {
  return (
    <nav>
      <ul>
        <li><a href={"#"}>Home</a></li>
        <Modal name={"About"}/>
        <li><a href={"#"}>Work</a></li>
        <li><a href={"#"}>Projects</a></li>
        <div id={"socials"}>
          <li><a href={"https://github.com/mwojcik0"} target={"_blank"}>
            <img src={GithubLogo}/>
          </a></li>
          <li><a href={"https://linkedin.com/in/marcelwojcikshort"} target={"_blank"}>
            <img src={LinkedInLogo}/>
          </a></li>
        </div>
      </ul>
    </nav>
  )
}