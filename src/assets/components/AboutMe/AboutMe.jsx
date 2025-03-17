import React from 'react';
import GraphPNG from "./GraphPNG.png"
import SpherePNG from "./SphereGradient.png"
import ExpIcon from "./ExperienceIcon.png"
import EduIcon from "./EducationIcon.png"
import unamIcon from "./UNAM.png"
import unileverIcon from "./Unilever.png"
import IKE from "./IKE.png"
import AboutMeImage from "./AboutMeIamgeWebPageCropped.png"


const AboutMeSection = () => {
  return (
    <div id='AboutMe' className=" p-5 mt-2 mb-2 mr-2 ml-2 text-white">
      <div className="container mx-auto max-w-screen-2xl">
        <div className="flex justify-center">
          <img src={SpherePNG} alt="Sphere" className="w-1/12 mb-2 autoRotate" />
        </div>
        <p className="text-sm text-gray-500 text-center mb-1 autoShow">Know more</p>
        <h2 className="text-4xl text-gray-300 font-bold text-center mb-10 autoShow">About Me</h2>
        <div className="flex flex-col  gap-4 md:gap-12 items-start autoShowFaster">
          <div className="items-center">
          <img 
  src={AboutMeImage}
  alt="AboutMeImage"
  className="float-left w-5/12 mr-4 mb-2 ml-10 mt-8 md:mt-0 lg:mr-16"
/>

            <p className="text-lg md:mr-64 ml-8 mr-8 mt-16 md:mt-12  lg:mt-20" >
            I am a Data Scientist with a deep fascination for computational sciences and a specialized focus on artificial intelligence, including machine learning and deep learning <br></br>
            <br></br>
            I have four years of experience in data analysis and data science, during which I have developed numerous projects in programming, data analysis, and AI models applied to business optimization.
            Additionally, I have created visualization dashboards to support data-driven decision-making <br></br>
            <br></br>
            I am currently seeking a job opportunity where I can apply my knowledge in data science and continue developing my skills while leveraging the latest technologies.
            I am highly motivated by the challenge of working with large-scale data and exploring various strategies to implement innovative AI-driven solutions.
          </p>

          </div>
          {/* Contenedor para la imagen */}
          {/* Contenedor para las tarjetas y el texto */}
          {/* Contenedor para tarjetas de información */}
          <div className="flex mb-6 w-full justify-center space-x-1 h-52 hover:mb-72 transition-all duration-300">
            {/* Tarjeta de Experiencia */}

            {/* Tarjeta de Educación */}
            <div className="borderBottom-gradiente w-full rounded-sm p-0.5 overflow-hidden transition-all duration-300  h-56 hover:h-[610px]">
              <div className="flex items-center flex-col p-4 rounded-2xl h-full mt-4">
                <img src={IKE} alt="IKE Icon" className="w-3/5 mb-6" />
                <h3 className="text-xl font-semibold text-gray-300">IKE</h3>
                <p className="text-sm text-center">Business data analyst Jr</p>
                <p className="text-sm mb-6">1+ years</p>
                <p className="text-sm text-justify">
                <span className="block md:hidden">
                  I supported clients by managing data and presenting KPIs through Power BI dashboards, providing insights and solutions, and maintaining dashboards for continuous daily monitoring.
                </span>
                <span className="hidden md:block">
                I provided support to the company's clients in the Colombia region by managing their data and presenting their KPIs through Power BI dashboards. I offered insights and solutions based on the data displayed in these dashboards. 
                I also maintained these dashboards after their initial presentation, ensuring that clients could continuously monitor their daily metrics
                </span>
              </p>
              </div>
            </div>
            <div className=" borderBottom-gradiente  w-full rounded-sm p-0.5 overflow-hidden transition-all duration-300  h-56 hover:h-[625px]">
              <div className=" flex items-center flex-col p-4 rounded-2xl h-full">
                <img src={unileverIcon} alt="Experience Icon" className="w-3/5 mb-7" />
                <h3 className="text-xl font-semibold text-gray-300">Unilever</h3>
                <p className="text-sm text-center">Factory Data Coordinator</p>
                <p className="text-sm mb-9">1+ years</p>
                <p className="text-sm text-justify">
                <span className="block md:hidden">
                I ensured accurate reporting, coordinated new projects, managed inter-departmental data, 
                developed strategies for production line data extraction, and maintained KPI stability despite methodological changes by Unilever
                </span>
                <span className="hidden md:block">
                I ensured the proper organization, presentation, accuracy, and compliance of all reports prepared by the data analysts on my team, while also coordinating new projects.Additionally, 
                I facilitated the correct management and presentation of data from other departments. At the same time, we developed strategies to extract data from production lines.
                I ensured that the established KPIs remained unaffected by any methodological changes implemented by Unilever in any area of the factory
                </span>
              </p>
              </div>
            </div>

            <div className="borderBottom-gradiente  w-full rounded-sm p-0.5 overflow-hidden transition-all duration-300  h-56 hover:h-[640px]">
              <div className=" flex items-center  flex-col p-4 rounded-2xl h-full bg-cover bg-no-repeat">
                <img src={unamIcon} alt="UNAM Icon" className="w-2/5 mb-4" />
                <h3 className="text-xl font-semibold text-gray-300 text-center">Tecnologico de Monterrey</h3>
                <p className="text-sm text-center">Data scientist</p>
                <p className="text-sm mb-6">2+ years</p>
                <p className="text-sm text-justify">
                <span className="block md:hidden">
                I developed KPI dashboards for Tec Lotteries executives, built machine learning models for forecasting, 
                classification, and segmentation, and analyzed data patterns in, customer data, promotion effectiveness, and others
                </span>
                <span className="hidden md:block">
                I ensured the proper organization, presentation, accuracy, and compliance of all reports prepared by the data analysts on my team, while also coordinating new projects.Additionally, 
                I facilitated the correct management and presentation of data from other departments. At the same time, we developed strategies to extract data from production lines.
                I ensured that the established KPIs remained unaffected by any methodological changes implemented by Unilever in any area of the factory
                </span>
              </p>
              </div>
            </div>
            

          </div>
          {/* Texto descriptivo */}

        </div>
      </div>
    </div>
  );
}

export default AboutMeSection;