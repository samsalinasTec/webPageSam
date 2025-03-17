// NavbarInferior.jsx
import React from 'react';
import Logo from "./react.svg"

const InferiorNavbar = () => {
  return (
    <nav className=" p-5 flex justify-center items-center mt-2 mb-2 mr-2 ml-2">
        <button className="btn-trs-border text-gray-800 hover:text-blue-500 px-4 py-2 transition-colors duration-300 btn-hover-effect rounded-lg" onClick={() => window.scrollTo({ top: document.getElementById('about').offsetTop, behavior: 'smooth' })}>
          About
        </button>
        <button className="btn-trs-border text-gray-800 hover:text-blue-500 px-4 py-2 transition-colors duration-300 btn-hover-effect" onClick={() => window.scrollTo({ top: document.getElementById('experience').offsetTop, behavior: 'smooth' })}>
          Experience
        </button>
        <button className="btn-trs-border text-gray-800 hover:text-blue-500 px-4 py-2 transition-colors duration-300 btn-hover-effect rounded-lg" onClick={() => window.scrollTo({ top: document.getElementById('projects').offsetTop, behavior: 'smooth' })}>
          Projects
        </button>
        <button className="btn-trs-border link-with-border text-gray-800 hover:text-blue-500 px-4 py-2 transition-colors duration-300 btn-hover-effect rounded-lg" onClick={() => window.scrollTo({ top: document.getElementById('contact').offsetTop, behavior: 'smooth' })}>
          Contact
        </button>

    </nav>
  );
}

export default InferiorNavbar;
