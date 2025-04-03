"use client"

import React, { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';

export const Logo = ({ className = "", size = "default" }: { className?: string, size?: "small" | "default" | "large" }) => {
  const { theme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  
  // Use useEffect to determine if component has mounted
  useEffect(() => {
    setMounted(true);
  }, []);
  
  // Size mappings
  const sizes = {
    small: { logoSize: 24, fontSize: "text-lg" },
    default: { logoSize: 36, fontSize: "text-2xl" },
    large: { logoSize: 48, fontSize: "text-3xl" }
  };
  
  const { logoSize, fontSize } = sizes[size];
  
  // Only determine theme on client-side to avoid hydration mismatch
  const isDark = mounted && (resolvedTheme === 'dark');
  
  // Colors based on theme - use default light colors for server rendering
  const primaryColor = isDark ? "#06b6d4" : "#0891b2"; // cyan-600
  const secondaryColor = isDark ? "#8b5cf6" : "#7c3aed"; // violet-600
  const accentColor = isDark ? "#f97316" : "#ea580c"; // orange-600
  const textGradient = isDark ? 
    "bg-gradient-to-r from-cyan-500 to-violet-500" : 
    "bg-gradient-to-r from-cyan-600 to-violet-600";
  
  // Use consistent colors for initial render to avoid hydration mismatch
  const strokeColor = mounted ? (isDark ? "#334155" : "#e2e8f0") : "#e2e8f0";
  
  return (
    <div className={`flex items-center ${className}`}>
      <div className="relative mr-2">
        {/* Neural Network SVG Logo */}
        <svg 
          width={logoSize} 
          height={logoSize} 
          viewBox="0 0 100 100" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Background grid pattern */}
          <path 
            d="M10 10 L90 10 L90 90 L10 90 Z" 
            stroke={strokeColor} 
            strokeWidth="0.5" 
            strokeDasharray="2 2" 
            fill="none" 
          />
          <path 
            d="M10 30 L90 30 M10 50 L90 50 M10 70 L90 70 M30 10 L30 90 M50 10 L50 90 M70 10 L70 90" 
            stroke={strokeColor} 
            strokeWidth="0.5" 
            strokeDasharray="2 2" 
          />
          
          {/* Neural Network Nodes */}
          {/* Input Layer */}
          <circle cx="25" cy="30" r="6" fill={primaryColor} />
          <circle cx="25" cy="50" r="6" fill={primaryColor} />
          <circle cx="25" cy="70" r="6" fill={primaryColor} />
          
          {/* Hidden Layer */}
          <circle cx="50" cy="25" r="6" fill={secondaryColor} />
          <circle cx="50" cy="43" r="6" fill={secondaryColor} />
          <circle cx="50" cy="61" r="6" fill={secondaryColor} />
          <circle cx="50" cy="79" r="6" fill={secondaryColor} />
          
          {/* Output Layer */}
          <circle cx="75" cy="40" r="6" fill={accentColor} />
          <circle cx="75" cy="60" r="6" fill={accentColor} />
          
          {/* Neural Connections */}
          {/* Input to Hidden connections */}
          {/* From first input node */}
          <path d="M29 27 L46 22" stroke={primaryColor} strokeWidth="1.5" />
          <path d="M29 30 L46 43" stroke={primaryColor} strokeWidth="1.5" />
          <path d="M29 33 L46 61" stroke={primaryColor} strokeWidth="1.5" />
          <path d="M29 36 L46 79" stroke={primaryColor} strokeWidth="1.5" opacity="0.5" />
          
          {/* From second input node */}
          <path d="M29 47 L46 25" stroke={primaryColor} strokeWidth="1.5" opacity="0.5" />
          <path d="M29 50 L46 43" stroke={primaryColor} strokeWidth="1.5" />
          <path d="M29 53 L46 61" stroke={primaryColor} strokeWidth="1.5" />
          <path d="M29 56 L46 79" stroke={primaryColor} strokeWidth="1.5" opacity="0.5" />
          
          {/* From third input node */}
          <path d="M29 67 L46 25" stroke={primaryColor} strokeWidth="1.5" opacity="0.5" />
          <path d="M29 70 L46 43" stroke={primaryColor} strokeWidth="1.5" opacity="0.5" />
          <path d="M29 73 L46 61" stroke={primaryColor} strokeWidth="1.5" />
          <path d="M29 76 L46 79" stroke={primaryColor} strokeWidth="1.5" />
          
          {/* Hidden to Output connections */}
          {/* To first output node */}
          <path d="M54 25 L71 37" stroke={secondaryColor} strokeWidth="1.5" />
          <path d="M54 43 L71 38" stroke={secondaryColor} strokeWidth="1.5" />
          <path d="M54 61 L71 40" stroke={secondaryColor} strokeWidth="1.5" opacity="0.7" />
          <path d="M54 79 L71 43" stroke={secondaryColor} strokeWidth="1.5" opacity="0.4" />
          
          {/* To second output node */}
          <path d="M54 25 L71 57" stroke={secondaryColor} strokeWidth="1.5" opacity="0.4" />
          <path d="M54 43 L71 58" stroke={secondaryColor} strokeWidth="1.5" opacity="0.7" />
          <path d="M54 61 L71 60" stroke={secondaryColor} strokeWidth="1.5" />
          <path d="M54 79 L71 63" stroke={secondaryColor} strokeWidth="1.5" />
          
          {/* Data Flow Animation */}
          {mounted && (
            <>
              <circle cx="38" cy="35" r="1.5" fill="white">
                <animate attributeName="cx" from="29" to="46" dur="3s" repeatCount="indefinite" />
                <animate attributeName="cy" from="33" to="61" dur="3s" repeatCount="indefinite" />
              </circle>
              
              <circle cx="63" cy="50" r="1.5" fill="white">
                <animate attributeName="cx" from="54" to="71" dur="2s" repeatCount="indefinite" />
                <animate attributeName="cy" from="43" to="38" dur="2s" repeatCount="indefinite" />
              </circle>
            </>
          )}
        </svg>
      </div>
      <div className="flex flex-col">
        <span className={`font-bold ${fontSize} tracking-tight bg-clip-text text-transparent ${textGradient}`}>
          PREDICTICS
        </span>
        <span className="text-xs tracking-widest text-gray-500 dark:text-gray-400">
          AI & DATA SOLUTIONS
        </span>
      </div>
    </div>
  );
};

export default Logo;
