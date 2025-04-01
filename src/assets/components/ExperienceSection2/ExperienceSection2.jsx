import React from 'react';

// 1. Importa tus imágenes
import htmlIcon from "./HTML.png";
import pythonIcon from "./Python.png";
import JavaScriptIcon from "./JavaScript.png";
import cssIcon from "./CSS.png";
import vbaIcon from "./VBA.png";
import IllustratorIcon from "./AdobeIlustrator.png"; // Ajusta al nombre exacto de tu archivo
import PhotoShopIcon from "./PhotoShop.png";
import powerAppsIcon from "./PowerApps.png";
import powerBiIcon from "./PowerBi.png";
import cloudComputingIcon from "./CloudComputing.png";
import cognosIcon from "./Cognos.png";
import excelIcon from "./Excel.png";
import generativeAiIcon from "./GenerativeAI.png";
import gitIcon from "./Git.png";
import sqlIcon from "./Sql.png";



const ExperienceSection2 = () => {
  return (
    <div>
    <div id='ExperienceSection' className="mt-2 mb-10 mx-2 py-0 px-0 md:p-0 overflow-x-hidden" 
    style={{ 
      "--width": "100px", "--height": "100px" ,"--quantity": 6,"--gap": "20px" 
    }} >

      <p className="text-sm text-gray-500 text-center mb-1 autoShow">Explore</p>
      <h2 className="text-4xl text-Gray-letrasTitulo font-bold text-center mb-10 autoShow">My Experience</h2>
      <div className='sliderReel text-white mb-32'>
        <div className=' text-center text-2xl text-Gray-letrasTitulo bg-orange-200 w-52 justify-center rounded-lg mx-auto'>
        <h2 > Data science and data analysis</h2>
        </div>
      <div className="listReel bg-orange-200 h-36 p-3">

      <div className='itemLeft text-white text-center' style={{"--itemNumber": 1}}>
            <img src={pythonIcon} alt="Python" />
            <h3>Python</h3>
          </div>

          <div className='itemLeft text-white text-center' style={{"--itemNumber": 2}}>
            <img src={cloudComputingIcon} alt="Cloud Computing" />
            <h3>Cloud Computing</h3>
          </div>

          <div className='itemLeft text-white text-center' style={{"--itemNumber": 3}}>
            <img src={excelIcon} alt="Excel" />
            <h3>Excel</h3>
          </div>

          <div className='itemLeft text-white text-center' style={{"--itemNumber": 4}}>
            <img src={generativeAiIcon} alt="Generative AI" />
            <h3>Generative AI</h3>
          </div>

          <div className='itemLeft text-white text-center' style={{"--itemNumber": 5}}>
            <img src={sqlIcon} alt="SQL" />
            <h3>SQL</h3>
          </div>

          <div className='itemLeft text-white text-center' style={{"--itemNumber": 6}}>
            <img src={powerBiIcon} alt="Power BI" />
            <h3>Power BI</h3>
          </div>
        
      </div>
      </div>
      </div>

      <div id='ExperienceSection2' className="mt-2 mb-10 mx-2 py-0 px-0 md:p-0 overflow-x-hidden" 
    style={{ 
      "--width": "100px", "--height": "100px" ,"--quantity": 6,"--gap": "20px" 
    }} >
      <div className='sliderReel text-white mb-32 '>
        <div className='text-center text-2xl text-Gray-letrasTitulo bg-lime-200 w-52 justify-center rounded-lg mx-auto '>
        <h2>Web Development & Graphic design</h2>
        </div>
      <div className="listReel bg-lime-200 h-36 p-3">
      <div className='itemRight text-white text-center' style={{"--itemNumber":1}}>
        <img src={htmlIcon} alt="HTML" />
        <h3>HTML</h3>
      </div>
      <div className='itemRight text-white text-center' style={{"--itemNumber": 2}}>
            <img src={JavaScriptIcon} alt="JavaScript" />
            <h3>JavaScript</h3>
          </div>
          <div className='itemRight text-white text-center' style={{"--itemNumber": 3}}>
            <img src={cssIcon} alt="CSS" />
            <h3>CSS</h3>
          </div>
          <div className='itemRight text-white text-center' style={{"--itemNumber": 4}}>
            <img src={gitIcon} alt="Git" />
            <h3>Git</h3>
          </div>

          <div className='itemRight text-white text-center' style={{"--itemNumber": 5}}>
            <img src={IllustratorIcon} alt="Adobe Illustrator" />
            <h3>Illustrator</h3>
          </div>
          <div className='itemRight text-white text-center' style={{"--itemNumber": 6}}>
            <img src={PhotoShopIcon} alt="Photoshop" />
            <h3>Photoshop</h3>
          </div>

      </div>
      </div>
      </div>


    

    </div>
  );
};

export default ExperienceSection2;
