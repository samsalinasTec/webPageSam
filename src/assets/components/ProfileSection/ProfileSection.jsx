import React from 'react';
import profileFoto from "./ProfilewebsiteImageRounded2.png"

const ProfileSection = () => {

  const handleDownloadCV = () => {
    const link = document.createElement('a');
    link.href = 'http://localhost:5173/CVEspSST.pdf'; // Cambia esto a la ruta real de tu CV
    link.setAttribute('download', 'Samuel_Salinas_CV.pdf'); 
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div
      id="ProfileSection"
      className="flex items-center justify-center p-4 md:p-20 mx-auto mb-24 mr-2 ml-2"
    >
      <div
        className="
          flex
          flex-col md:flex-row 
          items-center justify-center
          w-full
          space-y-8 md:space-y-0 md:space-x-32
        "
      >
        {/* Contenedor para el texto */}
        <div className="max-w-md text-white">
          <h1 className="text-3xl font-bold text-Gray-letrasTitulo">
            Samuel Salinas
          </h1>
          <p className="text-xl mt-2">Data Scientist</p>
          <p className="mt-4 text-Gray-letrasTexto">
            Hello, I'm a passionate Data Scientist and Python Developer....
          </p>
          <div className="flex mt-4 items-center justify-center md:justify-start">
            <button
              onClick={handleDownloadCV}
              className="
                border-gradient relative flex h-[50px] w-40 items-center justify-center 
                overflow-hidden text-white shadow-2xl transition-all 
                before:absolute before:h-0 before:w-0 before:rounded-full 
                before:bg-gradient-to-r before:from-red-700 before:to-orange-400 
                before:duration-500 before:ease-out hover:shadow-orange-600 
                hover:before:h-56 hover:before:w-56
              "
            >
              <span className="relative z-3">Download CV</span>
            </button>
            <button
              className="
                border-gradient ml-4 relative flex h-[50px] w-40 items-center justify-center 
                overflow-hidden rounded-lg text-white shadow-2xl transition-all 
                before:absolute before:h-0 before:w-0 before:rounded-full 
                before:bg-gradient-to-r before:from-red-700 before:to-orange-400 
                before:duration-500 before:ease-out hover:shadow-orange-600 
                hover:before:h-56 hover:before:w-56
              "
            >
              <span className="relative z-3">Contact Info</span>
            </button>
          </div>
        </div>

        {/* Contenedor para la imagen */}
        <div className="flex-shrink-0">
          <img
            src={profileFoto}
            alt="Foto perfil"
            className="h-[320px] w-auto rounded-3xl object-cover lg:h-[420px]"
          />
        </div>
      </div>
    </div>
  );
};

export default ProfileSection;