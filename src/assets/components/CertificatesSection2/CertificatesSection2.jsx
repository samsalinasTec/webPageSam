import React, { useState, useEffect } from 'react';
import IBMCertificateAnalysis from "/src/assets/components/CertificatesSection2/CourseraIBMDataAnalysis.png";
import IBMCertificateExcel from "/src/assets/components/CertificatesSection2/IBMCertificateExcel.png";
import IBMCertificateVisualization from "/src/assets/components/CertificatesSection2/IBMCertificateVisualization.png";
import UdemyCertificatePython from "/src/assets/components/CertificatesSection2/UdemyCertificatePython.png";

const CertificatesSection2 = () => {
  // Cantidad de tarjetas
  const TOTAL_CERTIFICATES = 4;

  // Estado para controlar cuál tarjeta está “al frente” (0,1,2,3...)
  const [currentIndex, setCurrentIndex] = useState(0);

  // Intervalo para avanzar de tarjeta cada 5 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % TOTAL_CERTIFICATES);
    }, 15000/TOTAL_CERTIFICATES); // 5s, asumiendo que en tu CSS cada tarjeta está visible 5s
    return () => clearInterval(interval);
  }, []);

  return (
    <div id='ExperienceSection' className=" banner mt-2 mb-2 mx-2 py-0 px-0 md:p-0 ">
      <p className="text-sm text-gray-500 text-center mb-1 autoShow">Check</p>
      <h2 className="text-4xl text-Gray-letrasTitulo font-bold text-center mb-10 autoShow">My Certificates</h2>
      <div className="sliderCertificate autoShowFaster" style={{ "--quantity": TOTAL_CERTIFICATES }}>
      <div className=" bg-TranslucidFilter p-5 rounded-lg  cardCertificate borderBottom-gradiente" style={{ "--position": 1 ,"--phase": 0}}>
      <img src={IBMCertificateAnalysis} alt="IBM1" />
      </div>
      <div className=" bg-TranslucidFilter p-5 rounded-lg  cardCertificate borderBottom-gradiente" style={{ "--position": 2 ,"--phase": 3}}>
      <img src={IBMCertificateAnalysis} alt="IBM2" />
      </div>

      <div className=" bg-TranslucidFilter p-5 rounded-lg  cardCertificate borderBottom-gradiente" style={{ "--position": 3 ,"--phase": 2}}>
      <img src={IBMCertificateAnalysis} alt="IBM3" />
      </div>

      <div className=" bg-TranslucidFilter p-5 rounded-lg  cardCertificate borderBottom-gradiente" style={{ "--position": 4 ,"--phase": 1}}>
      <img src={UdemyCertificatePython} alt="Udemy1" />
      </div>



      </div>

      {/* Indicadores (4 circulitos) */}
      <div className="flex justify-center mt-4 gap-2">
        {Array(TOTAL_CERTIFICATES)
          .fill(null)
          .map((_, index) => (
            <span
              key={index}
              className={`w-3 h-3 rounded-full border border-gray-400 
                ${currentIndex === index ? "bg-gray-600" : "bg-white"}`}
            />
          ))}
      </div>
    </div>
  );
};


export default CertificatesSection2;
