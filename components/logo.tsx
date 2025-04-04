"use client"

import React, { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import Image from 'next/image';

export const Logo = ({ className = "", size = "default" }: { className?: string, size?: "small" | "default" | "large" }) => {
  const { theme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  
  // Use useEffect to determine if component has mounted
  useEffect(() => {
    setMounted(true);
  }, []);
  
  // Size mappings - increased logo sizes, decreased font sizes
  const sizes = {
    small: { logoSize: 32, fontSize: "text-sm" },
    default: { logoSize: 48, fontSize: "text-base" },
    large: { logoSize: 64, fontSize: "text-lg" }
  };
  
  const { logoSize, fontSize } = sizes[size];
  
  // Only determine theme on client-side to avoid hydration mismatch
  const isDark = mounted && (resolvedTheme === 'dark');
  
  // Colors for text gradient based on theme
  const textGradient = isDark ? 
    "bg-gradient-to-r from-cyan-500 to-violet-500" : 
    "bg-gradient-to-r from-cyan-600 to-violet-600";
  
  return (
    <div className={`flex items-center ${className}`}>
      <div className="relative mr-2">
        {/* Logo Image */}
        <Image 
          src="/images/Predictics_logo.png" 
          alt="Predictics Logo"
          width={logoSize} 
          height={logoSize}
          style={{ objectFit: 'contain' }}
          priority
        />
      </div>
      <div className="flex flex-col justify-center">
        <span className={`font-semibold ${fontSize} tracking-wide bg-clip-text text-transparent ${textGradient}`} style={{ fontFamily: 'Arial, sans-serif' }}>
          PREDICTICS
        </span>
        <span className="text-xs tracking-wider text-gray-500 dark:text-gray-400" style={{ fontSize: '0.65rem' }}>
          AI & Predictive Analytics Solutions
        </span>
      </div>
    </div>
  );
};

export default Logo;
