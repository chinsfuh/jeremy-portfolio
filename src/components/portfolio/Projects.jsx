import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { projects } from '@/data/portfolioData';

const SectionHeader = ({ title }) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    viewport={{ once: true }}
    className="text-center mb-16"
  >
    <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent pb-1">
      {title}
    </h2>
    <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto rounded-full"></div>
  </motion.div>
);

const ProjectCard = ({ project, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ delay: index * 0.2 }}
    viewport={{ once: true }}
    className={`bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 hover:border-purple-400/30 transition-all duration-300 hover:transform hover:scale-105 ${
      project.featured ? 'md:col-span-2 lg:col-span-1' : ''
    }`}
  >
    <div className="relative h-48 overflow-hidden">
      {index === 0 && <img  alt="Portfolio Website" className="w-full h-full object-cover" src="\images\landing-page-web-development.webp" />}
      {index === 1 && <img  alt="Portfolio Website" className="w-full h-full object-cover" src="\images\website-application-integration.webp" />}
      {index === 2 && <img  alt="E-Commerce Platform" className="w-full h-full object-cover" src="\images\nirvanamalaysiagroup.webp" />}
      {index === 3 && <img  alt="Task Management App" className="w-full h-full object-cover" src="\images\clicky-website.webp" />}
      {index === 4 && <img  alt="Portfolio Website" className="w-full h-full object-cover" src="\images\cimed-healthcare.webp" />}
      {index === 5 && <img  alt="Portfolio Website" className="w-full h-full object-cover" src="\images\hksb-website.webp" />}

      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
      {project.featured && (
        <div className="absolute top-4 right-4">
          <div className="flex items-center bg-gradient-to-r from-purple-600 to-pink-600 rounded-full px-3 py-1 text-sm font-medium">
            <Star className="w-4 h-4 mr-1" />
            Featured
          </div>
        </div>
      )}
    </div>
    
    <div className="p-6">
      <h3 className="text-xl font-bold mb-3">{project.title}</h3>
      <p className="text-white/70 mb-4 leading-relaxed">{project.description}</p>
      
      <div className="flex flex-wrap gap-2 mb-4">
        {project.tech.map((tech) => (
          <span
            key={tech}
            className="px-3 py-1 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-full text-sm border border-purple-400/30"
          >
            {tech}
          </span>
        ))}
      </div>
      
      <div className="flex space-x-4">
        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
          <Button
            variant="outline"
            size="sm"
            className="border-purple-400/30 text-purple-400 hover:bg-purple-400/10"
          >
            <ExternalLink className="w-4 h-4 mr-2" />
            Live Demo
          </Button>
        </a>
        {/* <a href={project.codeUrl} target="_blank" rel="noopener noreferrer">
          <Button
            variant="outline"
            size="sm"
            className="border-pink-400/30 text-pink-400 hover:bg-pink-400/10"
          >
            <Github className="w-4 h-4 mr-2" />
            Code
          </Button>
        </a> */}
      </div>
    </div>
  </motion.div>
);

const Projects = () => {
  return (
    <section id="projects" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader title="Featured Projects" />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;