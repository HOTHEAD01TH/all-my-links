"use client";
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const generateGlitchText = (length: number): string => {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%&';
  return Array(length)
    .fill('')
    .map(() => characters.charAt(Math.floor(Math.random() * characters.length)))
    .join('');
};

export const GlitchText = () => {
  const [text, setText] = useState('ZAID ADIL');
  const [isGlitching, setIsGlitching] = useState(false);

  useEffect(() => {
    const glitchInterval = setInterval(() => {
      setIsGlitching(true);
      
      let iterations = 0;
      const maxIterations = 10;
      
      const glitchEffect = setInterval(() => {
        setText(generateGlitchText(text.length));
        iterations++;
        
        if (iterations === maxIterations) {
          clearInterval(glitchEffect);
          setText(text === 'ZAID ADIL' ? 'HOT HEAD' : 'ZAID ADIL');
          setIsGlitching(false);
        }
      }, 50);

      return () => clearInterval(glitchEffect);
    }, 5000); // Change text every 5 seconds

    return () => clearInterval(glitchInterval);
  }, [text]);

  return (
    <motion.h1
      className={`mt-4 text-xl sm:text-2xl font-bold ${
        isGlitching ? 'text-red-500' : 'text-white'
      }`}
      animate={{
        x: isGlitching ? [-1, 1, -1, 1, 0] : 0,
        y: isGlitching ? [-1, 1, -1, 1, 0] : 0,
        scale: isGlitching ? 1.05 : 1,
        rotate: isGlitching ? 360 : 0,
      }}
      transition={{ duration: 0.5 }}
    >
      {text}
    </motion.h1>
  );
}; 