"use client";
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { TypewriterEffect } from './ui/typewriter-effect';
import { GlitchText } from './ui/glitch-text';
import { GlitchImage } from './ui/glitch-image';

export default function ProfileCard() {
  return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className={cn(
          "w-full p-6 backdrop-blur-sm bg-white/10 rounded-xl",
          "border border-white/20 shadow-xl hover:bg-white/20",
          "transition-all duration-300"
        )}
      >
        <div className="flex flex-col items-center">
          <GlitchImage
            primaryImage="/zaid.jpg"
            secondaryImage="/hothead.jpg"
            width={128}
            height={128}
          />
          <GlitchText />
          <div className="mt-2 text-sm sm:text-base">
            <TypewriterEffect />
          </div>
        </div>
      </motion.div>
  );
}