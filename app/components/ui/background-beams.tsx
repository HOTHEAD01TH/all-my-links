"use client";
import React from "react";
import { cn } from "@/lib/utils";

export const BackgroundBeams = ({ className }: { className?: string }) => {
  return (
    <div
      className={cn(
        "absolute inset-0 z-0 overflow-hidden",
        className
      )}
    >
      <div
        className="absolute top-0 left-0 right-0 bottom-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px]"
        style={{
          mask: "radial-gradient(circle, white, transparent)",
          WebkitMask: "radial-gradient(circle, white, transparent)",
        }}
      />
      <div className="absolute left-0 right-0 top-[-10%] h-[500px] w-[500px] rounded-full bg-purple-500 opacity-50 blur-[100px]" />
      <div className="absolute right-[-20%] bottom-[-10%] h-[500px] w-[500px] rounded-full bg-indigo-500 opacity-50 blur-[100px]" />
      <div className="absolute left-[-20%] bottom-[-10%] h-[500px] w-[500px] rounded-full bg-pink-500 opacity-50 blur-[100px]" />
    </div>
  );
};

export default BackgroundBeams; 