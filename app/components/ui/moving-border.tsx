"use client";
import React from "react";
import { cn } from "@/lib/utils";

export const MovingBorder = ({
  children,
  duration = 2000,
  className,
}: {
  children: React.ReactNode;
  duration?: number;
  className?: string;
}) => {
  return (
    <div className={cn("relative rounded-xl", className)}>
      <div className="absolute -inset-px bg-gradient-to-r from-violet-500 via-purple-500 to-pink-500 rounded-xl blur-lg opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-border"></div>
      <div className="relative">{children}</div>
    </div>
  );
}; 