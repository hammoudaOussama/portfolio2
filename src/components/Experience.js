'use client';

import { Calendar, MapPin, ArrowRight } from 'lucide-react';

const Experience = () => {
    const experiences = [
    {
      id: 1,
      position: 'Cloud Engineer',
      company: 'Zen Networks',
      location: 'Casablanca, Morocco',
      period: 'March 2025 - September 2025',
      logo: '/logos/Zen.png',
      logoAlt: 'ZN',
      description: 'Designing and implementing cloud infrastructure solutions using AWS and modern DevOps practices. Managing cloud migrations, CI/CD pipelines, and ensuring high availability systems.',
      technologies: ['AWS', 'Docker', 'Kubernetes', 'Terraform', 'Python'],
      achievements: [
        'Optimized cloud infrastructure reducing costs by 35%',
        'Implemented automated deployment pipelines',
        'Led successful AWS migration for 5+ applications'
      ]
    },
    {
      id: 2,
      position: 'Data Analyst',
      company: 'T-MANDIS',
      location: 'Casablanca, Morocco',
      period: 'July 2024 - August 2024',
      logo: '/logos/T-MANDIS.png',
      logoAlt: 'TM',
      description: 'Analyzed complex datasets to provide actionable business insights. Created dashboards and reports for stakeholders. Optimized data pipelines and ETL processes.',
      technologies: ['Python', 'SQL', 'Power BI', 'Excel', 'Tableau'],
      achievements: [
        'Created 20+ automated reports saving 10 hours/week',
        'Identified cost-saving opportunities worth 100K+ MAD',
        'Built predictive models improving decision-making'
      ]
    },
    {
      id: 3,
      position: 'Full-Stack Developer',
      company: 'Marsa Maroc',
      location: 'Casablanca, Morocco',
      period: 'July 2023 - August  2023',
      logo: '/logos/marsa.png',
      logoAlt: 'MM',
      description: 'Developed end-to-end web applications for port management systems. Built responsive UIs and robust backend services. Collaborated with stakeholders to deliver solutions.',
      technologies: ['React', 'Node.js', 'PostgreSQL', 'Docker', 'AWS'],
      achievements: [
        'Developed shipping management system used by 100+ users',
        'Reduced system downtime by 60%',
        'Improved application performance by 45%'
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 px-4 bg-gray-800/30">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Professional Experience</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-amber-500 mx-auto mt-6"></div>
        </div>

        {/* Experience Timeline */}
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={exp.id}
              className="relative"
            >
              {/* Timeline Line */}
              {index !== experiences.length - 1 && (
                <div className="absolute left-10 top-24 w-1 h-20 bg-gradient-to-b from-cyan-500 to-amber-500 hidden md:block"></div>
              )}

              {/* Experience Card */}
              <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 hover:border-cyan-500/50 rounded-xl p-8 transition-all duration-300 hover:transform hover:scale-105">
                <div className="flex flex-col md:flex-row gap-6">
                  {/* Logo */}
                  <div className="flex-shrink-0">
                    <div className="w-20 h-20 rounded-lg bg-gradient-to-br from-cyan-500 to-amber-600 p-1 flex items-center justify-center overflow-hidden">
                      <img
                        src={exp.logo}
                        alt={exp.company}
                        className="w-full h-full object-cover rounded-md bg-white"
                        onError={(e) => {
                          e.target.style.display = 'none';
                          e.target.parentElement.querySelector('[data-fallback]').style.display = 'flex';
                        }}
                      />
                      <div
                        data-fallback
                        className="w-full h-full rounded-md bg-gradient-to-br from-cyan-500 to-amber-600 flex items-center justify-center text-white font-bold text-lg hidden"
                      >
                        {exp.logoAlt}
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-grow">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <div>
                        <h3 className="text-2xl font-bold text-cyan-400 mb-2">
                          {exp.position}
                        </h3>
                        <p className="text-xl text-white font-semibold mb-3">
                          {exp.company}
                        </p>
                      </div>

                      {/* Meta Info */}
                      <div className="flex flex-col items-start md:items-end text-gray-400 text-sm space-y-1">
                        <div className="flex items-center space-x-2">
                          <Calendar size={16} />
                          <span>{exp.period}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <MapPin size={16} />
                          <span>{exp.location}</span>
                        </div>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-gray-300 mb-6 leading-relaxed">
                      {exp.description}
                    </p>

                    {/* Achievements */}
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-amber-400 mb-3 uppercase tracking-wider">
                        Key Achievements
                      </h4>
                      <ul className="space-y-2">
                        {exp.achievements.map((achievement, idx) => (
                          <li key={idx} className="flex items-start text-gray-300 text-sm">
                            <ArrowRight size={14} className="text-cyan-400 mr-3 mt-1 flex-shrink-0" />
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 bg-cyan-500/20 text-cyan-300 rounded-full text-xs font-medium border border-cyan-500/30"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Summary Stats */}
        <div className="mt-16 grid md:grid-cols-3 gap-6">
          <div className="text-center p-6 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-lg border border-cyan-500/20">
            <div className="text-3xl font-bold text-cyan-400 mb-2">3+</div>
            <p className="text-gray-300">Companies</p>
          </div>
          <div className="text-center p-6 bg-gradient-to-br from-amber-500/10 to-orange-500/10 rounded-lg border border-amber-500/20">
            <div className="text-3xl font-bold text-amber-400 mb-2">2+</div>
            <p className="text-gray-300">Years Experience</p>
          </div>
          <div className="text-center p-6 bg-gradient-to-br from-cyan-500/10 to-amber-500/10 rounded-lg border border-cyan-500/20">
            <div className="text-3xl font-bold text-cyan-400 mb-2">6+</div>
            <p className="text-gray-300">Projects Delivered</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
