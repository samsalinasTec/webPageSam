import React from 'react';
import LinkednIcon from "./Linkedn.png"

const ContactSection= () => {
    return (
      <div  id='ContactSection' className=" p-10 mt-2 mb-2 mr-2 ml-2">
        <div className="container mx-auto">
          <p className="text-sm text-gray-500 text-center mb-1 autoShowMedium">Get In Touch</p>
          <h2 className="text-4xl font-bold text-center mb-4 text-Gray-letrasTitulo autoShowMedium">Contact Me</h2>
          <div className="flex justify-center autoShowMedium">
            <div className="border border-gray-300 rounded-full px-6 py-2 flex items-center">
              {/* Email with icon */}
              <div className="flex items-center space-x-3 mr-4">
                <img src={LinkednIcon} alt="Email Icon" className="h-6 w-6" />
                <span className="text-gray-600">samyst_1998@hotmail.com</span>
              </div>
              {/* LinkedIn with icon */}
              <div className="flex items-center space-x-3">
                <img src={LinkednIcon} alt="LinkedIn Icon" className="h-6 w-6" />
                <a href="https://www.linkedin.com/in/your-profile" className="text-blue-600">
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

export default ContactSection;
