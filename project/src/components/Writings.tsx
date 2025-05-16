import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Eye, BookOpen, Bookmark, Moon, Sun } from 'lucide-react';
import Section from './ui/Section';
import TabGroup from './ui/TabGroup';
import Card from './ui/Card';
import Tag from './ui/Tag';
import Button from './ui/Button';
import { writings, Writing } from '../data/writings';

const Writings: React.FC = () => {
  const [selectedWriting, setSelectedWriting] = useState<Writing | null>(null);
  const [readingMode, setReadingMode] = useState<'normal' | 'typewriter'>('normal');
  const [darkReader, setDarkReader] = useState(true);
  
  const poetryWritings = writings.filter(w => w.category === 'poetry');
  const blogWritings = writings.filter(w => w.category === 'blog');
  const thoughtsWritings = writings.filter(w => w.category === 'thoughts');
  
  const handleReadingModeToggle = () => {
    setReadingMode(readingMode === 'normal' ? 'typewriter' : 'normal');
  };
  
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
  };
  
  const renderWritingsList = (writings: Writing[]) => (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {writings.map(writing => (
        <Card 
          key={writing.id} 
          className="h-full flex flex-col"
          onClick={() => setSelectedWriting(writing)}
        >
          <div className="p-6 flex flex-col flex-grow">
            <span className="text-xs text-dark-400 mb-2">{formatDate(writing.date)}</span>
            <h3 className="text-lg font-medium text-dark-100 mb-2">{writing.title}</h3>
            <p className="text-dark-300 text-sm mb-4 flex-grow">{writing.excerpt}</p>
            
            <div className="flex flex-wrap gap-2 mb-4">
              {writing.tags.map((tag, index) => (
                <Tag key={index} label={tag} type="writing" />
              ))}
            </div>
            
            <Button 
              variant="ghost" 
              size="sm" 
              icon={<Eye className="w-4 h-4" />}
            >
              Read More
            </Button>
          </div>
        </Card>
      ))}
    </div>
  );
  
  const renderReadingView = () => {
    if (!selectedWriting) return null;
    
    const contentStyle = selectedWriting.category === 'poetry' 
      ? 'font-serif text-center leading-relaxed'
      : selectedWriting.category === 'thoughts'
      ? 'font-mono leading-relaxed'
      : 'font-sans leading-relaxed';
      
    const readerBackground = darkReader 
      ? 'bg-dark-900' 
      : 'bg-light-100';
      
    const readerText = darkReader 
      ? 'text-dark-100' 
      : 'text-light-900';
    
    return (
      <motion.div 
        className={`fixed inset-0 z-50 ${readerBackground} overflow-auto`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <div className="container mx-auto px-6 py-12 max-w-3xl">
          <div className="flex justify-between items-center mb-8">
            <Button 
              variant="ghost"
              onClick={() => setSelectedWriting(null)}
            >
              Close
            </Button>
            
            <div className="flex items-center space-x-2">
              <Button 
                variant="ghost"
                size="sm"
                icon={readingMode === 'normal' ? <BookOpen className="w-4 h-4" /> : <Bookmark className="w-4 h-4" />}
                onClick={handleReadingModeToggle}
              >
                {readingMode === 'normal' ? 'Typewriter Mode' : 'Normal Mode'}
              </Button>
              
              <Button 
                variant="ghost"
                size="sm"
                icon={darkReader ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
                onClick={() => setDarkReader(!darkReader)}
              >
                {darkReader ? 'Light' : 'Dark'}
              </Button>
            </div>
          </div>
          
          <motion.div 
            className="mb-4"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className={`text-3xl font-display font-bold mb-3 ${readerText}`}>{selectedWriting.title}</h2>
            <div className="flex items-center text-dark-400 mb-6">
              <span>{formatDate(selectedWriting.date)}</span>
              <span className="mx-2">•</span>
              <span className="capitalize">{selectedWriting.category}</span>
            </div>
          </motion.div>
          
          <div className={`prose prose-lg max-w-none ${contentStyle} ${readerText}`}>
            {readingMode === 'typewriter' ? (
              <TypewriterText text={selectedWriting.content} />
            ) : (
              <div dangerouslySetInnerHTML={{ __html: formatContent(selectedWriting.content) }} />
            )}
          </div>
        </div>
      </motion.div>
    );
  };
  
  // Helper function to format content with markdown-like syntax
  const formatContent = (content: string) => {
    // Very basic markdown-like formatting
    let formatted = content;
    
    // Convert headers
    formatted = formatted.replace(/^# (.+)$/gm, '<h1>$1</h1>');
    formatted = formatted.replace(/^## (.+)$/gm, '<h2>$1</h2>');
    formatted = formatted.replace(/^### (.+)$/gm, '<h3>$1</h3>');
    
    // Convert paragraphs (any line with text that's not a header)
    formatted = formatted.replace(/^([^<#].+)$/gm, '<p>$1</p>');
    
    // Preserve line breaks in poetry
    formatted = formatted.replace(/<\/p>\n<p>/g, '<br>');
    
    return formatted;
  };
  
  return (
    <Section id="writings" title="Writings">
      <TabGroup 
        tabs={[
          { 
            id: 'poetry', 
            label: 'Poetry', 
            content: renderWritingsList(poetryWritings)
          },
          { 
            id: 'blog', 
            label: 'Blog', 
            content: renderWritingsList(blogWritings)
          },
          { 
            id: 'thoughts', 
            label: 'Thoughts', 
            content: renderWritingsList(thoughtsWritings)
          },
        ]}
      />
      
      {selectedWriting && renderReadingView()}
    </Section>
  );
};

// TypewriterText component
const TypewriterText: React.FC<{ text: string }> = ({ text }) => {
  const [displayedText, setDisplayedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  
  React.useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, 30); // Adjust speed as needed
      
      return () => clearTimeout(timeout);
    }
  }, [text, currentIndex]);
  
  return <div dangerouslySetInnerHTML={{ __html: formatContent(displayedText) }} />;
};

export default Writings;