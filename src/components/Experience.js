"use client";

import React from "react";

const experiences = [
	{
		role: "Cloud Engineer",
		company: "Zen Networks",
		period: "2023 - Present",
		location: "Remote",
		logo: "/logos/Zen.png",
		description:
			"Designed and maintained cloud infrastructures on AWS, automated deployments, and optimized costs.",
		tech: ["AWS", "Terraform", "Docker", "Kubernetes"],
	},
	{
		role: "Data Analyst",
		company: "T-MANDIS",
		period: "2021 - 2023",
		location: "Casablanca",
		logo: "/logos/T-MANDIS.png",
		description:
			"Analyzed business data, built dashboards and ETL pipelines for reporting and decision-making.",
		tech: ["Python", "Pandas", "SQL", "Tableau"],
	},
	{
		role: "Fullstack Developer",
		company: "Marsa Maroc",
		period: "2019 - 2021",
		location: "Casablanca",
		logo: "/logos/marsa.png",
		description:
			"Developed fullstack web applications, integrated APIs, and maintained critical systems.",
		tech: ["React", "Node.js", "PostgreSQL", "Docker"],
	},
];

const Experience = () => {
	return (
		<section id="experience" className="py-20 px-4 bg-gray-900/0">
			<div className="max-w-7xl mx-auto">
				<div className="text-center mb-12">
					<h2 className="text-4xl font-bold mb-2">
						<span className="gradient-text">Experience</span>
					</h2>
					<p className="text-gray-400 max-w-2xl mx-auto">
						some of my experiences.
					</p>
				</div>

				<div className="space-y-6">
						{experiences.map((exp, idx) => (
						<div
							key={idx}
							className="bg-gray-800 p-6 rounded-lg border border-gray-700 hover:border-cyan-500/50 flex items-center gap-6 transition-all"
						>
							<div className="w-20 h-20 flex-shrink-0 rounded-md bg-gray-700 flex items-center justify-center overflow-hidden">
								{exp.logo ? (
									// If you don't have the logo file put a placeholder in public/logos/
									// or the fallback initials will appear instead
									<img src={exp.logo} alt={`${exp.company} logo`} className="w-full h-full object-contain" />
								) : (
									<div className="text-xl font-bold text-white">{exp.company.split(' ')[0].slice(0,2)}</div>
								)}
							</div>

							<div className="flex-1">
								<div className="flex items-center justify-between">
									<div>
										<h3 className="text-xl font-semibold text-cyan-400">{exp.role}</h3>
										<p className="text-gray-300">{exp.company} • {exp.location}</p>
									</div>
									<div className="text-sm text-gray-400">{exp.period}</div>
								</div>

								<p className="text-gray-300 mt-3">{exp.description}</p>

								<div className="mt-3 flex flex-wrap gap-2">
									{exp.tech.map((t) => (
										<span key={t} className="px-2 py-1 bg-gray-700 text-sm rounded-md text-gray-200">
											{t}
										</span>
									))}
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Experience;
