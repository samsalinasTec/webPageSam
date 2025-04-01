import React, { useState } from 'react';
import profileFoto from './ProfilewebsiteImageRounded2.png'; // Asegúrate de que la ruta sea correcta

const ProfileSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleDownloadCV = () => {
    const link = document.createElement('a');
    link.href = 'http://localhost:5173/CVEspSST.pdf'; // Cambia esto a la ruta real de tu CV
    link.setAttribute('download', 'Samuel_Salinas_CV.pdf');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const handleWhatsapp = () => {
    const phoneNumber = '1234567890'; // Reemplaza con tu número, incluye código de país, sin signos ni espacios
    const message = encodeURIComponent('Hola, estoy interesado en contactarte a través de WhatsApp!');
    const url = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(url, '_blank');
  };

  return (
    <>
      <div
        id="ProfileSection"
        className="flex items-center  justify-center p-4 md:p-20 mx-auto mb-24 mr-2 ml-2"
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
          <div className="max-w-md text-white p-8">
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
                onClick={openModal}
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
              <button
                onClick={handleWhatsapp}
                className="
                  border-gradient ml-4 relative flex h-[50px] w-40 items-center justify-center 
                  overflow-hidden rounded-lg text-white shadow-2xl transition-all 
                  before:absolute before:h-0 before:w-0 before:rounded-full 
                  before:bg-gradient-to-r before:from-red-700 before:to-orange-400 
                  before:duration-500 before:ease-out hover:shadow-orange-600 
                  hover:before:h-56 hover:before:w-56
                "
              >
                <span className="relative z-3">Whatsapp</span>
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

      {/* Modal de Contact Info */}
      {isModalOpen && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
          onClick={closeModal}
        >
          <div
            className="bg-white p-6 rounded-lg shadow-lg"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closeModal}
              className="text-red-500 font-bold mb-4"
            >
              X
            </button>
            <h2 className="text-2xl font-bold mb-4">Contacto</h2>
            <p>Teléfono: 123-456-7890</p>
            <p>Localización: Ciudad, País</p>
            <p>Email: ejemplo@correo.com</p>
          </div>
        </div>
      )}
    </>
  );
};

export default ProfileSection;