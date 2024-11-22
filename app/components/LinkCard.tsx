"use client";

import { cn } from '@/lib/utils';
import { LinkPreview } from './ui/link-preview';

interface LinkCardProps {
  href: string;
  label: string;
  icon?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

export default function LinkCard({ href, label, icon, className, style }: LinkCardProps) {
  return (
    <LinkPreview url={href} width={300} height={150}>
      <div
        className={cn(
          "flex items-center justify-center w-full p-4 space-x-3",
          "backdrop-blur-sm bg-white/10 rounded-lg",
          "border border-white/20 shadow-md",
          "hover:bg-white/20 transition-all duration-300 cursor-pointer",
          className
        )}
        style={style}
      >
        {icon && (
          <span className="w-5 h-5 text-white/70">
            {icon}
          </span>
        )}
        <span className="font-medium text-base text-white">{label}</span>
      </div>
    </LinkPreview>
  );
}