"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Database, LineChart, Brain, ArrowRight, Server, Shield, Code, Workflow, Users, Compass, BarChart, TrendingUp, Globe, FileCode, PieChart, LayoutGrid } from 'lucide-react';
import ImagePlaceholder from '@/components/ui/image-placeholder';

export default function Services() {
  return (
    <div className="container mx-auto px-4 py-8 md:py-12 overflow-x-hidden">
      {/* Hero Section */}
      <div className="mb-12 md:mb-16 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent rounded-lg -z-10"></div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 items-center">
          <div className="p-4 md:p-8">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/60">Enterprise Services</h1>
            <p className="text-base md:text-xl mb-6 leading-relaxed">
              At Predictics Inc., we deliver comprehensive AI and data solutions designed specifically for large enterprises 
              facing complex challenges. Our solutions are built to scale, integrate with your existing infrastructure, 
              and provide the security and reliability required by leading organizations.
            </p>
            <Button size="lg" asChild className="w-full sm:w-auto">
              <Link href="/contact">
                Schedule a Consultation <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
          <div className="relative h-60 md:h-80 w-full flex items-center justify-center">
            <div className="absolute inset-0 bg-primary/5 rounded-lg overflow-hidden">
              <ImagePlaceholder type="analytics" className="h-full w-full" />
            </div>
          </div>
        </div>
      </div>
      
      {/* Why Choose Us Section */}
      <section className="mb-16 md:mb-24 bg-muted rounded-lg overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
          <div className="p-6 lg:p-12 flex flex-col justify-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6">Why Enterprise Clients Choose Us</h2>
            <p className="text-base md:text-lg mb-6 md:mb-8">
              Our enterprise focus means we understand the unique challenges and requirements of large organizations. 
              We deliver solutions that meet the highest standards of security, scalability, and reliability.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
              <Card className="bg-background/60 backdrop-blur-sm border-l-4 border-l-primary hover:shadow-md transition-all duration-300">
                <CardContent className="pt-6 pb-4">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 p-2 bg-primary/10 rounded-lg">
                      <Shield className="h-6 w-6 text-primary" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-base font-semibold mb-1 leading-tight">Security & Compliance</h3>
                      <p className="text-sm text-muted-foreground">Enterprise-grade security with regulatory compliance built-in</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="bg-background/60 backdrop-blur-sm border-l-4 border-l-primary hover:shadow-md transition-all duration-300">
                <CardContent className="pt-6 pb-4">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 p-2 bg-primary/10 rounded-lg">
                      <Server className="h-6 w-6 text-primary" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-base font-semibold mb-1 leading-tight">Scalable Solutions</h3>
                      <p className="text-sm text-muted-foreground">Built to scale with your organization's growing needs</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="bg-background/60 backdrop-blur-sm border-l-4 border-l-primary hover:shadow-md transition-all duration-300">
                <CardContent className="pt-6 pb-4">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 p-2 bg-primary/10 rounded-lg">
                      <Compass className="h-6 w-6 text-primary" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-base font-semibold mb-1 leading-tight">Industry Expertise</h3>
                      <p className="text-sm text-muted-foreground">Deep knowledge of your specific sector's challenges</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="bg-background/60 backdrop-blur-sm border-l-4 border-l-primary hover:shadow-md transition-all duration-300">
                <CardContent className="pt-6 pb-4">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 p-2 bg-primary/10 rounded-lg">
                      <Users className="h-6 w-6 text-primary" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-base font-semibold mb-1 leading-tight">Dedicated Teams</h3>
                      <p className="text-sm text-muted-foreground">Specialized professionals with enterprise experience</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
          <div className="relative h-64 md:h-auto lg:aspect-auto min-h-[300px] md:min-h-[400px] bg-primary/5 flex items-center justify-center overflow-hidden">
            <ImagePlaceholder type="data-science" className="h-full w-full object-cover" />
          </div>
        </div>
      </section>
      
      {/* Core Services Section */}
      <section className="mb-16 md:mb-24">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-3 md:mb-4">Core Service Offerings</h2>
          <p className="text-base md:text-xl text-muted-foreground max-w-3xl mx-auto px-4">
            Comprehensive enterprise solutions tailored to your specific business challenges
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          <Card className="overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group flex flex-col">
            <div className="h-48 bg-gradient-to-br from-primary/10 to-primary/5 relative overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                <Database className="h-16 w-16 text-primary/70 group-hover:scale-110 transition-transform duration-300" />
              </div>
            </div>
            <CardHeader className="pb-2">
              <CardTitle className="text-xl font-semibold">Data Strategy & Architecture</CardTitle>
              <CardDescription className="text-base">
                Develop a comprehensive data strategy and robust architecture tailored to your enterprise needs.
              </CardDescription>
            </CardHeader>
            <CardContent className="flex-grow">
              <ul className="space-y-2 mb-6">
                <li className="flex items-start text-sm">
                  <div className="mr-2 mt-1 text-primary flex-shrink-0"><ArrowRight className="h-3 w-3" /></div>
                  <span>Enterprise Data Strategy Development</span>
                </li>
                <li className="flex items-start text-sm">
                  <div className="mr-2 mt-1 text-primary flex-shrink-0"><ArrowRight className="h-3 w-3" /></div>
                  <span>Data Architecture Design & Optimization</span>
                </li>
                <li className="flex items-start text-sm">
                  <div className="mr-2 mt-1 text-primary flex-shrink-0"><ArrowRight className="h-3 w-3" /></div>
                  <span>Data Governance & Compliance Frameworks</span>
                </li>
                <li className="flex items-start text-sm">
                  <div className="mr-2 mt-1 text-primary flex-shrink-0"><ArrowRight className="h-3 w-3" /></div>
                  <span>Data Quality & Master Data Management</span>
                </li>
              </ul>
            </CardContent>
            <CardFooter className="pt-0">
              <Button variant="outline" className="w-full" asChild>
                <Link href="/case-studies/ai-data-transformation-mining">
                  Learn More <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </CardFooter>
          </Card>
          
          <Card className="overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group flex flex-col">
            <div className="h-48 bg-gradient-to-br from-primary/10 to-primary/5 relative overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                <LineChart className="h-16 w-16 text-primary/70 group-hover:scale-110 transition-transform duration-300" />
              </div>
            </div>
            <CardHeader className="pb-2">
              <CardTitle className="text-xl font-semibold">Advanced Analytics</CardTitle>
              <CardDescription className="text-base">
                Transform complex data into actionable insights with customized analytics solutions.
              </CardDescription>
            </CardHeader>
            <CardContent className="flex-grow">
              <ul className="space-y-2 mb-6">
                <li className="flex items-start text-sm">
                  <div className="mr-2 mt-1 text-primary flex-shrink-0"><ArrowRight className="h-3 w-3" /></div>
                  <span>Predictive Analytics & Forecasting</span>
                </li>
                <li className="flex items-start text-sm">
                  <div className="mr-2 mt-1 text-primary flex-shrink-0"><ArrowRight className="h-3 w-3" /></div>
                  <span>Business Intelligence & Reporting</span>
                </li>
                <li className="flex items-start text-sm">
                  <div className="mr-2 mt-1 text-primary flex-shrink-0"><ArrowRight className="h-3 w-3" /></div>
                  <span>Customer Analytics & Segmentation</span>
                </li>
                <li className="flex items-start text-sm">
                  <div className="mr-2 mt-1 text-primary flex-shrink-0"><ArrowRight className="h-3 w-3" /></div>
                  <span>Financial & Operational Analytics</span>
                </li>
              </ul>
            </CardContent>
            <CardFooter className="pt-0">
              <Button variant="outline" className="w-full" asChild>
                <Link href="/case-studies/customer-segmentation-personalization">
                  Learn More <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </CardFooter>
          </Card>
          
          <Card className="overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group flex flex-col">
            <div className="h-48 bg-gradient-to-br from-primary/10 to-primary/5 relative overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                <Brain className="h-16 w-16 text-primary/70 group-hover:scale-110 transition-transform duration-300" />
              </div>
            </div>
            <CardHeader className="pb-2">
              <CardTitle className="text-xl font-semibold">AI & Machine Learning</CardTitle>
              <CardDescription className="text-base">
                Design and implement custom AI solutions that drive business innovation and efficiency.
              </CardDescription>
            </CardHeader>
            <CardContent className="flex-grow">
              <ul className="space-y-2 mb-6">
                <li className="flex items-start text-sm">
                  <div className="mr-2 mt-1 text-primary flex-shrink-0"><ArrowRight className="h-3 w-3" /></div>
                  <span>Machine Learning Model Development</span>
                </li>
                <li className="flex items-start text-sm">
                  <div className="mr-2 mt-1 text-primary flex-shrink-0"><ArrowRight className="h-3 w-3" /></div>
                  <span>Natural Language Processing (NLP)</span>
                </li>
                <li className="flex items-start text-sm">
                  <div className="mr-2 mt-1 text-primary flex-shrink-0"><ArrowRight className="h-3 w-3" /></div>
                  <span>Computer Vision Applications</span>
                </li>
                <li className="flex items-start text-sm">
                  <div className="mr-2 mt-1 text-primary flex-shrink-0"><ArrowRight className="h-3 w-3" /></div>
                  <span>MLOps & AI Infrastructure</span>
                </li>
              </ul>
            </CardContent>
            <CardFooter className="pt-0">
              <Button variant="outline" className="w-full" asChild>
                <Link href="/case-studies/predictive-analytics-patient-outcomes">
                  Learn More <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </CardFooter>
          </Card>
          
          <Card className="overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group flex flex-col">
            <div className="h-48 bg-gradient-to-br from-primary/10 to-primary/5 relative overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                <Server className="h-16 w-16 text-primary/70 group-hover:scale-110 transition-transform duration-300" />
              </div>
            </div>
            <CardHeader className="pb-2">
              <CardTitle className="text-xl font-semibold">Data Engineering & Integration</CardTitle>
              <CardDescription className="text-base">
                Build robust data pipelines and integration solutions to unify your enterprise data.
              </CardDescription>
            </CardHeader>
            <CardContent className="flex-grow">
              <ul className="space-y-2 mb-6">
                <li className="flex items-start text-sm">
                  <div className="mr-2 mt-1 text-primary flex-shrink-0"><ArrowRight className="h-3 w-3" /></div>
                  <span>Data Pipeline Development</span>
                </li>
                <li className="flex items-start text-sm">
                  <div className="mr-2 mt-1 text-primary flex-shrink-0"><ArrowRight className="h-3 w-3" /></div>
                  <span>ETL/ELT Process Implementation</span>
                </li>
                <li className="flex items-start text-sm">
                  <div className="mr-2 mt-1 text-primary flex-shrink-0"><ArrowRight className="h-3 w-3" /></div>
                  <span>Data Lake & Warehouse Solutions</span>
                </li>
                <li className="flex items-start text-sm">
                  <div className="mr-2 mt-1 text-primary flex-shrink-0"><ArrowRight className="h-3 w-3" /></div>
                  <span>Real-time Data Processing</span>
                </li>
              </ul>
            </CardContent>
            <CardFooter className="pt-0">
              <Button variant="outline" className="w-full" asChild>
                <Link href="/case-studies/healthcare-data-integration">
                  Learn More <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </CardFooter>
          </Card>
          
          <Card className="overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group flex flex-col">
            <div className="h-48 bg-gradient-to-br from-primary/10 to-primary/5 relative overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                <Workflow className="h-16 w-16 text-primary/70 group-hover:scale-110 transition-transform duration-300" />
              </div>
            </div>
            <CardHeader className="pb-2">
              <CardTitle className="text-xl font-semibold">AI Strategy & Transformation</CardTitle>
              <CardDescription className="text-base">
                Develop a comprehensive AI roadmap to transform your organization with intelligent solutions.
              </CardDescription>
            </CardHeader>
            <CardContent className="flex-grow">
              <ul className="space-y-2 mb-6">
                <li className="flex items-start text-sm">
                  <div className="mr-2 mt-1 text-primary flex-shrink-0"><ArrowRight className="h-3 w-3" /></div>
                  <span>AI Readiness Assessment</span>
                </li>
                <li className="flex items-start text-sm">
                  <div className="mr-2 mt-1 text-primary flex-shrink-0"><ArrowRight className="h-3 w-3" /></div>
                  <span>AI Strategy & Roadmap Development</span>
                </li>
                <li className="flex items-start text-sm">
                  <div className="mr-2 mt-1 text-primary flex-shrink-0"><ArrowRight className="h-3 w-3" /></div>
                  <span>Organizational Change Management</span>
                </li>
                <li className="flex items-start text-sm">
                  <div className="mr-2 mt-1 text-primary flex-shrink-0"><ArrowRight className="h-3 w-3" /></div>
                  <span>AI Center of Excellence Design</span>
                </li>
              </ul>
            </CardContent>
            <CardFooter className="pt-0">
              <Button variant="outline" className="w-full" asChild>
                <Link href="/case-studies/supply-chain-optimization">
                  Learn More <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </CardFooter>
          </Card>
        </div>
      </section>
      
      {/* Specialized Services Section */}
      <section className="mb-16 md:mb-24">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-3 md:mb-4">Specialized Services</h2>
          <p className="text-base md:text-xl text-muted-foreground max-w-3xl mx-auto px-4">
            Expert solutions for specific enterprise needs
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          <Card className="bg-gradient-to-br from-background to-muted/30 hover:shadow-lg transition-all duration-300">
            <CardHeader>
              <CardTitle className="flex items-center text-lg md:text-xl">
                <Code className="mr-3 h-6 w-6 text-primary flex-shrink-0" /> Data Engineering & Integration
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col md:flex-row gap-6 items-start">
                <div className="w-full md:w-1/3 h-48 rounded-lg overflow-hidden bg-primary/5 flex items-center justify-center">
                  <ImagePlaceholder type="data-science" className="h-full w-full object-cover" />
                </div>
                <div className="w-full md:w-2/3">
                  <p className="mb-4 text-sm md:text-base">
                    We design, build, and maintain robust data pipelines and integration solutions that ensure reliable 
                    data flow across your enterprise systems.
                  </p>
                  <ul className="space-y-2 mb-6 text-sm md:text-base">
                    <li className="flex items-start">
                      <div className="mr-2 mt-1 text-primary flex-shrink-0"><ArrowRight className="h-3 w-3" /></div>
                      <span>ETL/ELT Pipeline Development</span>
                    </li>
                    <li className="flex items-start">
                      <div className="mr-2 mt-1 text-primary flex-shrink-0"><ArrowRight className="h-3 w-3" /></div>
                      <span>Real-time Data Processing</span>
                    </li>
                    <li className="flex items-start">
                      <div className="mr-2 mt-1 text-primary flex-shrink-0"><ArrowRight className="h-3 w-3" /></div>
                      <span>Data Warehouse & Lake Implementation</span>
                    </li>
                    <li className="flex items-start">
                      <div className="mr-2 mt-1 text-primary flex-shrink-0"><ArrowRight className="h-3 w-3" /></div>
                      <span>API & Integration Management</span>
                    </li>
                  </ul>
                  <Button variant="outline" size="sm" asChild>
                    <Link href="/case-studies/healthcare-data-integration">
                      Explore This Service <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="bg-gradient-to-br from-background to-muted/30 hover:shadow-lg transition-all duration-300">
            <CardHeader>
              <CardTitle className="flex items-center text-lg md:text-xl">
                <Shield className="mr-3 h-6 w-6 text-primary flex-shrink-0" /> Enterprise Data Security
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col md:flex-row gap-6 items-start">
                <div className="w-full md:w-1/3 h-48 rounded-lg overflow-hidden bg-primary/5 flex items-center justify-center">
                  <ImagePlaceholder type="enterprise-clients" className="h-full w-full object-cover" />
                </div>
                <div className="w-full md:w-2/3">
                  <p className="mb-4 text-sm md:text-base">
                    Our enterprise data security solutions provide comprehensive protection for your sensitive information
                    while ensuring compliance with industry regulations.
                  </p>
                  <ul className="space-y-2 mb-6 text-sm md:text-base">
                    <li className="flex items-start">
                      <div className="mr-2 mt-1 text-primary flex-shrink-0"><ArrowRight className="h-3 w-3" /></div>
                      <span>Data Security Assessment</span>
                    </li>
                    <li className="flex items-start">
                      <div className="mr-2 mt-1 text-primary flex-shrink-0"><ArrowRight className="h-3 w-3" /></div>
                      <span>Compliance Framework Implementation</span>
                    </li>
                    <li className="flex items-start">
                      <div className="mr-2 mt-1 text-primary flex-shrink-0"><ArrowRight className="h-3 w-3" /></div>
                      <span>Data Privacy Management</span>
                    </li>
                    <li className="flex items-start">
                      <div className="mr-2 mt-1 text-primary flex-shrink-0"><ArrowRight className="h-3 w-3" /></div>
                      <span>Security Monitoring & Response</span>
                    </li>
                  </ul>
                  <Button variant="outline" size="sm" asChild>
                    <Link href="/case-studies/healthcare-data-integration">
                      Explore This Service <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="bg-gradient-to-br from-background to-muted/30 hover:shadow-lg transition-all duration-300">
            <CardHeader>
              <CardTitle className="flex items-center text-lg md:text-xl">
                <BarChart className="mr-3 h-6 w-6 text-primary flex-shrink-0" /> Advanced Analytics & Reporting
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col md:flex-row gap-6 items-start">
                <div className="w-full md:w-1/3 h-48 rounded-lg overflow-hidden bg-primary/5 flex items-center justify-center">
                  <ImagePlaceholder type="data-visualization" className="h-full w-full object-cover" />
                </div>
                <div className="w-full md:w-2/3">
                  <p className="mb-4 text-sm md:text-base">
                    Our advanced analytics solutions help you extract maximum value from your data with 
                    sophisticated models and visualizations that drive business decisions.
                  </p>
                  <ul className="space-y-2 mb-6 text-sm md:text-base">
                    <li className="flex items-start">
                      <div className="mr-2 mt-1 text-primary flex-shrink-0"><ArrowRight className="h-3 w-3" /></div>
                      <span>Predictive & Prescriptive Analytics</span>
                    </li>
                    <li className="flex items-start">
                      <div className="mr-2 mt-1 text-primary flex-shrink-0"><ArrowRight className="h-3 w-3" /></div>
                      <span>Business Intelligence Dashboards</span>
                    </li>
                    <li className="flex items-start">
                      <div className="mr-2 mt-1 text-primary flex-shrink-0"><ArrowRight className="h-3 w-3" /></div>
                      <span>Advanced Data Visualization</span>
                    </li>
                    <li className="flex items-start">
                      <div className="mr-2 mt-1 text-primary flex-shrink-0"><ArrowRight className="h-3 w-3" /></div>
                      <span>Self-Service Analytics Solutions</span>
                    </li>
                  </ul>
                  <Button variant="outline" size="sm" asChild>
                    <Link href="/case-studies/customer-segmentation-personalization">
                      Explore This Service <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="bg-gradient-to-br from-background to-muted/30 hover:shadow-lg transition-all duration-300">
            <CardHeader>
              <CardTitle className="flex items-center text-lg md:text-xl">
                <Brain className="mr-3 h-6 w-6 text-primary flex-shrink-0" /> AI Strategy & Implementation
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col md:flex-row gap-6 items-start">
                <div className="w-full md:w-1/3 h-48 rounded-lg overflow-hidden bg-primary/5 flex items-center justify-center">
                  <ImagePlaceholder type="ai-strategy" className="h-full w-full object-cover" />
                </div>
                <div className="w-full md:w-2/3">
                  <p className="mb-4 text-sm md:text-base">
                    We develop tailored AI strategies and implement intelligent solutions that 
                    transform your business operations and create sustainable competitive advantages.
                  </p>
                  <ul className="space-y-2 mb-6 text-sm md:text-base">
                    <li className="flex items-start">
                      <div className="mr-2 mt-1 text-primary flex-shrink-0"><ArrowRight className="h-3 w-3" /></div>
                      <span>AI Roadmap Development</span>
                    </li>
                    <li className="flex items-start">
                      <div className="mr-2 mt-1 text-primary flex-shrink-0"><ArrowRight className="h-3 w-3" /></div>
                      <span>Machine Learning Implementation</span>
                    </li>
                    <li className="flex items-start">
                      <div className="mr-2 mt-1 text-primary flex-shrink-0"><ArrowRight className="h-3 w-3" /></div>
                      <span>AI Governance & Compliance</span>
                    </li>
                    <li className="flex items-start">
                      <div className="mr-2 mt-1 text-primary flex-shrink-0"><ArrowRight className="h-3 w-3" /></div>
                      <span>Organizational Change Management</span>
                    </li>
                  </ul>
                  <Button variant="outline" size="sm" asChild>
                    <Link href="/case-studies/predictive-analytics-patient-outcomes">
                      Explore This Service <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
      
      {/* Industry Solutions Section */}
      <section className="mb-16 md:mb-24">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-3 md:mb-4">Industry-Specific Solutions</h2>
          <p className="text-base md:text-xl text-muted-foreground max-w-3xl mx-auto px-4">
            Tailored approaches for your sector's unique challenges
          </p>
        </div>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 md:gap-6">
          {[
            { name: "Healthcare", icon: <ImagePlaceholder type="healthcare" className="h-10 w-10 md:h-12 md:w-12" />, desc: "Patient analytics & operational efficiency" },
            { name: "CPG", icon: <ImagePlaceholder type="cpg" className="h-10 w-10 md:h-12 md:w-12" />, desc: "Supply chain & consumer insights" },
            { name: "Electronics", icon: <ImagePlaceholder type="electronics" className="h-10 w-10 md:h-12 md:w-12" />, desc: "Manufacturing analytics & quality" },
            { name: "Mining", icon: <ImagePlaceholder type="mining" className="h-10 w-10 md:h-12 md:w-12" />, desc: "Operations & predictive maintenance" },
            { name: "Insurance", icon: <ImagePlaceholder type="insurance" className="h-10 w-10 md:h-12 md:w-12" />, desc: "Risk modeling & claims analytics" },
            { name: "Government", icon: <ImagePlaceholder type="government" className="h-10 w-10 md:h-12 md:w-12" />, desc: "Program effectiveness & resources" }
          ].map((industry, index) => (
            <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 text-center">
              <CardContent className="pt-4 md:pt-6 px-2 md:px-4">
                <div className="mx-auto w-16 h-16 md:w-20 md:h-20 rounded-full bg-primary/10 flex items-center justify-center mb-2 md:mb-4">
                  {industry.icon}
                </div>
                <h3 className="text-base md:text-lg font-semibold mb-1 md:mb-2">{industry.name}</h3>
                <p className="text-xs md:text-sm text-muted-foreground mb-2 md:mb-4 line-clamp-2">{industry.desc}</p>
                <Button variant="outline" size="sm" className="w-full text-xs md:text-sm py-1" asChild>
                  <Link href={`/case-studies?industry=${industry.name.toLowerCase()}`}>
                    View Cases
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="bg-muted rounded-lg p-6 md:p-12 text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-3 md:mb-4">Ready to Transform Your Enterprise Data?</h2>
        <p className="text-base md:text-xl max-w-3xl mx-auto mb-6 md:mb-8 px-4">
          Let's discuss how our enterprise AI and data solutions can drive measurable business impact for your organization.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="w-full sm:w-auto" asChild>
            <Link href="/contact">
              Schedule a Consultation <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button size="lg" variant="outline" className="w-full sm:w-auto" asChild>
            <Link href="/case-studies">
              View Our Case Studies
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}