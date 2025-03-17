import React, { useEffect, useRef } from 'react';
import htmlIcon from "./HTML.png"
import pythonIcon from "./Python.png"
import JavaScriptIcon from "./JavaScript.png"
import cssIcon from "./CSS.png"
import vbaIcon from "./VBA.png"
import IllustratorIcon from "./AdobeIlustrator.png"
import powerAppsIcon from "./AdobeIlustrator.png"




const ExperienceSection = () => {
  return (
    <div id='ExperienceSection' className=" banner mt-2 mb-2 mx-2 py-0 px-0 md:p-0">
      <p className="text-sm text-gray-500 text-center mb-1 autoShow">Explore</p>
      <h2 className="text-4xl text-Gray-letrasTitulo font-bold text-center mb-10 autoShow">My Experience</h2>
      <div className="slider"  style={{ "--quantity": 4 }}>
        {/* Tarjeta de Desarrollo Frontend */}
        <div className=" bg-TranslucidFilter p-5 rounded-lg  card borderBottom-gradiente" style={{ "--position": 1 }}>
            <h3 className="text-2xl font-bold text-center mb-4 text-gray-300">Frontend Development</h3>
            <div className="grid grid-cols-2 gap-4 text-gray-400">
              <div className="flex items-center space-x-1 overflow-hidden pl-0 hover:pl-3 transition-all duration-300">
                <img src={htmlIcon} alt="HTML Icon" className="h-14 relative right-3"/>
                <p className='space-x-2'>HTML - Experienced</p>
              </div>
              <div className="flex items-center space-x-1 overflow-hidden pl-0 hover:pl-3 transition-all duration-300">
                <img src={pythonIcon} alt="Python Icon" className="h-12 relative right-3"/>
                <p>Python - Experienced</p>
              </div>
              <div className="flex items-center space-x-1 overflow-hidden pl-0 hover:pl-3 transition-all duration-300">
                <img src={cssIcon} alt="CSS Icon" className="h-12 relative right-3"/>
                <p>CSS- Intermediate</p>
              </div>
              <div className="flex items-center space-x-1 overflow-hidden pl-0 hover:pl-3 transition-all duration-300">
                <img src={JavaScriptIcon} alt="JavaScript Icon" className="h-12 relative right-3"/>
                <p>JavaScript - Basic</p>
              </div>
              <div className="flex items-center space-x-1 overflow-hidden pl-0 hover:pl-3 transition-all duration-300">
                <img src={vbaIcon} alt="VBA Icon" className="h-12 relative right-3"/>
                <p>VBA - Basic</p>
              </div>
              <div className="flex items-center space-x-1 overflow-hidden pl-0 hover:pl-3 transition-all duration-300">
                <img src={IllustratorIcon} alt="Illustrator Icon" className="h-10 relative right-3"/>
                <p>Illustrator - Intermediate</p>
              </div>
              <div className="flex items-center space-x-1 overflow-hidden pl-0 hover:pl-3 transition-all duration-300">
                <img src={powerAppsIcon} alt="PowerApps Icon" className="h-12 relative right-3"/>
                <p>Power Apps - Intermediate</p>
              </div>
            </div>
        </div>

        <div className="bg-TranslucidFilter  p-5 rounded-lg card borderBottom-gradiente" style={{ "--position": 2 }}>
            <h3 className="text-2xl font-bold text-center mb-4 text-gray-300">Backend Development0000</h3>
            <div className="grid grid-cols-2 gap-4 text-gray-400">
              <div className="flex items-center space-x-1 overflow-hidden pl-0 hover:pl-3 transition-all duration-300">
                <img src={htmlIcon} alt="HTML Icon" className="h-14 relative right-3"/>
                <p className='space-x-2'>HTML - Experienced</p>
              </div>
              <div className="flex items-center space-x-1 overflow-hidden pl-0 hover:pl-3 transition-all duration-300">
                <img src={pythonIcon} alt="Python Icon" className="h-12 relative right-3"/>
                <p>Python - Experienced</p>
              </div>
              <div className="flex items-center space-x-1 overflow-hidden pl-0 hover:pl-3 transition-all duration-300">
                <img src={cssIcon} alt="CSS Icon" className="h-12 relative right-3"/>
                <p>CSS- Intermediate</p>
              </div>
              <div className="flex items-center space-x-1 overflow-hidden pl-0 hover:pl-3 transition-all duration-300">
                <img src={JavaScriptIcon} alt="JavaScript Icon" className="h-12 relative right-3"/>
                <p>JavaScript - Basic</p>
              </div>
              <div className="flex items-center space-x-1 overflow-hidden pl-0 hover:pl-3 transition-all duration-300">
                <img src={vbaIcon} alt="VBA Icon" className="h-12 relative right-3"/>
                <p>VBA - Basic</p>
              </div>
              <div className="flex items-center space-x-1 overflow-hidden pl-0 hover:pl-3 transition-all duration-300">
                <img src={IllustratorIcon} alt="Illustrator Icon" className="h-10 relative right-3"/>
                <p>Illustrator - Intermediate</p>
              </div>
              <div className="flex items-center space-x-1 overflow-hidden pl-0 hover:pl-3 transition-all duration-300">
                <img src={powerAppsIcon} alt="PowerApps Icon" className="h-12 relative right-3"/>
                <p>Power Apps - Intermediate</p>
              </div>
            </div>
        </div>

        <div className="bg-TranslucidFilter  bg-trans p-5 rounded-lg  card borderBottom-gradiente" style={{ "--position": 3 }}>
            <h3 className="text-2xl font-bold text-center mb-4 text-gray-300">Backend Developmentsasas</h3>
            <div className="grid grid-cols-2 gap-4 text-gray-400">
              <div className="flex items-center space-x-1 overflow-hidden pl-0 hover:pl-3 transition-all duration-300">
                <img src={htmlIcon} alt="HTML Icon" className="h-14 relative right-3"/>
                <p className='space-x-2'>HTML - Experienced</p>
              </div>
              <div className="flex items-center space-x-1 overflow-hidden pl-0 hover:pl-3 transition-all duration-300">
                <img src={pythonIcon} alt="Python Icon" className="h-12 relative right-3"/>
                <p>Python - Experienced</p>
              </div>
              <div className="flex items-center space-x-1 overflow-hidden pl-0 hover:pl-3 transition-all duration-300">
                <img src={cssIcon} alt="CSS Icon" className="h-12 relative right-3"/>
                <p>CSS- Intermediate</p>
              </div>
              <div className="flex items-center space-x-1 overflow-hidden pl-0 hover:pl-3 transition-all duration-300">
                <img src={JavaScriptIcon} alt="JavaScript Icon" className="h-12 relative right-3"/>
                <p>JavaScript - Basic</p>
              </div>
              <div className="flex items-center space-x-1 overflow-hidden pl-0 hover:pl-3 transition-all duration-300">
                <img src={vbaIcon} alt="VBA Icon" className="h-12 relative right-3"/>
                <p>VBA - Basic</p>
              </div>
              <div className="flex items-center space-x-1 overflow-hidden pl-0 hover:pl-3 transition-all duration-300">
                <img src={IllustratorIcon} alt="Illustrator Icon" className="h-10 relative right-3"/>
                <p>Illustrator - Intermediate</p>
              </div>
              <div className="flex items-center space-x-1 overflow-hidden pl-0 hover:pl-3 transition-all duration-300">
                <img src={powerAppsIcon} alt="PowerApps Icon" className="h-12 relative right-3"/>
                <p>Power Apps - Intermediate</p>
              </div>
            </div>
        </div>

        <div className="bg-TranslucidFilter  bg-trans p-5 rounded-lg  card borderBottom-gradiente|  " style={{ "--position": 4 }}>
            <h3 className="text-2xl font-bold text-center mb-4 text-gray-300">Backend Developmentttttttt</h3>
            <div className="grid grid-cols-2 gap-4 text-gray-400">
              <div className="flex items-center space-x-1 overflow-hidden pl-0 hover:pl-3 transition-all duration-300">
                <img src={htmlIcon} alt="HTML Icon" className="h-14 relative right-3"/>
                <p className='space-x-2'>HTML - Experienced</p>
              </div>
              <div className="flex items-center space-x-1 overflow-hidden pl-0 hover:pl-3 transition-all duration-300">
                <img src={pythonIcon} alt="Python Icon" className="h-12 relative right-3"/>
                <p>Python - Experienced</p>
              </div>
              <div className="flex items-center space-x-1 overflow-hidden pl-0 hover:pl-3 transition-all duration-300">
                <img src={cssIcon} alt="CSS Icon" className="h-12 relative right-3"/>
                <p>CSS- Intermediate</p>
              </div>
              <div className="flex items-center space-x-1 overflow-hidden pl-0 hover:pl-3 transition-all duration-300">
                <img src={JavaScriptIcon} alt="JavaScript Icon" className="h-12 relative right-3"/>
                <p>JavaScript - Basic</p>
              </div>
              <div className="flex items-center space-x-1 overflow-hidden pl-0 hover:pl-3 transition-all duration-300">
                <img src={vbaIcon} alt="VBA Icon" className="h-12 relative right-3"/>
                <p>VBA - Basic</p>
              </div>
              <div className="flex items-center space-x-1 overflow-hidden pl-0 hover:pl-3 transition-all duration-300">
                <img src={IllustratorIcon} alt="Illustrator Icon" className="h-10 relative right-3"/>
                <p>Illustrator - Intermediate</p>
              </div>
              <div className="flex items-center space-x-1 overflow-hidden pl-0 hover:pl-3 transition-all duration-300">
                <img src={powerAppsIcon} alt="PowerApps Icon" className="h-12 relative right-3"/>
                <p>Power Apps - Intermediate</p>
              </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default ExperienceSection;
