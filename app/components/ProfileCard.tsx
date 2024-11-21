"use client";
import Image from 'next/image';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { TypewriterEffect } from './ui/typewriter-effect';

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
        <div className="relative w-24 h-24 sm:w-32 sm:h-32 overflow-hidden rounded-full">
          <Image
            src="/hothead.jpg"
            alt="Profile"
            fill
            className="object-cover"
            priority
          />
        </div>
        <motion.h1
          className="mt-4 text-xl sm:text-2xl font-bold text-white"
        >
          ZAID ADIL
        </motion.h1>
        <div className="mt-2 text-sm sm:text-base">
          <TypewriterEffect />
        </div>
      </div>
    </motion.div>
  );
}