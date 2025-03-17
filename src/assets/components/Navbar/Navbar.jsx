import React, { useState } from 'react'
import Logo from "./react.svg"



const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 48,
        behavior: "smooth",
      });
    }
    setIsOpen(false); // Cierra el menú al hacer clic
  };

  return (
    <nav className="z-20  w-full bg-transparent text-white shadow">
      {/* -- NAV DESKTOP -- */}
      <div className="hidden md:flex max-w-screen-xl mx-auto px-4 py-2 items-center justify-between">
        {/* Logo y título */}
        <div className="flex items-center">
          <img src={Logo} alt="Logo" className="h-10 w-auto mr-3" />
          <span className="text-xl font-bold">Samuel Salinas</span>
        </div>
        {/* Botones desktop */}
        <div className="space-x-2">
          <button
            className="btn-trs-border px-4 py-2 transition hover:-translate-y-0.5"
            onClick={() => scrollToSection("AboutMe")}
          >
            About
          </button>
          <button
            className="btn-trs-border px-4 py-2 transition hover:-translate-y-0.5"
            onClick={() => scrollToSection("ExperienceSection")}
          >
            Experience
          </button>
          <button
            className="btn-trs-border px-4 py-2 transition hover:-translate-y-0.5"
            onClick={() => scrollToSection("ProjectsSection")}
          >
            Projects
          </button>
          <button
            className="btn-trs-border px-4 py-2 transition hover:-translate-y-0.5"
            onClick={() => scrollToSection("ContactSection")}
          >
            Contact
          </button>
          <button
            className="btn-trs-border px-4 py-2 transition hover:-translate-y-0.5"
            onClick={() => scrollToSection("projects")}
          >
            Gradient border
          </button>
        </div>
      </div>

      {/* -- NAV MOBILE: solo el botón hamburguesa -- */}
      <div className="flex md:hidden justify-end px-4 py-2">
        <button type="button" onClick={() => setIsOpen(!isOpen)}>
          {/* Ícono hamburger (SVG de ejemplo) */}
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {/* -- DRAWER MOBILE -- */}
      <div
        className={`
          fixed top-0 right-0 h-screen w-46 
          bg-gradient-to-r from-sky-500 to-blue-500 
          shadow-inner z-30 
          transform transition-transform duration-300 ease-in-out
          ${isOpen ? "translate-x-0" : "translate-x-full"}
        `}
      >
        <div className="flex justify-end p-4">
          {/* Botón para cerrar el drawer (opcional) */}
          <button onClick={() => setIsOpen(false)}>
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Enlaces Mobile */}
        <button
          className="block w-full text-left py-2 btn-trs-border hover:-translate-y-0.5 px-6"
          onClick={() => scrollToSection("AboutMe")}
        >
          About
        </button>
        <button
          className="block w-full text-left py-2 btn-trs-border hover:-translate-y-0.5 px-6"
          onClick={() => scrollToSection("ExperienceSection")}
        >
          Experience
        </button>
        <button
          className="block w-full text-left py-2 btn-trs-border hover:-translate-y-0.5 px-6"
          onClick={() => scrollToSection("ProjectsSection")}
        >
          Projects
        </button>
        <button
          className="block w-full text-left py-2 btn-trs-border hover:-translate-y-0.5 px-6"
          onClick={() => scrollToSection("ContactSection")}
        >
          Contact
        </button>
        <button
          className="block w-full text-left py-2 btn-trs-border hover:-translate-y-0.5 px-6"
          onClick={() => scrollToSection("projects")}
        >
          Gradient border
        </button>
      </div>
    </nav>
  );
};

export default Navbar;