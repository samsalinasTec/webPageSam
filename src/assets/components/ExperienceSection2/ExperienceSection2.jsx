import React, { useEffect, useRef } from 'react';
import htmlIcon from "./HTML.png"
import pythonIcon from "./Python.png"
import JavaScriptIcon from "./JavaScript.png"
import cssIcon from "./CSS.png"
import vbaIcon from "./VBA.png"
import IllustratorIcon from "./AdobeIlustrator.png"
import powerAppsIcon from "./AdobeIlustrator.png"




const ExperienceSection2 = () => {
  return (
    <div id='ExperienceSection' className="mt-2 mb-10 mx-2 py-0 px-0 md:p-0 overflow-x-hidden" 
    style={{ 
      "--width": "100px", "--height": "100px" ,"--quantity": 7,"--gap": "20px" 
    }} >

      <p className="text-sm text-gray-500 text-center mb-1 autoShow">Explore</p>
      <h2 className="text-4xl text-Gray-letrasTitulo font-bold text-center mb-10 autoShow">My Experience</h2>
      <div className='sliderReel text-white mb-10'>
        <div className='mb-10 text-center '>
        <h2 > Data analysis</h2>
        </div>
      <div className="listReelLeft">
      <div className='item text-white text-center' style={{"--itemNumber":1}}>
        <img src={htmlIcon} alt="HTML" />
        <h3>HTML</h3>
      </div>
      <div className='item text-white text-center' style={{"--itemNumber":2}}>
        <img src={pythonIcon} alt="Python" />
        <h3>HTML</h3>
      </div>
      <div className='item text-white text-center'  style={{"--itemNumber":3}}>
        <img src={JavaScriptIcon} alt="JavaScript"/>
        <h3>HTML</h3>
      </div>
      <div className='item text-white text-center' style={{"--itemNumber":4}}>
        <img src={cssIcon} alt="CSS" />
        <h3>HTML</h3>
      </div>
      <div className='item text-white text-center' style={{"--itemNumber":5}}>
        <img src={vbaIcon} alt="VBA" />
        <h3>HTML</h3>
      </div>
      <div className='item text-white text-center' style={{"--itemNumber":6}}>
        <img src={IllustratorIcon} alt="Adobe Illustrator" />
        <h3>Illustrator</h3>
      </div>
      <div className='item text-white text-center' style={{"--itemNumber":7}}>
        <img src={powerAppsIcon} alt="Power Apps" />
        <h3>Power Apps</h3>
      </div>
        
      </div>
      </div>



      <div className='sliderReel text-white mb-10'>
        <div className='mb-10 text-center '>
        <h2 > Data Science</h2>
        </div>
      <div className="listReelRight">
      <div className='item text-white text-center' style={{"--itemNumber":1}}>
        <img src={htmlIcon} alt="HTML" />
        <h3>HTML</h3>
      </div>
      <div className='item text-white text-center' style={{"--itemNumber":2}}>
        <img src={pythonIcon} alt="Python" />
        <h3>HTML</h3>
      </div>
      <div className='item text-white text-center'  style={{"--itemNumber":3}}>
        <img src={JavaScriptIcon} alt="JavaScript"/>
        <h3>HTML</h3>
      </div>
      <div className='item text-white text-center' style={{"--itemNumber":4}}>
        <img src={cssIcon} alt="CSS" />
        <h3>HTML</h3>
      </div>
      <div className='item text-white text-center' style={{"--itemNumber":5}}>
        <img src={vbaIcon} alt="VBA" />
        <h3>HTML</h3>
      </div>
      <div className='item text-white text-center' style={{"--itemNumber":6}}>
        <img src={IllustratorIcon} alt="Adobe Illustrator" />
        <h3>Illustrator</h3>
      </div>
      <div className='item text-white text-center' style={{"--itemNumber":7}}>
        <img src={powerAppsIcon} alt="Power Apps" />
        <h3>Power Apps</h3>
      </div>
        
      </div>
      </div>


    </div>
  );
};

export default ExperienceSection2;
