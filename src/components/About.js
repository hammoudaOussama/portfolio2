'use client';

import { Github, Linkedin, Mail, Download } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 px-4 bg-gray-800/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">About Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-amber-500 mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-semibold mb-4 text-cyan-400">Who I Am</h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                I'm a full-stack developer and cloud computing enthusiast with a solid foundation in software engineering and a passion for building robust and scalable applications. With hands-on experience in both frontend and backend development, I enjoy creating seamless user experiences backed by powerful and secure architectures.
              </p>
              <p className="text-gray-300 leading-relaxed mb-4">
                Over the past few years, I've worked on diverse projects ranging from interactive web platforms built with React and Django to cloud-native solutions deployed on AWS. One of my most notable experiences was leading the migration of heterogeneous environments to AWS, where I utilized services like AWS MGN, DMS, and RDS to ensure a smooth, secure, and cost-efficient transition. This project deepened my expertise in cloud infrastructure, DevOps practices, and automation.
              </p>
              <p className="text-gray-300 leading-relaxed mb-4">
                I have a strong interest in data engineering, API development, and modern JavaScript frameworks, and I'm constantly seeking new ways to improve performance, usability, and reliability. I take pride in writing clean, maintainable code and in designing systems that are as elegant as they are functional.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Outside of coding, I'm an active learner who enjoys exploring emerging technologies, contributing to open-source projects, and sharing my knowledge through mentoring and technical writing. I believe in continuous improvement, collaboration, and the power of technology to solve real-world problems.
              </p>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 gap-6 py-6">
              <div className="text-center p-4 bg-gray-800/50 rounded-lg">
                <div className="text-2xl font-bold text-cyan-400 mb-1">10+</div>
                <div className="text-gray-400 text-sm">Projects Completed</div>
              </div>
              <div className="text-center p-4 bg-gray-800/50 rounded-lg">
                <div className="text-2xl font-bold text-amber-500 mb-1">2+</div>
                <div className="text-gray-400 text-sm">Years Experience</div>
              </div>
            </div>

            {/* CV Downloads Section */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-white mb-3">Download My CV</h4>
              <div className="grid md:grid-cols-2 gap-4">
                <a
                  href="/cv/resume.pdf"
                  download="Hammouda_Oussama_FullStack_CV.pdf"
                  className="flex items-center justify-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-cyan-600 rounded-lg hover:from-cyan-600 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105 font-medium text-white"
                >
                  <Download size={18} className="mr-2" />
                  Fullstack Developer
                </a>

                <a
                  href="/cv/cvdta.pdf"
                  download="Hammouda_Oussama_DataAnalyst_CV.pdf"
                  className="flex items-center justify-center px-6 py-3 bg-gradient-to-r from-amber-500 to-amber-600 rounded-lg hover:from-amber-600 hover:to-amber-700 transition-all duration-300 transform hover:scale-105 font-medium text-white"
                >
                  <Download size={18} className="mr-2" />
                  Data Analyst
                </a>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-3 pt-4">
              <a
                href="https://github.com/hammoudaoussama"
                className="p-3 bg-gray-800 rounded-lg hover:bg-gray-700 transition-all duration-300 transform hover:scale-110"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
              >
                <Github size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/oussama-hammouda-202840271/"
                className="p-3 bg-gray-800 rounded-lg hover:bg-gray-700 transition-all duration-300 transform hover:scale-110"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="mailto:hammoudaoussama23@gmail.com"
                className="p-3 bg-gray-800 rounded-lg hover:bg-gray-700 transition-all duration-300 transform hover:scale-110"
                aria-label="Send Email"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Optional: Image or illustration */}
          <div className="flex justify-center">
            <img
              src="/images/profile.jpg"
              alt="Profile"
              className="rounded-2xl w-80 h-auto shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
