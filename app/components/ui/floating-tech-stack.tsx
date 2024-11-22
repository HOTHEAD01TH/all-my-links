"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { 
  FaJs, 
  FaReact, 
  FaNodeJs, 
  FaPython, 
  FaGitAlt, 
  FaDocker, 
  FaAws,
} from "react-icons/fa6";
import { 
  SiTypescript, 
  SiNextdotjs, 
  SiTailwindcss, 
  SiMongodb,
  SiMysql,
  SiFirebase, 
  SiJenkins, 
  SiKubernetes, 
  SiSolidity, 
  SiBurpsuite,
  SiWireshark,
  // SiNmap,
  SiKalilinux 
} from "react-icons/si";
import { GiMetalBar } from "react-icons/gi";
import { TbNetwork } from "react-icons/tb";

const techStack = [
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
  },
  {
    name: "Firebase",
    icon: <SiFirebase className="text-[#FFCA28] w-12 h-12" />,
    size: 48
  },
  {
    name: "Jenkins",
    icon: <SiJenkins className="text-[#D24939] w-12 h-12" />,
    size: 48
  },
  {
    name: "Kubernetes",
    icon: <SiKubernetes className="text-[#326CE5] w-14 h-14" />,
    size: 52
  },
  {
    name: "Solidity",
    icon: <SiSolidity className="text-[#363636] w-12 h-12" />,
    size: 48
  },
  {
    name: "Burp Suite",
    icon: <SiBurpsuite className="text-[#FF6633] w-12 h-12" />,
    size: 48
  },
  {
    name: "Wireshark",
    icon: <SiWireshark className="text-[#1679A7] w-12 h-12" />,
    size: 48
  },
  // {
  //   name: "Nmap",
  //   icon: <SiNmap className="text-[#4B275F] w-12 h-12" />,
  //   size: 48
  // },
  {
    name: "Metasploit",
    icon: <GiMetalBar className="text-[#2A6478] w-12 h-12" />,
    size: 48
  },
  {
    name: "Kali Linux",
    icon: <SiKalilinux className="text-[#557C94] w-14 h-14" />,
    size: 52
  }
];

const getWindowSize = () => {
  if (typeof window !== 'undefined') {
    return {
      width: window.innerWidth,
      height: window.innerHeight
    };
  }
  return {
    width: 1000,
    height: 1000
  };
};

const generateRandomPosition = () => {
  const windowSize = getWindowSize();
  const side = Math.floor(Math.random() * 4);
  
  switch(side) {
    case 0: // Top
      return {
        x: Math.random() * windowSize.width,
        y: -50
      };
    case 1: // Right
      return {
        x: windowSize.width + 50,
        y: Math.random() * windowSize.height
      };
    case 2: // Bottom
      return {
        x: Math.random() * windowSize.width,
        y: windowSize.height + 50
      };
    default: // Left
      return {
        x: -50,
        y: Math.random() * windowSize.height
      };
  }
};

export const FloatingTechStack = () => {
  const [windowSize, setWindowSize] = useState(getWindowSize());

  useEffect(() => {
    const handleResize = () => {
      setWindowSize(getWindowSize());
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {techStack.map((tech, idx) => (
        <motion.div
          key={tech.name}
          className="absolute"
          initial={generateRandomPosition()}
          animate={{
            x: [
              null,
              Math.random() * windowSize.width,
              Math.random() * windowSize.width,
              Math.random() * windowSize.width,
              Math.random() * windowSize.width,
            ],
            y: [
              null,
              Math.random() * windowSize.height,
              Math.random() * windowSize.height,
              Math.random() * windowSize.height,
              Math.random() * windowSize.height,
            ],
            rotate: [0, 360, 720, 1080],
          }}
          transition={{
            duration: Math.random() * 20 + 30,
            repeat: Infinity,
            repeatType: "reverse",
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
      ))}
    </div>
  );
};