import React from 'react';
import Project1Image from "./DashboardNacionalGradientColors.png"
import Project2Image from "./DashboardModelsGradientColors.png"

const ProjectsSection=() =>{
  return (
    <div id='ProjectsSection' className="flex p-10 mt-10 mb-2 mr-2 ml-2">
      <div className="container mx-auto">
        <p className="text-sm text-gray-500 text-center mb-1 autoShow">Browse</p>
        <h2 className="text-4xl font-bold text-center mb-10 text-Gray-letrasTitulo autoShow">My Recent Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-5 gap-5 list">
          {/* Tarjeta de Proyecto One */}
          <div className="bg-TranslucidFilter rounded-lg p-0.5 w-full h-full item">
            <img src={Project1Image} alt="Project One" className="rounded-lg mb-4 w-auto h-auto"/>
            <h3 className="text-xl font-semibold text-center mb-2 text-Gray-letrasTitulo">Project One</h3>
            <p className="text-center mb-4 text-Gray-letrasTexto">Better Communication with Each Other</p>
            <div className="flex justify-center space-x-2">
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                GitHub
              </button>
              <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
                Live Demo
              </button>
            </div>
            
          </div>
          {/* Tarjeta de Proyecto Two */}
          <div className="bg-TranslucidFilter rounded-lg p-0.5 w-full h-full item">
            <img src={Project2Image} alt="Project One" className="rounded-lg mb-4 w-full h-auto"/>
            <h3 className="text-xl font-semibold text-center mb-2 text-Gray-letrasTitulo">Project One</h3>
            <p className="text-center mb-4 text-Gray-letrasTexto">Better Communication with Each Other</p>
            <div className="flex justify-center space-x-2">
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                GitHub
              </button>
              <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
                Live Demo
              </button>
            </div>
          </div>
          {/* Tarjeta de Proyecto */}
          <div className="bg-TranslucidFilter rounded-lg p-0.5 w-full h-full item">
            <img src={Project1Image} alt="Project One" className="rounded-lg mb-4 w-full h-auto"/>
            <h3 className="text-xl font-semibold text-center mb-2 text-Gray-letrasTitulo">Project One</h3>
            <p className="text-center mb-4 text-Gray-letrasTexto">Better Communication with Each Other</p>
            <div className="flex justify-center space-x-2">
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                GitHub
              </button>
              <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
                Live Demo
              </button>
            </div>
          </div>
          {/* Tarjeta de Proyecto */}
          <div className="bg-TranslucidFilter rounded-lg p-0.5 w-full h-full item">
            <img src={Project1Image} alt="Project One" className="rounded-lg mb-4 w-full h-auto"/>
            <h3 className="text-xl font-semibold text-center mb-2 text-Gray-letrasTitulo">Project One</h3>
            <p className="text-center mb-4 text-Gray-letrasTexto">Better Communication with Each Other</p>
            <div className="flex justify-center space-x-2">
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                GitHub
              </button>
              <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
                Live Demo
              </button>
            </div>
          </div>
          {/* Tarjeta de Proyecto Three */}
          <div className="bg-TranslucidFilter rounded-lg p-0.5  w-full h-full item">
            
            <img src={Project1Image} alt="Project One" className="rounded-lg mb-4 w-full h-auto"/>
            <h3 className="text-xl font-semibold text-center mb-2 text-Gray-letrasTitulo">Project One</h3>
            <p className="text-center mb-4 text-Gray-letrasTexto">Better Communication with Each Other</p>
            <div className="flex justify-center space-x-2">
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                GitHub
              </button>
              <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
                Live Demo
              </button>
            </div>
            </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectsSection;