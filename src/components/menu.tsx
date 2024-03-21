import "../styles/menu.sass";
import GithubLogo from "../assets/github-mark-white.png";
import LinkedInLogo from "../assets/linkedin-mark-white.png";
import About from "./modals/about.tsx";
import Work from "./modals/work.tsx";
import Projects from "./modals/projects.tsx";
import {useState} from "react";
import Modal from "./modal.tsx";

export function Menu() {
  const [open, setOpen] = useState(false);
  const [content, setContent] = useState("projects");

  const changeModalContent = (name: string) => {
    if (!open) setOpen(true);
    if (name !== content) {
      setContent(name);
    } else if (name === content && open) {
      setOpen(false);
    }
  }

  return (
    <nav>
      <ul>
        <div id={"pages"}>
          <li className={"button"} onClick={() => changeModalContent("about")}>About</li>
          <li className={"button"} onClick={() => changeModalContent("work")}>Work</li>
          <li className={"button"} onClick={() => changeModalContent("projects")}>Projects</li>
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
      <Modal openExt={open} setOpenExt={() => setOpen(false)}>
        {content === "about" && <About/>}
        {content === "work" && <Work/>}
        {content === "projects" && <Projects/>}
      </Modal>
    </nav>
  )
}