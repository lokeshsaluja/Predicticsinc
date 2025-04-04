"use client"

import React from 'react';
import Image from 'next/image';
import ImagePlaceholder from './image-placeholder';

// Define the image types matching the placeholders
type ImageType = 
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

interface ProfessionalImageProps {
  type: ImageType;
  className?: string;
  width?: number;
  height?: number;
  alt?: string;
  priority?: boolean;
  industry?: string;
}

// Map of image types to their URLs
const imageMap: Record<ImageType, string> = {
  'hero': '/images/Happy_work_picture.jpg', // Updated homepage image
  'analytics': '/images/Advanced_analytics.jpg', // Updated advanced analytics image
  'data-science': '/images/Expertise.jpg', // Updated data science image
  'machine-learning': '/images/Advanced_analytics.jpg', // Updated machine learning image
  'ai-strategy': '/images/AI_strategy.png', // Updated AI strategy image
  'industry': '/images/industry-solutions.jpg',
  'testimonial': '/images/ABInBev.jpg', // Updated testimonial image
  'case-study': '/images/case-study-healthcare.jpg',
  'data-visualization': '/images/data-visualization.jpg',
  'healthcare': '/images/MaxHealth.png',
  'cpg': '/images/ABInBev.jpg',
  'electronics': '/images/Samsung.png', 
  'mining': '/images/Teck.png',
  'insurance': '/images/Definity.jpeg',
  'government': '/images/CMHA.png',
  'enterprise-clients': '/images/enterprise-clients.jpg',
  'executive': '/images/executive-team.jpg',
  'technical': '/images/technical-team.jpg',
  'advisors': '/images/advisory-board.jpg',
  'healthcare-analytics': '/images/healthcare-analytics.jpg',
  'supply-chain': '/images/supply-chain-optimization.jpg',
  'data-analytics': '/images/Industry Knowledge.jpg',
  'contact': '/images/Contact Us.jpg',
  'data-team': '/images/Collaboration.jpg',
  'team': '/images/abstract-team.jpg',
  'meeting': '/images/enterprise-meeting.jpg',
  'abstract-team': '/images/Collaboration.jpg',
  'enterprise-meeting': '/images/Collaboration.jpg',
  'data-engineering': '/images/Data_engineering.jpg' // Updated data engineering image
};

// Default empty base64 image for instant loading
const emptyImageBase64 = 'data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==';

const ProfessionalImage: React.FC<ProfessionalImageProps> = ({
  type,
  className = "",
  width = 400,
  height = 300,
  alt = "Predictics Inc.",
  priority = false,
  industry
}) => {
  // Use CSS to handle responsive sizing
  const imageStyle = {
    objectFit: 'cover' as const,
    width: '100%',
    height: '100%',
    ...(type === 'industry' && {
      objectPosition: 'center',
      objectFit: 'cover' as const,
    })
  };

  // Get the image URL from our map
  const imageUrl = (() => {
    // If type is 'industry' and an industry name is provided
    if (type === 'industry' && industry) {
      // Map each industry to its specific image
      const industryImageMap: Record<string, string> = {
        'Healthcare': '/images/Healthcare.jpg',
        'Insurance': '/images/Insurance.jpg',
        'CPG': '/images/CPG.jpg',
        'Electronics': '/images/CE.jpg', // CE.jpg for Electronics
        'Mining': '/images/Mining.jpg',
        'Government': '/images/Govt.jpg', // Govt.jpg for Government
      };
      
      return industryImageMap[industry] || '/images/enterprise-clients.jpg'; // Fallback
    }
    
    return imageMap[type] || '';
  })();
  
  // Create a more descriptive alt text based on the image type
  const getAltText = () => {
    const defaultText = "Predictics Inc. - Enterprise AI & Data Solutions";
    if (!alt || alt === "Predictics Inc.") {
      // Generate more descriptive alt text based on image type
      const typeToAlt: Record<ImageType, string> = {
        'hero': 'Enterprise-grade AI & data solutions for large organizations',
        'analytics': 'Advanced analytics dashboard showing business intelligence insights',
        'data-science': 'Data science and algorithmic modeling visualization',
        'machine-learning': 'Machine learning and AI model development platform',
        'ai-strategy': 'AI strategy and implementation roadmap for enterprises',
        'industry': 'Industry-specific AI solutions for enterprise clients',
        'testimonial': 'Client testimonial from enterprise implementation',
        'case-study': 'Case study on successful enterprise AI implementation',
        'data-visualization': 'Data visualization and business intelligence dashboard',
        'healthcare': 'Healthcare industry AI and data solutions',
        'cpg': 'Consumer packaged goods industry AI and data solutions',
        'electronics': 'Electronics industry AI and data solutions',
        'mining': 'Mining industry AI and data solutions',
        'insurance': 'P&C insurance industry AI and data solutions',
        'government': 'Government sector AI and data solutions',
        'enterprise-clients': 'Enterprise clients choosing Predictics for AI solutions',
        'executive': 'Executive leadership team at Predictics Inc.',
        'technical': 'Technical experts in AI and data science',
        'advisors': 'Advisory board of industry experts',
        'healthcare-analytics': 'Healthcare analytics platform showing patient outcomes',
        'supply-chain': 'Supply chain optimization through AI analytics',
        'data-analytics': 'Data analytics platform with interactive visualizations',
        'contact': 'Contact Predictics for enterprise AI solutions',
        'data-team': 'Data science team collaboration on enterprise solutions',
        'team': 'Abstract representation of collaborative teamwork',
        'meeting': 'Enterprise strategy meeting for data transformation',
        'abstract-team': 'Abstract representation of collaborative teamwork',
        'enterprise-meeting': 'Enterprise strategy meeting for data transformation',
        'data-engineering': 'Data engineering architecture and infrastructure'
      };
      return typeToAlt[type] || defaultText;
    }
    return alt;
  };

  // If we're in production/build and the image doesn't exist, fall back to the placeholder
  // This prevents build errors due to missing images
  try {
    return (
      <div className={`overflow-hidden ${className}`} style={{ position: 'relative' }}>
        <Image
          src={imageUrl || emptyImageBase64}
          alt={getAltText()}
          width={width}
          height={height}
          style={imageStyle}
          priority={priority}
          onError={(e) => {
            console.error(`Failed to load image: ${imageUrl}`);
            // Do not change the src on error as it might cause an infinite loop
          }}
        />
      </div>
    );
  } catch (error) {
    // Fallback to placeholder if there's any error (likely during build time)
    console.error(`Error loading image ${type}:`, error);
    return <ImagePlaceholder type={type} className={className} width={width} height={height} />;
  }
};

export default ProfessionalImage;
