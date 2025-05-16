import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Download } from 'lucide-react';
import Section from './ui/Section';
import Card from './ui/Card';
import Button from './ui/Button';
import { education, experience } from '../data/resumeData';

const Resume: React.FC = () => {
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
    <Section id="resume" title="Resume">
      <div className="flex justify-between items-center mb-8">
        <p className="text-dark-300">A summary of my educational background and work experience.</p>
        <Button 
          variant="primary" 
          icon={<Download className="w-4 h-4" />}
          href="/resume.pdf"
          download
        >
          Download CV
        </Button>
      </div>
      
      <div className="space-y-12">
        {/* Experience */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h3 className="text-xl font-medium text-dark-100 mb-6">Work Experience</h3>
          
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute top-0 bottom-0 left-6 w-0.5 bg-dark-700"></div>
            
            {/* Timeline Items */}
            {experience.map((exp) => (
              <motion.div 
                key={exp.id}
                className="relative pl-16 pb-10 last:pb-0"
                variants={itemVariants}
              >
                {/* Timeline Dot */}
                <div className="absolute left-0 top-0 w-14 h-14 px-4 py-4 rounded-full bg-dark-800 border-2 border-primary flex items-center justify-center z-10">
                  <span className="text-xs font-medium text-dark-200">{exp.startDate}</span>
                </div>
                
                <Card className="p-6" hover={false}>
                  <h4 className="text-lg font-medium text-dark-100">{exp.title}</h4>
                  <div className="flex flex-wrap text-dark-300 text-sm mt-1 mb-3">
                    <span className="font-medium">{exp.company}</span>
                    <span className="mx-2">•</span>
                    <span className="flex items-center">
                      <MapPin className="w-3 h-3 mr-1" />
                      {exp.location}
                    </span>
                    <span className="mx-2">•</span>
                    <span className="flex items-center">
                      <Calendar className="w-3 h-3 mr-1" />
                      {exp.startDate} - {exp.endDate || 'Present'}
                    </span>
                  </div>
                  <p className="text-dark-300 mb-4">{exp.description}</p>
                  <ul className="list-disc list-inside text-dark-300">
                    {exp.highlights.map((highlight, i) => (
                      <li key={i} className="mb-1">{highlight}</li>
                    ))}
                  </ul>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
        
        {/* Education */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h3 className="text-xl font-medium text-dark-100 mb-6">Education</h3>
          
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute top-0 bottom-0 left-6 w-0.5 bg-dark-700"></div>
            
            {/* Timeline Items */}
            {education.map((edu) => (
              <motion.div 
                key={edu.id}
                className="relative pl-16 pb-10 last:pb-0"
                variants={itemVariants}
              >
                {/* Timeline Dot */}
                <div className="absolute left-0 top-0 w-12 h-12 rounded-full bg-dark-800 border-2 border-secondary flex items-center justify-center z-10">
                  <span className="text-xs font-medium text-dark-200">{edu.startDate}</span>
                </div>
                
                <Card className="p-6" hover={false}>
                  <h4 className="text-lg font-medium text-dark-100">{edu.degree}</h4>
                  <div className="flex flex-wrap text-dark-300 text-sm mt-1 mb-3">
                    <span className="font-medium">{edu.institution}</span>
                    <span className="mx-2">•</span>
                    <span className="flex items-center">
                      <MapPin className="w-3 h-3 mr-1" />
                      {edu.location}
                    </span>
                    <span className="mx-2">•</span>
                    <span className="flex items-center">
                      <Calendar className="w-3 h-3 mr-1" />
                      {edu.startDate} - {edu.endDate}
                    </span>
                  </div>
                  <p className=" whitespace-pre-line text-dark-300">{edu.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </Section>
  );
};

export default Resume;