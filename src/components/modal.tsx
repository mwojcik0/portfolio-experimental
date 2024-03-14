import { useState } from "react";
import "../styles/modal.sass";
import {IoClose} from "react-icons/io5";

export default function Modal({name}: {name: string}) {
  const [open, setOpen] = useState(false);

  const openModal = () => {
    if (!open) {
      setOpen(true);
      setTimeout(() => {
        const modal = document.getElementById("overlay");
        if (modal !== null) {
          var opacity = window.getComputedStyle(modal).getPropertyValue('opacity');
          modal.style.opacity = opacity === "1" ? "0" : "1";
          var blur = window.getComputedStyle(modal).getPropertyValue('backdrop-filter');
          modal.style.backdropFilter = blur === "blur(20px)" ? "blur(0)" : "blur(20px)";
        }
      }, 1);
    } else {
      const modal = document.getElementById("overlay");
      if (modal !== null) {
        var opacity = window.getComputedStyle(modal).getPropertyValue('opacity');
        modal.style.opacity = opacity === "1" ? "0" : "1";
        var blur = window.getComputedStyle(modal).getPropertyValue('backdrop-filter');
        modal.style.backdropFilter = blur === "blur(20px)" ? "blur(0)" : "blur(20px)";
        setTimeout(() => { if (open) setOpen(false); }, 300) // zamknięcie modalu po zniknięciu
      }
    }
  }

  return (
    <>
      <li><a id="openModal" onClick={openModal} href={`/${name}`}>{name}</a></li>
      {open && (
        <div id="overlay">
          <div id="modal" className="dialog">
            <button id="closeModal" className="dialog-close-btn" onClick={openModal}><IoClose size={"xl"}/></button>
            <p>A pop-up modal component made with the native HTML dialog element with custom styles.</p>
          </div>
        </div>
      )}
    </>
  )
}
