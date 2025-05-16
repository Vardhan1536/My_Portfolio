import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Mail, Github, Linkedin } from 'lucide-react';
import Section from './ui/Section';
import Button from './ui/Button';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // This would normally send the form data to a server
    console.log('Form data:', formData);
    alert('Please try using the email link to send your message.');
    // Reset form
    setFormData({ name: '', email: '', message: '' });
  };
  
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
    <Section id="contact" title="Let's Connect">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <motion.div 
          className="lg:col-span-5"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.h3 
            className="text-2xl font-medium text-dark-100 mb-4"
            variants={itemVariants}
          >
            Get in Touch
          </motion.h3>
          
          <motion.p 
            className="text-dark-300 mb-6"
            variants={itemVariants}
          >
            Have a project in mind? Looking to collaborate or chat? Feel free to reach out using the form or direct channels below.
          </motion.p>
          
          <motion.div 
            className="mb-8"
            variants={itemVariants}
          >
            <a 
              href="mailto:balavardhantummalacherla@gmail.com"
              target='_blank' 
              className="flex items-center text-dark-200 hover:text-primary transition-colors mb-4"
            >
              <Mail className="w-5 h-5 mr-3" />
              <span>balavardhantummalacherla@gmail.com</span>
            </a>
          </motion.div>
          
          <motion.div 
            className="flex space-x-4"
            variants={itemVariants}
          >
            <motion.a 
              href="https://github.com/Vardhan1536" 
              target="_blank"
              rel="noreferrer"
              className="w-12 h-12 rounded-full bg-dark-800 hover:bg-dark-700 flex items-center justify-center transition-colors"
              whileHover={{ y: -5 }}
            >
              <Github className="w-5 h-5 text-dark-200" />
            </motion.a>
            
            <motion.a 
              href="https://www.linkedin.com/in/vardhan1536" 
              target="_blank"
              rel="noreferrer"
              className="w-12 h-12 rounded-full bg-dark-800 hover:bg-dark-700 flex items-center justify-center transition-colors"
              whileHover={{ y: -5 }}
            >
              <Linkedin className="w-5 h-5 text-dark-200" />
            </motion.a>
          </motion.div>
        </motion.div>
        
        <motion.div 
          className="lg:col-span-7"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <form onSubmit={handleSubmit}>
            <motion.div 
              className="mb-6"
              variants={itemVariants}
            >
              <label htmlFor="name" className="block text-dark-200 mb-2">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full bg-dark-800 border border-dark-700 rounded-xl px-4 py-3 text-dark-100 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                required
              />
            </motion.div>
            
            <motion.div 
              className="mb-6"
              variants={itemVariants}
            >
              <label htmlFor="email" className="block text-dark-200 mb-2">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full bg-dark-800 border border-dark-700 rounded-xl px-4 py-3 text-dark-100 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                required
              />
            </motion.div>
            
            <motion.div 
              className="mb-6"
              variants={itemVariants}
            >
              <label htmlFor="message" className="block text-dark-200 mb-2">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={5}
                className="w-full bg-dark-800 border border-dark-700 rounded-xl px-4 py-3 text-dark-100 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                required
              />
            </motion.div>
            
            <motion.div
              variants={itemVariants}
            >
              <Button 
                variant="primary" 
                icon={<Send className="w-4 h-4" />}
                className="w-full sm:w-auto"
              >
                Let's Connect
              </Button>
            </motion.div>
          </form>
        </motion.div>
      </div>
    </Section>
  );
};

export default Contact;