"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { 
  FaHtml5, 
  FaCss3Alt, 
  FaJs, 
  FaReact, 
  FaNodeJs, 
  FaPython, 
  FaGitAlt, 
  FaDocker, 
  FaAws,
  FaBootstrap 
} from "react-icons/fa6";
import { 
  SiTypescript, 
  SiNextdotjs, 
  SiTailwindcss, 
  SiMongodb,
  SiMysql
} from "react-icons/si";

const techStack = [
  {
    name: "HTML5",
    icon: <FaHtml5 className="text-[#E34F26] w-12 h-12" />, // Increased size
    size: 48 // Increased container size
  },
  {
    name: "CSS3",
    icon: <FaCss3Alt className="text-[#1572B6] w-12 h-12" />,
    size: 48
  },
  {
    name: "JavaScript",
    icon: <FaJs className="text-[#F7DF1E] w-12 h-12" />,
    size: 48
  },
  {
    name: "React",
    icon: <FaReact className="text-[#61DAFB] w-14 h-14" />,
    size: 52
  },
  {
    name: "Next.js",
    icon: <SiNextdotjs className="text-white w-14 h-14" />,
    size: 52
  },
  {
    name: "TypeScript",
    icon: <SiTypescript className="text-[#3178C6] w-12 h-12" />,
    size: 48
  },
  {
    name: "Tailwind",
    icon: <SiTailwindcss className="text-[#06B6D4] w-14 h-14" />,
    size: 52
  },
  {
    name: "Bootstrap",
    icon: <FaBootstrap className="text-[#7952B3] w-14 h-14" />,
    size: 52
  },
  {
    name: "Node.js",
    icon: <FaNodeJs className="text-[#339933] w-14 h-14" />,
    size: 52
  },
  {
    name: "Python",
    icon: <FaPython className="text-[#3776AB] w-14 h-14" />,
    size: 52
  },
  {
    name: "MongoDB",
    icon: <SiMongodb className="text-[#47A248] w-12 h-12" />,
    size: 48
  },
  {
    name: "MySQL",
    icon: <SiMysql className="text-[#4479A1] w-12 h-12" />,
    size: 48
  },
  {
    name: "Git",
    icon: <FaGitAlt className="text-[#F05032] w-14 h-14" />,
    size: 52
  },
  {
    name: "Docker",
    icon: <FaDocker className="text-[#2496ED] w-14 h-14" />,
    size: 52
  },
  {
    name: "AWS",
    icon: <FaAws className="text-[#232F3E] w-14 h-14" />,
    size: 52
  }
];

const generateRandomPosition = () => ({
  x: -100, // Start from left side
  y: Math.random() * window.innerHeight,
});

const generateRandomDestination = (windowSize: { width: number, height: number }) => {
  const randomAngle = Math.random() * Math.PI * 2; // Random angle in radians
  const distance = Math.random() * windowSize.width * 0.8; // Random distance
  
  return {
    x: Math.cos(randomAngle) * distance + windowSize.width * 0.3,
    y: Math.sin(randomAngle) * distance + windowSize.height * 0.5,
  };
};

export const FloatingTechStack = () => {
  const [windowSize, setWindowSize] = useState({
    width: typeof window !== 'undefined' ? window.innerWidth : 1000,
    height: typeof window !== 'undefined' ? window.innerHeight : 1000,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none">
      {techStack.map((tech, idx) => {
        const dest1 = generateRandomDestination(windowSize);
        const dest2 = generateRandomDestination(windowSize);
        
        return (
          <motion.div
            key={tech.name}
            className="absolute"
            initial={generateRandomPosition()}
            animate={{
              x: [null, dest1.x, dest2.x],
              y: [null, dest1.y, dest2.y],
              rotate: [0, 360, 720, 1080],
            }}
            transition={{
              duration: Math.random() * 10 + 25, // Slightly longer duration
              repeat: Infinity,
              ease: "linear",
              rotate: {
                duration: Math.random() * 15 + 35,
                repeat: Infinity,
                ease: "linear",
              }
            }}
          >
            <div 
              className="relative bg-white/5 backdrop-blur-sm rounded-full p-3 border border-white/10"
              style={{
                width: tech.size,
                height: tech.size,
              }}
            >
              <div className="w-full h-full flex items-center justify-center hover:scale-110 transition-transform">
                {tech.icon}
              </div>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
};