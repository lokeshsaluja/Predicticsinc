"use client"

import React, { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';

type PlaceholderType = 
  | 'hero' 
  | 'analytics' 
  | 'data-science' 
  | 'machine-learning' 
  | 'ai-strategy' 
  | 'industry'
  | 'testimonial'
  | 'case-study'
  | 'data-visualization'
  | 'healthcare'
  | 'cpg'
  | 'electronics'
  | 'mining'
  | 'insurance'
  | 'government'
  | 'enterprise-clients'
  | 'executive'
  | 'technical'
  | 'advisors'
  | 'healthcare-analytics'
  | 'supply-chain'
  | 'data-analytics'
  | 'contact'
  | 'data-team'
  | 'team'
  | 'meeting'
  | 'abstract-team'
  | 'enterprise-meeting'
  | 'data-engineering';

interface ImagePlaceholderProps {
  type: PlaceholderType;
  className?: string;
  width?: number;
  height?: number;
  industry?: string;
}

export const ImagePlaceholder: React.FC<ImagePlaceholderProps> = ({
  type,
  className = "",
  width = 400,
  height = 300,
  industry
}) => {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Effect for client-side mounting detection
  useEffect(() => {
    setMounted(true);
  }, []);
  
  // Use consistent colors for initial server-side render to avoid hydration mismatch
  // Only apply theme-specific colors after component has mounted on client
  const isDark = mounted && resolvedTheme === 'dark';
  
  // Default light theme colors for initial render
  const bgColor = isDark ? '#1e293b' : '#f1f5f9';
  const strokeColor = isDark ? '#64748b' : '#94a3b8';
  const accentColor = isDark ? '#10b981' : '#0f766e';
  const accentColor2 = isDark ? '#3b82f6' : '#2563eb';
  
  // For industry icons
  const getIndustryIcon = () => {
    switch(industry?.toLowerCase()) {
      case 'healthcare':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="48" height="48" fill="none" stroke={accentColor} strokeWidth="1.5">
            <path d="M9 12h6m-3-3v6M12 3c7.2 0 9 1.8 9 9s-1.8 9-9 9-9-1.8-9-9 1.8-9 9-9z" />
          </svg>
        );
      case 'insurance':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="48" height="48" fill="none" stroke={accentColor} strokeWidth="1.5">
            <path d="M3 19a9 9 0 0 1 9 0a9 9 0 0 1 9 0M5 12V5.5a1.5 1.5 0 0 1 1.5-1.5H18M9 12V8h12v4M19 16v4m-3-4v4m-3-4v4" />
          </svg>
        );
      case 'cpg':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="48" height="48" fill="none" stroke={accentColor} strokeWidth="1.5">
            <path d="M14.5 4L3 15.5l4 4L18.5 8M20.7 5l-2.72-2.72c-.2-.2-.51-.2-.71 0l-1.83 1.83l3.5 3.5l1.83-1.83c.2-.2.2-.52 0-.71l-.07-.07z" />
          </svg>
        );
      case 'electronics':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="48" height="48" fill="none" stroke={accentColor} strokeWidth="1.5">
            <path d="M9 3h6v4H9zM5 7h14v10H5zM9 17v4M15 17v4M12 11.01L12 11" />
          </svg>
        );
      case 'mining':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="48" height="48" fill="none" stroke={accentColor} strokeWidth="1.5">
            <path d="M11 6h5m-9 6h14M9 18h6M6 10v8M18 10v8M3 12v6h18v-6M3 18v4M21 18v4" />
          </svg>
        );
      case 'government':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="48" height="48" fill="none" stroke={accentColor} strokeWidth="1.5">
            <path d="M3 21h18M3 10h18M5 6l7-3l7 3M4 10v11M20 10v11M8 14v3M12 14v3M16 14v3" />
          </svg>
        );
      default:
        return (
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="48" height="48" fill="none" stroke={accentColor} strokeWidth="1.5">
            <path d="M3 5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5z" />
            <path d="M12 8v8m-4-4h8" />
          </svg>
        );
    }
  };
  
  // Get the appropriate placeholder based on type
  const getPlaceholder = () => {
    switch(type) {
      case 'hero':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox={`0 0 ${width} ${height}`}>
            <rect width="100%" height="100%" fill={bgColor} />
            <path d={`M0,${height*0.7} 
                   C${width*0.3},${height*0.5} ${width*0.5},${height*0.8} ${width},${height*0.6} 
                   L${width},${height} L0,${height} Z`} 
              fill={accentColor} fillOpacity="0.3" />
            <path d={`M0,${height*0.8} 
                   C${width*0.4},${height*0.6} ${width*0.6},${height*0.9} ${width},${height*0.7} 
                   L${width},${height} L0,${height} Z`} 
              fill={accentColor2} fillOpacity="0.3" />
              
            {/* Central icon */}
            <g transform={`translate(${width/2 - 24}, ${height/2 - 24})`}>
              <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke={strokeColor} strokeWidth="1.5">
                <path d="M12 2c5.5 0 10 4.5 10 10s-4.5 10-10 10S2 17.5 2 12 6.5 2 12 2z" />
                <path d="M12 8v4l3 3" />
              </svg>
            </g>
          </svg>
        );
        
      case 'analytics':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox={`0 0 ${width} ${height}`}>
            <rect width="100%" height="100%" fill={bgColor} />
            <g transform={`translate(${width/2 - 24}, ${height/2 - 24})`}>
              <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke={strokeColor} strokeWidth="1.5">
                <path d="M3 3v18h18"/>
                <path d="M18 9l-5-5.5-4 3L3 3"/>
                <path d="M3 9l6 0"/>
                <path d="M9 3l0 6"/>
              </svg>
            </g>
          </svg>
        );
        
      case 'machine-learning':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox={`0 0 ${width} ${height}`}>
            <rect width="100%" height="100%" fill={bgColor} />
            <g transform={`translate(${width/2 - 24}, ${height/2 - 24})`}>
              <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke={strokeColor} strokeWidth="1.5">
                <path d="M3 12h4l3 8l4-16l3 8h4"/>
                <path d="M6 4v4"/>
                <path d="M18 16v4"/>
                <circle cx="6" cy="8" r="2" />
                <circle cx="18" cy="16" r="2" />
              </svg>
            </g>
          </svg>
        );
        
      case 'data-science':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox={`0 0 ${width} ${height}`}>
            <rect width="100%" height="100%" fill={bgColor} />
            <g transform={`translate(${width/2 - 24}, ${height/2 - 24})`}>
              <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke={strokeColor} strokeWidth="1.5">
                <circle cx="12" cy="12" r="9" />
                <path d="M3.6 9h16.8"/>
                <path d="M3.6 15h16.8"/>
                <path d="M11.5 3a17 17 0 0 0 0 18"/>
                <path d="M12.5 3a17 17 0 0 1 0 18"/>
              </svg>
            </g>
          </svg>
        );
      
      case 'ai-strategy':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox={`0 0 ${width} ${height}`}>
            <rect width="100%" height="100%" fill={bgColor} />
            <g transform={`translate(${width/2 - 24}, ${height/2 - 24})`}>
              <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke={strokeColor} strokeWidth="1.5">
                <path d="M4.5 9.5 9 4l3.5 3.5L17 3l2.5 2.5-5 5 3 3-6 6-10-10z" />
                <path d="M10.5 15.5 3-3" />
              </svg>
            </g>
          </svg>
        );
        
      case 'data-engineering':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox={`0 0 ${width} ${height}`}>
            <rect width="100%" height="100%" fill={bgColor} />
            <g transform={`translate(${width/2 - 24}, ${height/2 - 24})`}>
              <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke={strokeColor} strokeWidth="1.5">
                <path d="M5 5h14a2 2 0 0 1 0 4H5a2 2 0 0 0 0 4h14a2 2 0 0 1 0 4H5a2 2 0 0 0 0 4" />
              </svg>
            </g>
          </svg>
        );
        
      case 'data-visualization':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox={`0 0 ${width} ${height}`}>
            <rect width="100%" height="100%" fill={bgColor} />
            <g transform={`translate(${width/2 - 24}, ${height/2 - 24})`}>
              <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke={strokeColor} strokeWidth="1.5">
                <path d="M12 3v2M12 19v2M3 12h2M19 12h2M18.364 5.636l-1.414 1.414M18.364 18.364l-1.414-1.414M5.636 5.636l1.414 1.414M5.636 18.364l1.414-1.414" />
                <circle cx="12" cy="12" r="7" />
                <path d="M12 9v3l2.5 2.5" />
              </svg>
            </g>
          </svg>
        );
        
      case 'enterprise-clients':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox={`0 0 ${width} ${height}`}>
            <rect width="100%" height="100%" fill={bgColor} />
            <g transform={`translate(${width/2 - 24}, ${height/2 - 24})`}>
              <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke={strokeColor} strokeWidth="1.5">
                <path d="M3 21h18M9 8h1m5 0h1M8 21V8a4 4 0 0 1 8 0v13M7 8a6 6 0 0 1 12 0v13" />
              </svg>
            </g>
          </svg>
        );
        
      case 'industry':
        return getIndustryIcon();
        
      default:
        return (
          <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox={`0 0 ${width} ${height}`}>
            <rect width="100%" height="100%" fill={bgColor} />
            <text 
              x="50%" 
              y="50%" 
              dominantBaseline="middle" 
              textAnchor="middle" 
              fill={strokeColor} 
              fontFamily="system-ui, sans-serif" 
              fontSize="16"
            >
              {type}
            </text>
          </svg>
        );
    }
  };
  
  return (
    <div className={className}>
      {getPlaceholder()}
    </div>
  );
};

export default ImagePlaceholder;
