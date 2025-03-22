import React, { useState, useEffect } from 'react'
import Navbar from './assets/components/Navbar/Navbar'
import ProfileSection from './assets/components/ProfileSection/ProfileSection'
import AboutMeSection from './assets/components/AboutMe/AboutMe'
import ExperienceSection2 from './assets/components/ExperienceSection2/ExperienceSection2'
import ProjectsSection from './assets/components/ProjectsSection/ProjectsSection'
import ContactSection from './assets/components/ContactSection/ContactSection'
import InferiorNavbar from './assets/components/InferiorNavbar/InferiorNavbar'
import CertificatesSection from './assets/components/CertificatesSection/CertificatesSection'
import CertificatesSection2 from './assets/components/CertificatesSection2/CertificatesSection2'





const App = () => {

  return (
    <div className="bg-black w-full">
      <Navbar />
      <ProfileSection />
      <AboutMeSection />
      <ExperienceSection2/>
      <CertificatesSection2/>
      <ProjectsSection />
      <ContactSection />
      <InferiorNavbar />
    </div>
  );
};

export default App;
