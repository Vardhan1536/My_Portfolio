import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Download, Github, Linkedin , Eye} from 'lucide-react';
import AnimatedText from './ui/AnimatedText';
import Button from './ui/Button';

const Hero: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/My-resume.pdf';
    link.download = 'resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  const handleView = () => {
  window.open('/My-resume.pdf', '_blank');
};


  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas dimensions
    const setCanvasDimensions = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    setCanvasDimensions();
    window.addEventListener('resize', setCanvasDimensions);

    // Particle class
    class Particle {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      color: string;

      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 5 + 1;
        this.speedX = Math.random() * 1 - 0.5;
        this.speedY = Math.random() * 1 - 0.5;

        // Particle colors matching our theme
        const colors = ['#6366F1', '#8B5CF6', '#EC4899'];
        this.color = colors[Math.floor(Math.random() * colors.length)];
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;

        // Bounce off edges
        if (this.x > canvas.width || this.x < 0) {
          this.speedX = -this.speedX;
        }
        if (this.y > canvas.height || this.y < 0) {
          this.speedY = -this.speedY;
        }
      }

      draw() {
        if (!ctx) return;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.globalAlpha = 0.3;
        ctx.fill();
      }
    }

    const particles: Particle[] = [];
    const particleCount = Math.min(50, Math.floor(window.innerWidth / 30));

    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle) => {
        particle.update();
        particle.draw();
      });

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', setCanvasDimensions);
    };
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.3,
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
    <section className="relative min-h-screen overflow-hidden flex items-center">
      {/* Animated Background with Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full z-0"
      />

      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark-900 via-dark-800 to-dark-900 z-0"></div>

      {/* Floating Blurred Shapes */}
      <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-primary/20 filter blur-3xl opacity-40 animate-blob z-0"></div>
      <div className="absolute top-1/3 -right-24 w-96 h-96 rounded-full bg-secondary/20 filter blur-3xl opacity-40 animate-blob animation-delay-2000 z-0"></div>
      <div className="absolute bottom-12 left-1/3 w-96 h-96 rounded-full bg-accent/20 filter blur-3xl opacity-40 animate-blob animation-delay-4000 z-0"></div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-3xl mx-auto text-center"
        >
          {/* Abstract Identity Visualization */}
          <motion.div
            className="w-32 h-32 mx-auto mb-8 relative"
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{
              duration: 1.5,
              type: "spring",
              stiffness: 100
            }}
          >
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary via-secondary to-accent opacity-80 animate-pulse"></div>
            <div className="absolute inset-2 rounded-full bg-dark-900"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-2xl font-bold text-white">B</span>
            </div>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-4 text-dark-100"
          >
            <AnimatedText text="Balavardhan Tummalacherla" className="text-gradient bg-clip-text text-transparent bg-gradient-to-r from-primary via-secondary to-accent" />
          </motion.h1>

          <motion.h2
            variants={itemVariants}
            className="text-xl md:text-2xl text-dark-300 mb-8"
          >
            <AnimatedText
              text="CS Student | Writer | Thinker"
              type="character"
              delay={1.5}
            />
          </motion.h2>

          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row justify-center gap-4 mb-8"
          >
            <Button
              variant="secondary"
              size="lg"
              icon={<Download size={18} />}
              onClick={handleDownload}
            >
              Download Resume
            </Button>
            <Button
              variant="secondary"
              size="lg"
              icon={<Eye size={18} />}   
              onClick={handleView}
            >
              View Resume
            </Button>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="flex justify-center space-x-4"
          >
            <motion.a
              href="https://github.com/Vardhan1536"
              target="_blank"
              rel="noreferrer"
              className="text-dark-300 hover:text-primary transition-colors"
              whileHover={{ y: -3 }}
            >
              <Github className="w-6 h-6" />
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/vardhan1536"
              target="_blank"
              rel="noreferrer"
              className="text-dark-300 hover:text-primary transition-colors"
              whileHover={{ y: -3 }}
            >
              <Linkedin className="w-6 h-6" />
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;