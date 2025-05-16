import React from 'react';
import { motion } from 'framer-motion';
import { Code, BookOpen, Brain, Coffee, Globe } from 'lucide-react';
import Section from './ui/Section';

const About: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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
  
  // Interests with icons
  const interests = [
    { icon: <Code className="w-5 h-5" />, label: 'DSA' },
    { icon: <Brain className="w-5 h-5" />, label: 'Machine Learning' },
    { icon: <Globe className="w-5 h-5" />, label: 'New Technologies - AI' },
    { icon: <BookOpen className="w-5 h-5" />, label: 'Poetry & Literature' },
    { icon: <Coffee className="w-5 h-5" />, label: 'Coffee Culture' },
  ];
  
  return (
    <Section id="about" title="About Me">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Text Content */}
        <motion.div 
          className="lg:col-span-7"
          variants={containerVariants}
        >
          <motion.p 
            className="text-dark-300 mb-6 text-lg leading-relaxed"
            variants={itemVariants}
          >
            I'm a Computer Science student with a passion for creative technology and self-expression through code and writing. My journey in technology began with a fascination for how software shapes our daily experiences, and has evolved into a multidisciplinary exploration of both technical and creative domains.
          </motion.p>
          
          <motion.p 
            className="text-dark-300 mb-6 text-lg leading-relaxed"
            variants={itemVariants}
          >
            When I'm not coding, you'll find me writing poetry, sharing my thoughts in blogs and articles or playing basketball. These pursuits inspire me and bring a fresh perspective to both my creative and technical sides..
          </motion.p>
          
          <motion.div 
            className="mb-8"
            variants={itemVariants}
          >
            <h3 className="text-xl font-medium text-dark-100 mb-4">Currently Exploring</h3>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {interests.map((interest, index) => (
                <motion.li 
                  key={index}
                  className="flex items-center text-dark-300"
                  variants={itemVariants}
                  custom={index}
                >
                  <span className="mr-2 text-primary inline-flex items-center justify-center bg-primary/10 p-2 rounded-full">
                    {interest.icon}
                  </span>
                  <span>{interest.label}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </motion.div>
        
        {/* Abstract Visual Element */}
        <motion.div
  className="lg:col-span-5 relative"
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  transition={{ duration: 1 }}
  viewport={{ once: true }}
  style={{ minHeight: '320px' }} 
>
  {/* Container with background */}
  <div className="absolute inset-0 bg-dark-800 rounded-2xl overflow-hidden flex items-start justify-center">
    <img
      src="https://res.cloudinary.com/dejlliwlz/image/upload/v1747402776/my_fgimjx.jpg"
      alt="Balavardhan Tummalacherla"
      className="w-full rounded-2xl object-cover h-[350px] sm:h-auto"
      style={{ objectPosition: 'top' }}
    />
  </div>
</motion.div>

      </div>
    </Section>
  );
};

export default About;