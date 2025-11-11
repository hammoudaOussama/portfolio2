'use client';

import { useState } from 'react';
import { Github, ExternalLink, Eye } from 'lucide-react';

const Projects = () => {
    const [selectedProject, setSelectedProject] = useState(null);

    const projects = [
        {
            id: 1,
            title: "E-Commerce Platform",
            shortDescription: "Full-stack e-commerce solution with modern features",
            fullDescription: "A comprehensive e-commerce platform built with React and Node.js. Features include user authentication, payment integration with Stripe, admin dashboard, inventory management, and real-time order tracking. The platform supports multiple payment methods and has a responsive design that works seamlessly across all devices.",
            image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&h=400&fit=crop",
            tech: ["React", "Node.js", "MongoDB", "Express", "Stripe", "JWT"],
            github: "https://github.com/hammoudaOussama/ecom",
            live: "https://your-ecommerce.com",
            features: [
                "User Authentication & Authorization",
                "Shopping Cart & Checkout",
                "Payment Integration (Stripe)",
                "Admin Dashboard",
                "Order Management",
                "Responsive Design"
            ]
        },
        {
            id: 2,
            title: "Task Management App",
            shortDescription: "Collaborative task management with real-time updates",
            fullDescription: "A modern task management application that enables teams to collaborate effectively. Built with Next.js and TypeScript, it features real-time updates, drag-and-drop functionality, team collaboration tools, and detailed analytics. The app includes role-based permissions and integrates with popular calendar applications.",
            image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop",
            tech: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "Socket.io", "Tailwind"],
            github: "https://github.com/yourusername/taskapp",
            live: "https://your-taskapp.com",
            features: [
                "Real-time Collaboration",
                "Drag & Drop Interface",
                "Team Management",
                "Progress Tracking",
                "Calendar Integration",
                "Custom Workflows"
            ]
        },
        {
            id: 3,
            title: "Weather Dashboard",
            shortDescription: "Real-time weather data with interactive visualizations",
            fullDescription: "An interactive weather dashboard that provides comprehensive weather information with beautiful visualizations. Built with Vue.js and D3.js, it features location-based forecasts, interactive maps, detailed weather analytics, and historical data comparison. The dashboard uses multiple weather APIs to ensure accuracy.",
            image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=600&h=400&fit=crop",
            tech: ["Vue.js", "D3.js", "Chart.js", "OpenWeather API", "Mapbox", "SCSS"],
            github: "https://github.com/hammoudaOussama/projet-flutter",
            live: "https://github.com/hammoudaOussama/projet-flutter",
            features: [
                "Real-time Weather Data",
                "Interactive Maps",
                "7-day Forecasts",
                "Weather Alerts",
                "Historical Data",
                "Multiple Locations"
            ]
        },
        {
            id: 4,
            title: "Ai Chatbot : Text Generator",
            shortDescription: "Analytics dashboard for social media management",
            fullDescription: "A comprehensive social media analytics dashboard that helps businesses track their social media performance across multiple platforms. Built with React and Python, it integrates with various social media APIs to provide real-time insights, engagement metrics, and automated reporting features.",
            image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
            tech: ["React", "Java", "Springboot", "PostgreSQL", "Redis", "Chart.js"],
            github: "https://github.com/hammoudaOussama/AI-ChatBot",
            
               features: [
            "Natural Language Processing (NLP)",
            "Multi-format Content Generation",
            "Customizable Writing Styles",
            "Grammar & Spell Check",
            "SEO Content Optimization",
            "Plagiarism Detection",
            "Multi-language Text Generation",
            "Template-based Generation",
            "Real-time Collaboration",
            "Export to Multiple Formats",
            "API Integration",
            "Content Analytics & Insights"
        ]
        },
        {
            id: 5,
            title: "OussMigration : Migration Platform",
            shortDescription: "Complete LMS with course management and progress tracking",
            fullDescription: "A full-featured learning management system designed for educational institutions and corporate training. Built with Next.js and Node.js, it includes course creation tools, student progress tracking, interactive quizzes, video streaming, and certification management.",
            image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&h=400&fit=crop",
            tech: ["React", "Django", "SQLite", "WSL", "AWS CLI"],
            github: "https://github.com/hammoudaOussama/Migration-Plat",
            live: "https://your-lms.com",
           features: [
            "Document Management & Verification",
            "Multi-Country Immigration Guidelines",
            "Application Status Tracking",
            "Legal Document Templates",
            "Visa Requirements Calculator",
            "Immigration Timeline Planner",
            "Multi-language Support",
            "Expert Consultation Booking",
            "Document Translation Services",
            "Compliance Monitoring",
            "Fee Calculator & Payment Processing",
            "Real-time Updates & Notifications"
        ]
        },
        {
            id: 6,
            title: "Online Shopping-Cart",
            shortDescription: "A responsive and interactive shopping cart web application ",
            fullDescription: "This shopping cart project is a modern full-stack web application developed using React on the frontend and C# (ASP.NET Core) on the backend. The application enables users to browse products, add or remove items from their cart, update quantities, and automatically see the total price update in real-time.",
            image: "https://images.unsplash.com/photo-1518546305927-5a555bb7020d?w=600&h=400&fit=crop",
            tech: ["React", "C#", "Redis", "WebSocket", "Tailwind CSS", "MongoDB"],
            github: "https://github.com/hammoudaOussama/shopping-cart",
            live: "https://github.com/hammoudaOussama/shopping-cart",
            features: [
                "Real-time Price Updates",
                "Stock Management",
                "Price Alerts",
                "Advanced Charting",
                "Market News",
                "Checkout Process"
            ]
        }
    ];

    const openModal = (project) => {
        setSelectedProject(project);
        document.body.style.overflow = 'hidden';
    };

    const closeModal = () => {
        setSelectedProject(null);
        document.body.style.overflow = 'unset';
    };

    return (
        <section id="projects" className="py-20 px-4">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        <span className="gradient-text">Featured Projects</span>
                    </h2>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                        Here are some of my recent projects that showcase my skills and passion for creating amazing digital experiences.
                    </p>
                    <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-amber-500 mx-auto mt-6"></div>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project) => (
                        <div
                            key={project.id}
                            className="group bg-gray-800 rounded-xl overflow-hidden hover:transform hover:scale-105 transition-all duration-300 border border-gray-700 hover:border-cyan-500/50"
                        >
                            {/* Project Image */}
                            <div className="relative h-48 overflow-hidden">
                                <div
                                    className="w-full h-full bg-cover bg-center group-hover:scale-110 transition-transform duration-300"
                                    style={{ backgroundImage: `url(${project.image})` }}
                                ></div>
                                <div className="absolute inset-0 bg-black/50 group-hover:bg-black/30 transition-colors duration-300"></div>

                                {/* Overlay on hover */}
                                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <button
                                        onClick={() => openModal(project)}
                                        className="px-4 py-2 bg-cyan-500 text-white rounded-lg hover:bg-cyan-600 transition-colors flex items-center"
                                    >
                                        <Eye size={16} className="mr-2" />
                                        View Details
                                    </button>
                                </div>
                            </div>

                            {/* Project Info */}
                            <div className="p-6">
                                <h3 className="text-xl font-semibold mb-3 text-cyan-400 group-hover:text-cyan-300 transition-colors">
                                    {project.title}
                                </h3>
                                <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                                    {project.shortDescription}
                                </p>

                                {/* Tech Stack */}
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.tech.slice(0, 3).map((tech, techIndex) => (
                                        <span
                                            key={techIndex}
                                            className="px-2 py-1 bg-cyan-500/20 text-cyan-300 rounded text-xs font-medium"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                    {project.tech.length > 3 && (
                                        <span className="px-2 py-1 bg-gray-600/50 text-gray-400 rounded text-xs">
                                            +{project.tech.length - 3} more
                                        </span>
                                    )}
                                </div>

                                {/* Links */}
                                <div className="flex justify-between items-center">
                                    <div className="flex space-x-3">
                                        <a
                                            href={project.github}
                                            className="flex items-center text-gray-400 hover:text-cyan-400 transition-colors text-sm"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <Github size={16} className="mr-1" />
                                            Code
                                        </a>
                                        <a
                                            href={project.live}
                                            className="flex items-center text-gray-400 hover:text-cyan-400 transition-colors text-sm"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <ExternalLink size={16} className="mr-1" />
                                            Live
                                        </a>
                                    </div>
                                    <button
                                        onClick={() => openModal(project)}
                                        className="text-cyan-400 hover:text-cyan-300 transition-colors text-sm font-medium"
                                    >
                                        Learn More →
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Modal */}
                {selectedProject && (
                    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
                        <div className="bg-gray-800 rounded-xl max-w-4xl max-h-[90vh] overflow-y-auto border border-gray-700">
                            {/* Modal Header*/}
                            <div className="sticky top-0 bg-gray-800 border-b border-gray-700 p-6 flex justify-between items-center">
                                <h3 className="text-2xl font-bold gradient-text">{selectedProject.title}</h3>
                                <button
                                    onClick={closeModal}
                                    className="text-gray-400 hover:text-white transition-colors text-2xl"
                                >
                                    ×
                                </button>
                            </div>

                            {/* Modal Content */}
                            <div className="p-6">
                                <div className="grid lg:grid-cols-2 gap-8">
                                    {/* Project Image */}
                                    <div>
                                        <div
                                            className="w-full h-64 bg-cover bg-center rounded-lg mb-4"
                                            style={{ backgroundImage: `url(${selectedProject.image})` }}
                                        ></div>

                                        {/* Tech Stack */}
                                        <div className="mb-6">
                                            <h4 className="text-lg font-semibold mb-3 text-cyan-400">Technologies Used</h4>
                                            <div className="flex flex-wrap gap-2">
                                                {selectedProject.tech.map((tech, index) => (
                                                    <span
                                                        key={index}
                                                        className="px-3 py-1 bg-cyan-500/20 text-cyan-300 rounded-lg text-sm"
                                                    >
                                                        {tech}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>

                                        {/* Links */}
                                        <div className="flex space-x-4">
                                            <a
                                                href={selectedProject.github}
                                                className="flex items-center px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded-lg transition-colors"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                <Github size={18} className="mr-2" />
                                                View Code
                                            </a>
                                            <a
                                                href={selectedProject.live}
                                                className="flex items-center px-4 py-2 bg-cyan-500 hover:bg-cyan-600 rounded-lg transition-colors"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                <ExternalLink size={18} className="mr-2" />
                                                Live Demo
                                            </a>
                                        </div>
                                    </div>

                                    {/* Project Details */}
                                    <div>
                                        <div className="mb-6">
                                            <h4 className="text-lg font-semibold mb-3 text-cyan-400">About This Project</h4>
                                            <p className="text-gray-300 leading-relaxed">{selectedProject.fullDescription}</p>
                                        </div>

                                        <div>
                                            <h4 className="text-lg font-semibold mb-3 text-cyan-400">Key Features</h4>
                                            <ul className="space-y-2">
                                                {selectedProject.features.map((feature, index) => (
                                                    <li key={index} className="flex items-center text-gray-300">
                                                        <div className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></div>
                                                        {feature}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
};

export default Projects;