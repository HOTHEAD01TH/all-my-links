"use client";
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

interface GlitchImageProps {
  primaryImage: string;
  secondaryImage: string;
  width?: number;
  height?: number;
  className?: string;
}

export const GlitchImage = ({ 
  primaryImage, 
  secondaryImage,
  width = 128,
  height = 128,
  className = ""
}: GlitchImageProps) => {
  const [currentImage, setCurrentImage] = useState(primaryImage);
  const [isGlitching, setIsGlitching] = useState(false);

  // Create 3 slices for the glitch effect (top, middle, bottom)
  const slices = [
    { id: 0, offset: '0%', height: '33.33%', direction: 1 },    // Top slice
    { id: 1, offset: '33.33%', height: '33.33%', direction: -1 }, // Middle slice
    { id: 2, offset: '66.66%', height: '33.33%', direction: 1 }  // Bottom slice
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setIsGlitching(true);
      
      setTimeout(() => {
        setCurrentImage(currentImage === primaryImage ? secondaryImage : primaryImage);
        setTimeout(() => {
          setIsGlitching(false);
        }, 400);
      }, 400);
    }, 3000);

    return () => clearInterval(interval);
  }, [currentImage, primaryImage, secondaryImage]);

  return (
    <div 
      className={`relative overflow-hidden rounded-full ${className}`}
      style={{ width: `${width}px`, height: `${height}px` }}
    >
      {/* Base image layer */}
      <div className="absolute inset-0">
        <Image
          src={currentImage}
          alt="Profile"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Glitch slices */}
      {isGlitching && (
        <>
          {slices.map((slice) => (
            <motion.div
              key={slice.id}
              className="absolute w-full"
              style={{
                top: slice.offset,
                height: slice.height,
                overflow: 'hidden',
              }}
              animate={{
                x: [
                  0,
                  15 * slice.direction,
                  -12 * slice.direction,
                  8 * slice.direction,
                  0
                ],
                filter: [
                  'hue-rotate(0deg)',
                  'hue-rotate(45deg)',
                  'hue-rotate(-45deg)',
                  'hue-rotate(0deg)'
                ]
              }}
              transition={{
                duration: 0.4,
                ease: "easeInOut",
                times: [0, 0.3, 0.6, 0.8, 1]
              }}
            >
              <div
                className="absolute w-full"
                style={{
                  top: `-${slice.offset}`,
                  height: `${height}px`,
                }}
              >
                <Image
                  src={currentImage}
                  alt="Profile Slice"
                  fill
                  className="object-cover"
                />
              </div>
            </motion.div>
          ))}

          {/* RGB Split effects */}
          <motion.div
            className="absolute inset-0 bg-[#ff00ff]/20 mix-blend-screen"
            animate={{
              x: [0, 2, -2, 0],
              y: [0, -2, 2, 0],
            }}
            transition={{ duration: 0.4 }}
          />
          <motion.div
            className="absolute inset-0 bg-[#00ffff]/20 mix-blend-screen"
            animate={{
              x: [0, -2, 2, 0],
              y: [0, 2, -2, 0],
            }}
            transition={{ duration: 0.4 }}
          />
        </>
      )}

      {/* Random noise overlay during glitch */}
      {isGlitching && (
        <motion.div
          className="absolute inset-0 bg-white/10"
          animate={{
            opacity: [0, 0.2, 0, 0.2, 0],
          }}
          transition={{ duration: 0.4 }}
        />
      )}
    </div>
  );
}; 