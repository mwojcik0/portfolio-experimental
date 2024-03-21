import "../styles/menu.sass";
import GithubLogo from "../assets/github-mark-white.png";
import LinkedInLogo from "../assets/linkedin-mark-white.png";
import About from "./modals/about.tsx";
import Work from "./modals/work.tsx";
import Projects from "./modals/projects.tsx";
import {useEffect, useState} from "react";
import Modal from "./modal.tsx";
import {Route, Routes, useLocation, useNavigate} from "react-router-dom";

function ModalContentRouter() {
  return (
    <Routes>
      <Route path="/about" element={<About/>}/>
      <Route path="/work" element={<Work/>}/>
      <Route path="/projects" element={<Projects/>}/>
      <Route path="/" element={<div/>}/>
    </Routes>
  );
}

export function Menu() {
  const navigate = useNavigate();
  const location = useLocation(); // Use useLocation hook to access the current URL path
  const [open, setOpen] = useState(false);
  const [currentPath, setCurrentPath] = useState("");

  const closeModal = () => {
    setOpen(false);
    setCurrentPath("/");
    navigate("/");
  }

  const changeModalContent = (path: string) => {
    if (!open) setOpen(true);
    if (currentPath !== path) {
      setCurrentPath(path);
      navigate(path);
    } else if (currentPath === path && currentPath !== "/" && open) closeModal();
  }

  useEffect(() => {
    const path = location.pathname;
    if (['/work', '/about', '/projects'].includes(path)) {
      setOpen(true);
      setCurrentPath(path);
    }
  }, [location.pathname]);

  return (
    <nav>
      <ul className={"links"}>
        <li className={"button"} onClick={() => changeModalContent("/about")}>About</li>
        <li className={"button"} onClick={() => changeModalContent("/work")}>Work</li>
        <li className={"button"} onClick={() => changeModalContent("/projects")}>Projects</li>
      </ul>
      <ul id={"socials"} className={"links"}>
        <li className={"button"}><a href={"https://github.com/mwojcik0"} target={"_blank"}>
          <img src={GithubLogo} alt={"Github logo"}/>
        </a></li>
        <li className={"button"}><a href={"https://linkedin.com/in/marcelwojcikshort"} target={"_blank"}>
          <img src={LinkedInLogo} alt={"LinkedIn logo"}/>
        </a></li>
      </ul>
      <Modal openExt={open} setOpenExt={() => closeModal()}>
        <ModalContentRouter/>
      </Modal>
    </nav>
  )
}