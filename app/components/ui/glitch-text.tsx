"use client";
import { useState, useEffect } from 'react';

const generateMatrixText = (length: number): string => {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  return Array(length)
    .fill('')
    .map(() => characters.charAt(Math.floor(Math.random() * characters.length)))
    .join('');
};

export const GlitchText = () => {
  const [text, setText] = useState('ZAID ADIL');
  const [isGlitching, setIsGlitching] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsGlitching(true);
      
      let stage = 0;
      const glitchSequence = setInterval(() => {
        if (stage < 8) { // Digital noise phase
          setText(generateMatrixText(8)); // Fixed length for consistent width
        } else if (stage === 8) { // Switch to target text
          setText(text === 'ZAID ADIL' ? 'HOT HEAD' : 'ZAID ADIL');
          setIsGlitching(false);
          clearInterval(glitchSequence);
        }
        stage++;
      }, 50);

      return () => clearInterval(glitchSequence);
    }, 1500);

    return () => clearInterval(interval);
  }, [text]);

  return (
    <div className="mt-4 text-xl sm:text-2xl font-bold font-mono">
      <span className={`transition-colors duration-100 ${
        isGlitching ? 'text-green-500' : 'text-white'
      }`}>
        {text}
      </span>
    </div>
  );
};