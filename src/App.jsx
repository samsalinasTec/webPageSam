import React, { useState, useEffect } from 'react'
import Navbar from './assets/components/Navbar/Navbar'
import ProfileSection from './assets/components/ProfileSection/ProfileSection'
import AboutMeSection from './assets/components/AboutMe/AboutMe'
import ExperienceSection from './assets/components/ExperienceSection/ExperienceSection'
import ProjectsSection from './assets/components/ProjectsSection/ProjectsSection'
import ContactSection from './assets/components/ContactSection/ContactSection'
import InferiorNavbar from './assets/components/InferiorNavbar/InferiorNavbar'
import CertificatesSection from './assets/components/CertificatesSection/CertificatesSection'




const App = () => {

  return (
    <div className="bg-black w-full">
      <Navbar />
      <ProfileSection />
      <AboutMeSection />
      <ExperienceSection/>
      <CertificatesSection/>
      <ProjectsSection />
      <ContactSection />
      <InferiorNavbar />
    </div>
  );
};

export default App;
