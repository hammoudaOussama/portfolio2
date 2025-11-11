'use client';

import { useState } from 'react';

const Skills = () => {
    const [activeCategory, setActiveCategory] = useState('Frontend');

    const skillCategories = {
        Frontend: {
            icon: '🎨',
            skills: [
                { name: 'React', level: 95, color: 'from-cyan-400 to-blue-500' },
                { name: 'Next.js', level: 90, color: 'from-gray-400 to-gray-600' },
                { name: 'TypeScript', level: 88, color: 'from-cyan-400 to-cyan-600' },
                { name: 'Vue.js', level: 85, color: 'from-green-400 to-green-600' },
                { name: 'Angular', level: 92, color: 'from-teal-400 to-cyan-500' },
                { name: 'SASS/SCSS', level: 87, color: 'from-pink-400 to-rose-500' },
            ]
        },
        Backend: {
            icon: '⚙️',
            skills: [
                { name: 'Node.js', level: 90, color: 'from-green-400 to-green-600' },
                { name: 'Python', level: 90, color: 'from-yellow-400 to-orange-500' },
                { name: 'Express.js', level: 88, color: 'from-gray-400 to-gray-600' },
                { name: 'Django', level: 90, color: 'from-green-600 to-green-800' },
                { name: 'REST APIs', level: 85, color: 'from-cyan-400 to-cyan-600' },
                { name: 'Java', level: 93, color: 'from-amber-400 to-amber-600' },
            ]
        },
        Database: {
            icon: '🗄️',
            skills: [
                { name: 'MongoDB', level: 90, color: 'from-green-400 to-green-600' },
                { name: 'PostgreSQL', level: 85, color: 'from-cyan-400 to-cyan-600' },
                { name: 'MySQL', level: 82, color: 'from-orange-400 to-orange-600' },
                { name: 'Firebase', level: 88, color: 'from-yellow-400 to-orange-500' },
                { name: 'Redis', level: 78, color: 'from-red-400 to-red-600' },
                { name: 'Supabase', level: 80, color: 'from-green-400 to-teal-500' },
            ]
        },
        Tools: {
            icon: '🛠️',
            skills: [
                { name: 'Git', level: 95, color: 'from-orange-400 to-red-500' },
                { name: 'Docker', level: 82, color: 'from-cyan-400 to-cyan-600' },
                { name: 'AWS', level: 78, color: 'from-orange-400 to-yellow-500' },
                { name: 'Vercel', level: 90, color: 'from-gray-400 to-gray-600' },
                { name: 'Jest', level: 85, color: 'from-red-400 to-red-600' },
                { name: 'Figma', level: 87, color: 'from-cyan-400 to-amber-500' },
            ]
        }
    };

    const certifications = [
        {
            name: 'IBM Data Science Professional Certificate',
            issuer: 'IBM    ',
            date: '2024',
            badge: 'https://www.coursera.org/account/accomplishments/specialization/certificate/IM95Y8BNOPYB'
        },
        {
            name: 'Jenkins Specialization',
            issuer: 'LeanKartS',
            date: '2024',
            badge: 'https://www.coursera.org/account/accomplishments/specialization/certificate/6PG0PDA03O3N'
        },
        {
            name: '.Net Full Stack Development',
            issuer: 'BoardInfinity',
            date: '2022',
            badge: 'https://www.coursera.org/account/accomplishments/certificate/S41GXRZSPNJV'
        }
    ];

    return (
        <section id="skills" className="py-20 px-4 bg-gray-800/30">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        <span className="gradient-text">Skills & Technologies</span>
                    </h2>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                        Here are the technologies and tools I work with to bring ideas to life.
                    </p>
                    <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-amber-500 mx-auto mt-6"></div>
                </div>

                {/* Skills Section */}
                <div className="mb-16">
                    {/* Category Tabs */}
                    <div className="flex flex-wrap justify-center gap-4 mb-12">
                        {Object.keys(skillCategories).map((category) => (
                            <button
                                key={category}
                                onClick={() => setActiveCategory(category)}
                                className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${activeCategory === category
                                        ? 'bg-gradient-to-r from-cyan-500 to-amber-600 text-white'
                                        : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                                    }`}
                            >
                                <span className="mr-2">{skillCategories[category].icon}</span>
                                {category}
                            </button>
                        ))}
                    </div>

                    {/* Skills Grid */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {skillCategories[activeCategory].skills.map((skill, index) => (
                            <div
                                key={skill.name}
                                className="bg-gray-800 p-6 rounded-lg border border-gray-700 hover:border-cyan-500/50 transition-all duration-300"
                                style={{ animationDelay: `${index * 0.1}s` }}
                            >
                                <div className="flex justify-between items-center mb-3">
                                    <h3 className="text-lg font-semibold text-white">{skill.name}</h3>
                                    <span className="text-cyan-400 font-medium">{skill.level}%</span>
                                </div>

                                {/* Progress Bar */}
                                <div className="w-full bg-gray-700 rounded-full h-2">
                                    <div
                                        className={`h-2 rounded-full bg-gradient-to-r ${skill.color} transition-all duration-1000 ease-out`}
                                        style={{ width: `${skill.level}%` }}
                                    ></div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Certifications Section */}
                <div className="text-center mb-12">
                    <h3 className="text-3xl font-bold mb-8">
                        <span className="gradient-text">Certifications</span>
                    </h3>

                    <div className="grid md:grid-cols-3 gap-8">
                        {certifications.map((cert, index) => (
                            <div
                                key={index}
                                className="bg-gray-800 p-6 rounded-lg border border-gray-700 hover:border-cyan-500/50 transition-all duration-300 hover:transform hover:scale-105"
                            >
                                {/* Badge Placeholder */}
                                <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-br from-cyan-400 to-amber-500 rounded-full flex items-center justify-center">
                                    <span className="text-2xl">🏆</span>
                                </div>

                                <h4 className="text-lg font-semibold mb-2 text-cyan-400">{cert.name}</h4>
                                <p className="text-gray-300 mb-2">{cert.issuer}</p>
                                <p className="text-gray-500 text-sm">{cert.date}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Additional Info */}
                <div className="grid md:grid-cols-2 gap-8 mt-16">
                    <div className="bg-gradient-to-br from-cyan-500/10 to-amber-500/10 p-8 rounded-lg border border-cyan-500/20">
                        <h3 className="text-2xl font-bold mb-4 gradient-text">What I'm Learning</h3>
                        <ul className="space-y-3 text-gray-300">
                            <li className="flex items-center">
                                <div className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></div>
                                Web3 & Blockchain Development
                            </li>
                            <li className="flex items-center">
                                <div className="w-2 h-2 bg-amber-500 rounded-full mr-3"></div>
                                Machine Learning with TensorFlow
                            </li>
                            <li className="flex items-center">
                                <div className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></div>
                                Advanced DevOps with Kubernetes
                            </li>
                            <li className="flex items-center">
                                <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
                                Mobile Development with React Native
                            </li>
                        </ul>
                    </div>

                    <div className="bg-gradient-to-br from-green-500/10 to-cyan-500/10 p-8 rounded-lg border border-green-500/20">
                        <h3 className="text-2xl font-bold mb-4 gradient-text">My Approach</h3>
                        <ul className="space-y-3 text-gray-300">
                            <li className="flex items-center">
                                <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
                                Clean, maintainable code
                            </li>
                            <li className="flex items-center">
                                <div className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></div>
                                User-centered design thinking
                            </li>
                            <li className="flex items-center">
                                <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                                Performance optimization
                            </li>
                            <li className="flex items-center">
                                <div className="w-2 h-2 bg-purple-400 rounded-full mr-3"></div>
                                Continuous learning & improvement
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;