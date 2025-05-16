import React from 'react';
import { motion } from 'framer-motion';
import {ExternalLink } from 'lucide-react';
// import { Github } from 'lucide-react';
import Section from './ui/Section';
import Card from './ui/Card';
import Tag from './ui/Tag';
import Button from './ui/Button';
import { projects } from '../data/projects';

const Projects: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };
  
  const cardVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  };
  
  return (
    <Section id="projects" title="Projects">
      {/* Featured Projects (larger cards) */}
      <div className="mb-16">
        <h3 className="text-xl font-medium text-dark-200 mb-8">Featured Work</h3>
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          variants={containerVariants}
        >
          {projects
            .filter(project => project.featured)
            .map(project => (
              <motion.div 
                key={project.id}
                variants={cardVariants}
              >
                <Card className="h-full flex flex-col">
                  <div 
                    className="h-60 bg-cover bg-center rounded-t-2xl"
                    style={{ backgroundImage: `url(${project.imageUrl})` }}
                  />
                  <div className="p-6 flex flex-col flex-grow">
                    <h3 className="text-xl font-medium text-dark-100 mb-2">{project.title}</h3>
                    <p className="text-dark-300 mb-4 flex-grow">{project.description}</p>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag, index) => (
                        <Tag key={index} label={tag} colorKey={tag.toLowerCase()} />
                      ))}
                    </div>
                    
                    <div className="flex space-x-3">
                      {/* <Button 
                        variant="ghost" 
                        size="sm" 
                        icon={<Github className="w-4 h-4" />}
                        href={project.githubUrl}
                      >
                        Code
                      </Button> */}
                      <Button 
                        variant="primary" 
                        size="sm" 
                        icon={<ExternalLink className="w-4 h-4" />}
                        href={project.demoUrl}
                      >
                        Demo Video
                      </Button>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
        </motion.div>
      </div>
    {/* Other Projects (smaller grid) */}
<div>
  <h3 className="text-xl font-medium text-dark-200 mb-8">Other Projects</h3>
  <Card className="h-full flex flex-col items-center justify-center text-center p-6 bg-opacity-70  rounded-2xl border border-white/10 shadow-lg">
    <h2 className="text-2xl font-semibold text-purple-400 mb-2 animate-pulse">
      Brewing Ideas ☕
    </h2>
    <h2 className="text-xl text-gray-300 mb-2">
      Thinking and exploring...
    </h2>
    <p className="text-sm text-gray-400">
      Projects will be deployed here soon.
    </p>
  </Card>
</div>
    </Section>
  );
};

export default Projects;