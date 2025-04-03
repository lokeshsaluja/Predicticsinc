"use client"

import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowLeft, BarChart, Brain, ChevronRight, Database, LineChart, TrendingUp } from 'lucide-react';
import ImagePlaceholder from '@/components/ui/image-placeholder';

// Define the case study data for different industries
const caseStudies = {
  // Healthcare case studies
  'predictive-analytics-patient-outcomes': {
    title: 'Predictive Analytics for Patient Outcomes',
    client: 'Major Healthcare Network',
    industry: 'healthcare',
    summary: 'We implemented a machine learning solution that predicts patient readmission risk, helping a leading healthcare network reduce readmissions by 18% and save $4.2M annually.',
    image: 'healthcare',
    results: [
      { label: 'Readmission Reduction', value: '18%' },
      { label: 'Annual Savings', value: '$4.2M' }
    ],
    challenge: 'The healthcare network was struggling with high readmission rates, which negatively impacted patient outcomes and increased operational costs. Traditional methods for identifying at-risk patients were ineffective, resulting in suboptimal resource allocation and preventive care.',
    solution: 'We developed a comprehensive machine learning solution that analyzes over 200 patient variables from electronic health records to predict readmission risk with 87% accuracy. The system integrates with the client\'s existing workflow, providing clinicians with actionable insights at the point of care.',
    approach: [
      'Collaborated with clinical experts to identify key risk factors and develop feature engineering strategies',
      'Implemented advanced ML algorithms including gradient boosting and deep learning models',
      'Created an intuitive dashboard for clinical staff to visualize patient risk profiles',
      'Developed an API integration with existing health record systems',
      'Established a continuous learning pipeline to improve model accuracy over time'
    ],
    outcomes: [
      '18% reduction in 30-day readmission rates across all facilities',
      '$4.2M annual cost savings from reduced readmissions',
      'Improved resource allocation for preventive care interventions',
      '23% increase in early interventions for high-risk patients',
      'Enhanced patient satisfaction scores due to improved care coordination'
    ],
    technologies: ['Python', 'TensorFlow', 'SQL', 'Azure ML', 'Power BI', 'FHIR API Integration']
  },
  'clinical-trial-optimization': {
    title: 'Clinical Trial Optimization with AI',
    client: 'Global Pharmaceutical Company',
    industry: 'healthcare',
    summary: 'Our AI solution helped a pharmaceutical company optimize clinical trial site selection and patient recruitment, reducing trial duration by 23% and cutting costs by $7.5M per trial.',
    image: 'healthcare-analytics',
    results: [
      { label: 'Trial Duration Reduction', value: '23%' },
      { label: 'Cost Savings Per Trial', value: '$7.5M' }
    ],
    challenge: 'The pharmaceutical company was facing significant delays and cost overruns in clinical trials due to inefficient site selection and slow patient recruitment. These issues were extending time-to-market for new drugs and reducing competitive advantage.',
    solution: 'We developed an AI-powered platform that analyzes historical trial data, site performance metrics, and patient population data to optimize site selection and recruitment strategies. The solution includes predictive models for enrollment rates and site performance.',
    approach: [
      'Analyzed historical data from over 500 previous clinical trials',
      'Developed predictive models to identify optimal trial sites based on multiple factors',
      'Created a patient matching algorithm to accelerate recruitment',
      'Implemented real-time analytics dashboard for trial managers',
      'Designed automated alert systems for recruitment milestones'
    ],
    outcomes: [
      '23% reduction in overall trial duration from planning to completion',
      '$7.5M cost savings per Phase III trial',
      '42% improvement in initial patient recruitment rates',
      '35% reduction in site non-performance issues',
      'Increased prediction accuracy for trial completion timelines'
    ],
    technologies: ['R', 'Python', 'AWS SageMaker', 'Tableau', 'Natural Language Processing', 'SQL']
  },
  
  // CPG case studies
  'ai-powered-demand-forecasting': {
    title: 'AI-Powered Demand Forecasting',
    client: 'Fortune 100 CPG Manufacturer',
    industry: 'cpg',
    summary: 'We developed an advanced demand forecasting system using machine learning, helping a major CPG company improve forecast accuracy by 32% and reduce inventory costs by $12M annually.',
    image: 'supply-chain',
    results: [
      { label: 'Forecast Accuracy Improvement', value: '32%' },
      { label: 'Annual Inventory Savings', value: '$12M' }
    ],
    challenge: 'The CPG manufacturer was struggling with inaccurate demand forecasts, leading to excess inventory in some regions and stockouts in others. This inefficiency was costing millions in lost sales, excess storage, and obsolete inventory.',
    solution: 'We implemented a machine learning demand forecasting system that incorporates multiple data sources including historical sales, promotions, seasonality, economic indicators, and social media sentiment to generate highly accurate demand predictions.',
    approach: [
      'Integrated data from 15+ internal and external sources for comprehensive analysis',
      'Developed ensemble ML models combining time-series forecasting with deep learning',
      'Created automated feature engineering pipeline to identify relevant market signals',
      'Implemented a scenario planning tool for supply chain managers',
      'Designed a continuous model retraining system to adapt to changing market conditions'
    ],
    outcomes: [
      '32% improvement in forecast accuracy across all product categories',
      '$12M annual reduction in inventory holding costs',
      '24% decrease in stockout incidents',
      '18% reduction in obsolete inventory write-offs',
      'Enhanced ability to respond to sudden market changes and disruptions'
    ],
    technologies: ['Python', 'TensorFlow', 'Apache Spark', 'Google Cloud Platform', 'BigQuery', 'Looker']
  },
  'customer-segmentation-personalization': {
    title: 'Customer Segmentation & Personalization',
    client: 'Leading Beverage Company',
    industry: 'cpg',
    summary: 'Our customer analytics platform helped a beverage giant create hyper-personalized marketing campaigns, resulting in a 27% increase in conversion rates and 15% growth in customer lifetime value.',
    image: 'data-analytics',
    results: [
      { label: 'Conversion Rate Increase', value: '27%' },
      { label: 'CLV Growth', value: '15%' }
    ],
    challenge: 'The beverage company was using basic demographic segmentation for marketing campaigns, resulting in low engagement rates and poor ROI on advertising spend. They struggled to understand customer preferences and behavior patterns at a granular level.',
    solution: 'We developed a comprehensive customer analytics platform that uses machine learning to create dynamic micro-segments based on purchase history, browsing behavior, social media activity, and demographic data. The platform enables hyper-personalized marketing campaigns across all channels.',
    approach: [
      'Unified customer data from multiple sources into a single customer view',
      'Implemented clustering algorithms to identify meaningful customer segments',
      'Developed predictive models for product recommendations and next-best-action',
      'Created a campaign optimization engine to maximize engagement',
      'Designed real-time personalization capabilities for digital channels'
    ],
    outcomes: [
      '27% increase in marketing campaign conversion rates',
      '15% growth in average customer lifetime value',
      '32% improvement in customer retention metrics',
      '42% higher engagement rates across digital channels',
      '22% reduction in customer acquisition costs'
    ],
    technologies: ['Python', 'Apache Kafka', 'AWS', 'MongoDB', 'Segment', 'React', 'Node.js']
  },
  
  // Generic template for other industries
  'ai-data-transformation-electronics': {
    title: 'AI & Data Transformation for Electronics Manufacturing',
    client: 'Global Electronics Manufacturer',
    industry: 'electronics',
    summary: 'Our comprehensive data and AI solution helped a leading electronics organization transform their operations, resulting in significant efficiency gains and cost savings.',
    image: 'electronics',
    results: [
      { label: 'Efficiency Improvement', value: '28%' },
      { label: 'Annual Cost Reduction', value: '$15.2M' }
    ],
    challenge: 'The electronics manufacturer was facing increasing competition and margin pressure. Their manufacturing processes generated massive amounts of data, but they lacked the capability to leverage this data for operational improvements and quality control.',
    solution: 'We implemented an end-to-end AI solution that monitors production lines in real-time, predicts equipment failures, optimizes quality control processes, and provides actionable insights to manufacturing teams.',
    approach: [
      'Deployed IoT sensors throughout the manufacturing facility to capture comprehensive data',
      'Developed computer vision systems for automated defect detection',
      'Created predictive maintenance models to prevent costly downtime',
      'Implemented digital twins of critical production equipment',
      'Designed executive dashboards for real-time monitoring of KPIs'
    ],
    outcomes: [
      '28% improvement in overall manufacturing efficiency',
      '$15.2M annual cost reduction from improved quality and reduced waste',
      '43% decrease in unplanned downtime',
      '35% reduction in defect rates',
      '22% increase in throughput across all production lines'
    ],
    technologies: ['Python', 'TensorFlow', 'OpenCV', 'Azure IoT', 'Power BI', 'Digital Twins', 'Time Series Analysis']
  },
  'ai-data-transformation-mining': {
    title: 'AI-Driven Operational Optimization in Mining',
    client: 'Major Mining Corporation',
    industry: 'mining',
    summary: 'Our comprehensive data and AI solution helped a leading mining organization transform their operations, resulting in significant efficiency gains and cost savings.',
    image: 'mining',
    results: [
      { label: 'Efficiency Improvement', value: '31%' },
      { label: 'Safety Incident Reduction', value: '45%' }
    ],
    challenge: 'The mining company was struggling with operational inefficiencies, high energy costs, and safety concerns across multiple sites. They needed to modernize their approach to data collection and analysis to remain competitive in a challenging market.',
    solution: 'We deployed an integrated AI platform that combines sensor data, equipment telemetry, geological information, and workforce data to optimize mining operations, predict maintenance needs, and enhance safety protocols.',
    approach: [
      'Implemented a network of IoT sensors throughout mining operations',
      'Developed predictive models for equipment maintenance and failure',
      'Created AI-powered safety monitoring systems',
      'Optimized energy usage through machine learning algorithms',
      'Built a centralized data platform for cross-site analytics'
    ],
    outcomes: [
      '31% improvement in operational efficiency',
      '45% reduction in safety incidents',
      '$24M annual savings in energy costs',
      '37% decrease in equipment downtime',
      '29% increase in resource extraction yield'
    ],
    technologies: ['Python', 'Edge Computing', 'Computer Vision', 'IoT', 'AWS', 'Tableau', 'Machine Learning']
  },
  'retail-customer-segmentation': {
    title: 'Advanced Customer Segmentation & Personalization',
    client: 'Leading Retail Brand',
    industry: 'retail',
    summary: 'Our AI-driven customer segmentation platform helped a major retail brand increase conversion rates by 34% and boost average order value by 28% through personalized marketing.',
    image: 'cpg',
    results: [
      { label: 'Conversion Rate Increase', value: '34%' },
      { label: 'Average Order Value Boost', value: '28%' }
    ],
    challenge: 'The retail brand was struggling to effectively target its diverse customer base with relevant products and offers. Their existing segmentation was too broad and static, leading to generic marketing that failed to resonate with customers.',
    solution: 'We developed a dynamic customer segmentation and personalization engine that analyzes purchase history, browsing behavior, and demographic data to create highly specific customer segments and deliver tailored experiences across all channels.',
    approach: [
      'Unified customer data from multiple sources into a single customer view',
      'Implemented clustering algorithms for sophisticated segmentation',
      'Created real-time personalization for website and mobile app experiences',
      'Developed predictive models for product recommendations',
      'Built an automated campaign system that targets micro-segments'
    ],
    outcomes: [
      '34% increase in conversion rates',
      '28% higher average order value',
      '42% improvement in email engagement metrics',
      '56% reduction in customer acquisition costs',
      '23% increase in customer lifetime value'
    ],
    technologies: ['Python', 'TensorFlow', 'Google BigQuery', 'React', 'Node.js', 'Kafka', 'Redis']
  },
  'ai-data-transformation-insurance': {
    title: 'Claims Processing Transformation for Insurance',
    client: 'Leading P&C Insurance Provider',
    industry: 'insurance',
    summary: 'Our comprehensive data and AI solution helped a leading insurance organization transform their claims processing, resulting in significant efficiency gains and cost savings.',
    image: 'insurance',
    results: [
      { label: 'Claims Processing Time', value: '-74%' },
      { label: 'Fraud Detection Improvement', value: '38%' }
    ],
    challenge: 'The insurance provider had a manual, time-consuming claims processing workflow that resulted in high operational costs, customer dissatisfaction, and challenges in detecting fraudulent claims accurately.',
    solution: 'We developed an AI-powered claims processing platform that automates document analysis, identifies potential fraud, and provides adjusters with decision support tools to expedite legitimate claims while flagging suspicious activity.',
    approach: [
      'Implemented document processing automation using OCR and NLP',
      'Developed machine learning models for fraud detection and risk assessment',
      'Created a fast-track system for straightforward claims',
      'Designed an intuitive adjuster workbench with AI-powered recommendations',
      'Built real-time analytics for claims management and trend identification'
    ],
    outcomes: [
      '74% reduction in average claims processing time',
      '38% improvement in fraud detection accuracy',
      '27% decrease in claims handling costs',
      '52% increase in customer satisfaction scores',
      '23% reduction in loss adjustment expenses'
    ],
    technologies: ['OCR', 'NLP', 'Python', 'Azure Cognitive Services', 'TensorFlow', 'SQL', 'Power BI']
  },
  'ai-data-transformation-government': {
    title: 'Data Modernization for Government Services',
    client: 'Large Government Agency',
    industry: 'government',
    summary: 'Our comprehensive data and AI solution helped a government organization transform their citizen services, resulting in significant efficiency gains and improved public satisfaction.',
    image: 'government',
    results: [
      { label: 'Processing Time Reduction', value: '68%' },
      { label: 'Citizen Satisfaction Increase', value: '43%' }
    ],
    challenge: 'The government agency was struggling with outdated legacy systems, siloed data repositories, and inefficient service delivery processes. Citizens experienced long wait times and inconsistent service quality across different channels.',
    solution: 'We implemented a comprehensive data modernization strategy, including a unified data platform, AI-powered service automation, and predictive analytics for resource allocation and service optimization.',
    approach: [
      'Consolidated multiple legacy systems into a unified modern data architecture',
      'Developed AI chatbots and virtual assistants for common citizen inquiries',
      'Created predictive models for service demand and resource planning',
      'Implemented secure data sharing capabilities across departments',
      'Designed accessible, mobile-friendly digital service interfaces'
    ],
    outcomes: [
      '68% reduction in processing time for citizen requests',
      '43% increase in citizen satisfaction scores',
      '52% decrease in in-person visit requirements',
      '37% improvement in resource utilization',
      '29% reduction in operational costs'
    ],
    technologies: ['Cloud Computing', 'NLP', 'Process Automation', 'AI Chatbots', 'Secure APIs', 'Data Governance']
  }
};

interface PageProps {
  params: {
    slug: string;
  };
}

export default function CaseStudyPage({ params }: PageProps) {
  const { slug } = params;
  const caseStudy = caseStudies[slug as keyof typeof caseStudies];
  
  // If case study doesn't exist, show a message
  if (!caseStudy) {
    return (
      <div className="container mx-auto px-4 py-12 text-center">
        <h1 className="text-3xl font-bold mb-4">Case Study Not Found</h1>
        <p className="mb-8">The case study you're looking for doesn't seem to exist or has been moved.</p>
        <Button asChild>
          <Link href="/case-studies">
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Case Studies
          </Link>
        </Button>
      </div>
    );
  }
  
  return (
    <div className="container mx-auto px-4 py-8 md:py-12">
      {/* Breadcrumb */}
      <div className="mb-8">
        <div className="flex items-center text-sm text-muted-foreground">
          <Link href="/" className="hover:text-primary">Home</Link>
          <ChevronRight className="h-4 w-4 mx-2" />
          <Link href="/case-studies" className="hover:text-primary">Case Studies</Link>
          <ChevronRight className="h-4 w-4 mx-2" />
          <span className="text-foreground">{caseStudy.title}</span>
        </div>
      </div>
      
      {/* Hero Section */}
      <div className="mb-12 md:mb-16 bg-muted/30 rounded-lg overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
          <div className="p-6 md:p-10">
            <div className="uppercase text-sm font-medium text-primary mb-2">
              {caseStudy.industry.charAt(0).toUpperCase() + caseStudy.industry.slice(1)} Industry
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-4 md:mb-6">{caseStudy.title}</h1>
            <p className="text-xl text-muted-foreground mb-4 md:mb-6">{caseStudy.client}</p>
            <p className="mb-6 md:mb-8">{caseStudy.summary}</p>
            
            <div className="grid grid-cols-2 gap-4">
              {caseStudy.results.map((result, index) => (
                <div key={index} className="bg-muted p-4 rounded-md">
                  <p className="text-sm font-medium">{result.label}</p>
                  <p className="text-2xl font-bold text-primary">{result.value}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="h-60 md:h-auto bg-muted relative">
            <ImagePlaceholder 
              type={caseStudy.image as any} 
              className="h-full w-full object-cover" 
            />
          </div>
        </div>
      </div>
      
      {/* Challenge & Solution */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 md:mb-16">
        <div className="bg-muted/30 p-6 md:p-8 rounded-lg">
          <h2 className="text-2xl font-bold mb-4 flex items-center">
            <div className="h-8 w-8 mr-3 bg-primary/10 rounded-full flex items-center justify-center">
              <TrendingUp className="h-4 w-4 text-primary" />
            </div>
            Challenge
          </h2>
          <p className="text-muted-foreground">{caseStudy.challenge}</p>
        </div>
        <div className="bg-muted/30 p-6 md:p-8 rounded-lg">
          <h2 className="text-2xl font-bold mb-4 flex items-center">
            <div className="h-8 w-8 mr-3 bg-primary/10 rounded-full flex items-center justify-center">
              <Brain className="h-4 w-4 text-primary" />
            </div>
            Solution
          </h2>
          <p className="text-muted-foreground">{caseStudy.solution}</p>
        </div>
      </div>
      
      {/* Our Approach */}
      <div className="mb-12 md:mb-16">
        <h2 className="text-2xl font-bold mb-6 flex items-center">
          <div className="h-8 w-8 mr-3 bg-primary/10 rounded-full flex items-center justify-center">
            <Database className="h-4 w-4 text-primary" />
          </div>
          Our Approach
        </h2>
        <div className="bg-muted/30 p-6 md:p-8 rounded-lg">
          <ul className="space-y-4">
            {caseStudy.approach.map((item, index) => (
              <li key={index} className="flex items-start">
                <div className="h-6 w-6 rounded-full bg-primary/20 text-primary flex items-center justify-center text-sm mr-4 mt-0.5">
                  {index + 1}
                </div>
                <p className="flex-1">{item}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
      
      {/* Key Outcomes */}
      <div className="mb-12 md:mb-16">
        <h2 className="text-2xl font-bold mb-6 flex items-center">
          <div className="h-8 w-8 mr-3 bg-primary/10 rounded-full flex items-center justify-center">
            <LineChart className="h-4 w-4 text-primary" />
          </div>
          Key Outcomes
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {caseStudy.outcomes.map((outcome, index) => (
            <div key={index} className="bg-muted/30 p-5 rounded-lg">
              <div className="bg-primary/10 text-primary h-10 w-10 rounded-full flex items-center justify-center mb-3">
                <BarChart className="h-5 w-5" />
              </div>
              <p className="font-medium">{outcome}</p>
            </div>
          ))}
        </div>
      </div>
      
      {/* Technologies Used */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold mb-6">Technologies Used</h2>
        <div className="flex flex-wrap gap-3">
          {caseStudy.technologies.map((tech, index) => (
            <div key={index} className="bg-muted px-4 py-2 rounded-full text-sm">
              {tech}
            </div>
          ))}
        </div>
      </div>
      
      {/* CTA */}
      <div className="bg-muted/50 p-6 md:p-10 rounded-lg text-center mb-12">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to Transform Your Organization?</h2>
        <p className="text-lg text-muted-foreground mb-6 max-w-3xl mx-auto">
          Let's discuss how our AI and data solutions can help your business achieve similar results.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" asChild>
            <Link href="/contact">
              Schedule a Consultation
            </Link>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <Link href="/case-studies">
              View More Case Studies
            </Link>
          </Button>
        </div>
      </div>
      
      {/* Related Case Studies */}
      <div>
        <h2 className="text-2xl font-bold mb-6">Related Case Studies</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {Object.entries(caseStudies)
            .filter(([key, study]) => key !== slug && study.industry === caseStudy.industry)
            .slice(0, 3)
            .map(([key, study]) => (
              <div key={key} className="bg-muted/30 rounded-lg overflow-hidden">
                <div className="h-40 bg-muted">
                  <ImagePlaceholder 
                    type={study.image as any} 
                    className="h-full w-full object-cover" 
                  />
                </div>
                <div className="p-5">
                  <h3 className="font-semibold mb-2">{study.title}</h3>
                  <p className="text-sm text-muted-foreground mb-3 line-clamp-2">{study.summary}</p>
                  <Button variant="outline" size="sm" className="w-full" asChild>
                    <Link href={`/case-studies/${key}`}>
                      View Case Study
                    </Link>
                  </Button>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
