
import React, { useState } from 'react';

const CertificatesSection = () => {
  // Aquí defines el listado de certificados que quieres mostrar.
  // Podrías almacenar la URL de la imagen, un enlace a tu PDF, etc.
  const certificates = [
    {
      title: 'Certificado 1',
      imageUrl: 'src/assets/components/CertificatesSection/CourseraIBMDataAnalysis.png', // Ajusta la ruta a donde tengas tu imagen
      link: 'https://www.ejemplo.com/certificado1' // Si tienes un link al certificado
    },
    {
      title: 'Certificado 2',
      imageUrl: './Coursera 5XEELTSDXLN2.pdf',
      link: 'https://www.ejemplo.com/certificado2'
    },
    {
      title: 'Certificado 3',
      imageUrl: './Coursera 5XEELTSDXLN2.pdf',
      link: 'https://www.ejemplo.com/certificado3'
    },
    // Agrega más certificados según lo necesites
  ];

  // Índice actual del carrusel
  const [currentIndex, setCurrentIndex] = useState(0);

  // Función para mostrar el certificado anterior
  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? certificates.length - 1 : prevIndex - 1
    );
  };

  // Función para mostrar el siguiente certificado
  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === certificates.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="max-w-4xl mx-auto p-4">
        <p className="text-sm text-gray-500 text-center mb-1 autoShow">Check</p>
        <h2 className="text-4xl text-gray-300 font-bold text-center mb-10 autoShow">My Certificates</h2>
      <div className="relative flex items-center justify-center">
        {/* Flecha para ir al anterior */}
        <button
          onClick={handlePrev}
          className="absolute left-0 text-2xl font-bold px-3 py-2 bg-gray-200 rounded-full hover:bg-gray-300 focus:outline-none"
          style={{ top: '50%', transform: 'translateY(-50%)' }}
        >
          &#x276E;
        </button>

        {/* Contenedor de la imagen/contenido del certificado */}
        <div className="w-full h-96 flex items-center justify-center overflow-hidden">
          <a
            href={certificates[currentIndex].link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center"
          >
            <img
              src={certificates[currentIndex].imageUrl}
              alt={certificates[currentIndex].title}
              className="max-h-full object-contain mx-auto"
            />
            <p className="text-center mt-2">{certificates[currentIndex].title}</p>
          </a>
        </div>

        {/* Flecha para ir al siguiente */}
        <button
          onClick={handleNext}
          className="absolute right-0 text-2xl font-bold px-3 py-2 bg-gray-200 rounded-full hover:bg-gray-300 focus:outline-none"
          style={{ top: '50%', transform: 'translateY(-50%)' }}
        >
          &#x276F;
        </button>
      </div>

      {/* Indicadores (opcional) */}
      <div className="flex justify-center mt-4">
        {certificates.map((_, index) => (
          <div
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 mx-1 rounded-full cursor-pointer ${
              index === currentIndex ? 'bg-blue-600' : 'bg-gray-300'
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default CertificatesSection;
