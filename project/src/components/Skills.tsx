import React from 'react';
import { motion } from 'framer-motion';
import {
  Code,
  Globe,
  Database,
  Terminal,
  Cpu,
  Palette,
  GitBranch,
  Monitor,
  Server,
  FileJson,
  Layout,
  Wrench,
  Award
} from 'lucide-react';
import Section from './ui/Section';
import Card from './ui/Card';
import { certifications } from '../data/resumeData';

const Skills: React.FC = () => {
      const skillCategories = [
  {
    category: 'Programming',
    skills: [
      { name: 'Python', icon: <Code /> },         
      { name: 'JavaScript', icon: <FileJson /> },
      { name: 'TypeScript', icon: <Terminal /> }, 
      { name: 'HTML/CSS', icon: <Layout /> },
      { name: 'SQL', icon: <Database /> },
      { name: 'C++', icon: <Cpu /> },
    ],
  },
  {
    category: 'Web Technologies',
    skills: [
      { name: 'React', icon: <Globe /> },         
      { name: 'Node.js', icon: <Server /> },
      { name: 'Express', icon: <Monitor /> },     
      { name: 'Tailwind CSS', icon: <Palette /> },
      { name: 'Next.js', icon: <Layout /> },
    ],
  },
  {
    category: 'Data & ML',
    skills: [
      { name: 'PyTorch', icon: <Cpu /> },         
      { name: 'TensorFlow', icon: <Cpu /> },      
      { name: 'NLP', icon: <Code /> },             
      { name: 'Data Visualization', icon: <Layout/> }, 
      { name: 'Jupyter', icon: <Terminal /> },   
    ],
  },
  {
    category: 'Tools & Other',
    skills: [
      { name: 'Git', icon: <GitBranch /> },
      { name: 'Docker', icon: <Wrench /> },
      { name: 'Linux', icon: <Terminal /> },
      { name: 'Figma', icon: <Palette /> },
      { name: 'Writing', icon: <Code /> },         // Technical writing - generic code icon
    ],
  },
];


  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  };

  return (
    <Section id="skills" title="Skills & Certifications">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="space-y-12"
      >
        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="h-full p-6">
                <h3 className="text-xl font-medium text-dark-100 mb-6">{category.category}</h3>
                <div className="grid grid-cols-2 gap-4">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skillIndex}
                      className="flex items-center space-x-2 text-dark-300 hover:text-primary transition-colors"
                      whileHover={{ scale: 1.05 }}
                    >
                      <span className="text-primary">{skill.icon}</span>  
                      <span>{skill.name}</span>
                    </motion.div>
                  ))}
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Certifications */}
        <motion.div variants={itemVariants}>
          <h3 className="text-xl font-medium text-dark-100 mb-6">Certifications</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert) => (
              <motion.div 
                key={cert.id}
                variants={itemVariants}
              >
                <Card className="p-6">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center mb-2">
                        <Award className="w-5 h-5 text-primary mr-2" />
                        <h4 className="text-dark-100 font-medium">{cert.title}</h4>
                      </div>
                      <div className="text-dark-300 text-sm">
                        <p>{cert.issuer}</p>
                        <p className="mt-1">{cert.date}</p>
                      </div>
                    </div>
                    <a 
                      href={cert.url} 
                      target="_blank" 
                      rel="noreferrer"
                      className="text-primary hover:text-primary-light transition-colors ml-4"
                    >
                      <Globe className="w-5 h-5" />
                    </a>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </Section>
  );
};

export default Skills;