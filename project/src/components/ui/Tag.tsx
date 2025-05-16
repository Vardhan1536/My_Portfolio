import React from 'react';

interface TagProps {
  label: string;
  type?: 'tech' | 'writing';
  colorKey?: string;
}

const Tag: React.FC<TagProps> = ({ label, type = 'tech', colorKey }) => {
  // Tech tags have specific colors based on technology
  const getTechColor = (tech: string) => {
    const techColors: Record<string, string> = {
      react: 'bg-blue-500/20 text-blue-400',
      javascript: 'bg-yellow-500/20 text-yellow-300',
      typescript: 'bg-blue-600/20 text-blue-400',
      python: 'bg-yellow-600/20 text-yellow-400',
      node: 'bg-green-500/20 text-green-400',
      ml: 'bg-cyan-500/20 text-cyan-400',
      css: 'bg-pink-500/20 text-pink-400',
      html: 'bg-orange-500/20 text-orange-400',
      // Default for other tech
      default: 'bg-gray-500/20 text-gray-300',
    };
    
    const key = tech.toLowerCase();
    return techColors[key] || techColors.default;
  };
  
  // Writing tags have pastel colors
  const getWritingColor = (index: number) => {
    const writingColors = [
      'bg-pink-500/20 text-pink-400',
      'bg-purple-500/20 text-purple-400',
      'bg-blue-500/20 text-blue-400',
      'bg-green-500/20 text-green-400',
      'bg-yellow-500/20 text-yellow-400',
    ];
    
    // Use the hash of the string to consistently assign a color
    const hashCode = label.split('').reduce((acc, char) => {
      return char.charCodeAt(0) + ((acc << 5) - acc);
    }, 0);
    
    return writingColors[Math.abs(hashCode) % writingColors.length];
  };
  
  const colorClass = type === 'tech' 
    ? getTechColor(colorKey || label)
    : getWritingColor(0);
  
  return (
    <span className={`text-xs px-2.5 py-1 rounded-full font-medium ${colorClass}`}>
      {label}
    </span>
  );
};

export default Tag;