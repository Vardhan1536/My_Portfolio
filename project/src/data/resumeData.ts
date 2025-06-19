// Resume data
export interface Education {
  id: number;
  degree: string;
  institution: string;
  location: string;
  startDate: string;
  endDate: string;
  description: string;
}

export interface Experience {
  id: number;
  title: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string | null; // null for "present"
  description: string;
  highlights: string[];
}

export interface Skill {
  category: string;
  items: string[];
}

export const education: Education[] = [
  {
    id: 1,
    degree: 'Bachelor of Technology in Computer Science',
    institution: 'RAJIV GANDHI UNIVERSITY OF KNOWLEDGE TECHNOLOGIES',
    location: 'NUZVID, ANDHRA PRADESH',
    startDate: '2023',
    endDate: '2027',
    description: 'Pursuing a degree in Computer Science with a focus on software development and data science.\nPresent CGPA: 9.12',
  },
  {
    id: 2,
    degree: 'PRE UNIVERSITY COURSE',
    institution: 'RAJIV GANDHI UNIVERSITY OF KNOWLEDGE TECHNOLOGIES',
    location: 'NUZVID, ANDHRA PRADESH',
    startDate: '2021',
    endDate: '2023',
    description: 'Completed Pre-University Course with an aggregate of 9.81 CGPA.',
  },
  {
    id: 3,
    degree: 'HIGH SCHOOL',
    institution: 'FLORA E.M HIGH SCHOOL',
    location: 'VUYYURU, ANDHRA PRADESH',
    startDate: '2015',
    endDate: '2020',
    description: 'Completed high school with a focus on science and mathematics. \nAchieved a Score of 600/600 in the 10th grade.',
  },
];

export const experience: Experience[] = [
  {
    id: 1,
    title: 'Full Stack Developer Intern (Part-time)',
    company: 'PARABOLA9',
    location: 'Remote',
    startDate: 'DEC 2024',
    endDate: 'MARCH 2025', 
    description: 'Developed a web application for a startup focused on data visualization and analytics.',
    highlights: [
      'Gained real-world experience in Web development and project management in this MNC internship',
      'Assisted the project development team with backend setup and YOLO integration, gaining initial hands-on experience with the technologies.',
      'Spearheaded the development of Parabola9 initial web platform using React.js, later migrating to Next.js for improved performance and SEO',     
      'Participated in code reviews and contributed to documentation',
      'Collaborated with cross-functional teams in an Agile environment, contributing to daily stand-ups, sprint planning, and retrospectives',
    ],
  },
];

export const skills: Skill[] = [
  {
    category: 'Programming',
    items: ['Python', 'JavaScript', 'TypeScript', 'HTML/CSS', 'SQL', 'C++'],
  },
  {
    category: 'Web Technologies',
    items: ['React', 'Node.js', 'Express', 'Tailwind CSS', 'Next.js'],
  },
  {
    category: 'Data & ML',
    items: ['PyTorch', 'TensorFlow', 'NLP', 'Data Visualization', 'Jupyter'],
  },
  {
    category: 'Tools & Other',
    items: ['Git', 'Docker', 'Linux', 'Figma', 'Writing'],
  },
];

export const certifications = [
  {
    id: 1,
    title: 'NPTEL Java Programming',
    issuer: 'NPTEL',
    date: '2023',
    url: 'https://drive.google.com/file/d/1_Uj5DJwr8-u4q3GQ4F1KrRXiooeHA3QL/view?usp=drive_link',
  },
  {
    id: 2,
    title: 'Introduction to Qunatitative Finance',
    issuer: 'BITS PILANI',
    date: '2023',
    url: 'https://drive.google.com/file/d/1MbqwYRDDwXiax5AJtXcTYJwo9Jyl370H/view',
  },
   {
    id: 3,
    title: 'Workshop on Geospatial Data Analysis',
    issuer: 'Indian Institute of Remote Sensing',
    date: '2023',
    url: 'https://drive.google.com/file/d/1CVtTYB2tkm2pH6ybo6kPXBdijPLwNMky/view',
  },
];

export const languages = [
  { language: 'Telugu', proficiency: 'Native' },
  { language: 'English', proficiency: 'Intermediate' },
  { language: 'Hindi', proficiency: 'Basic' },
];