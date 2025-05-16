// Project data
interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  imageUrl: string;
  githubUrl: string;
  demoUrl: string;
  featured?: boolean;
}

export const projects: Project[] = [
  {
    id: 1,
    title: 'NutriScan: AI-Powered Nutrition Scanner',
    description: 'A machine learning project that analyzes food images, bar codes and nutrition labels to provide nutritional information and health suggestions.',
    tags: ['Python', 'ML', 'NLP', 'PyTorch','React','FastAPI'],
    imageUrl: 'https://res.cloudinary.com/dejlliwlz/image/upload/v1747393412/NutriScan_zdtvhi.png',
    githubUrl: 'https://github.com/Vardhan1536/NutriScan_Final',
    demoUrl: 'https://player.cloudinary.com/embed/?cloud_name=dejlliwlz&public_id=Vite_React_TS_-_Google_Chrome_2025-01-23_17-11-51_xycsrg&profile=cld-default',
    featured: true,
  },
  {
    id: 2,
    title: 'CropNex: AI-Powered Crop Price Detection',
    description: 'A web application that uses machine learning to predict crop prices based on historical data and market trends, helping farmers make informed decisions.',
    tags: ['React', 'Node', 'LSTM', 'MongoDB','FastAPI'],
    imageUrl: 'https://res.cloudinary.com/dejlliwlz/image/upload/v1747392425/Screenshot_2025-05-10_114014_w12rwp.png',
    githubUrl: 'https://github.com/Vardhan1536/CropNex',
    demoUrl: 'https://player.cloudinary.com/embed/?cloud_name=dejlliwlz&public_id=Vite_React_TS_-_Google_Chrome_2025-05-16_16-27-06_pyr4ph&profile=cld-default',
    featured: true,
  }
];