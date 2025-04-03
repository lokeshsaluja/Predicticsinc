"use client"

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Brain, Database, TrendingUp, BarChart, Shield, LineChart, PieChart, ArrowRight } from 'lucide-react';
import ImagePlaceholder from '@/components/ui/image-placeholder';
import Logo from '@/components/logo';

export default function Home() {
  return (
    <div className="w-full overflow-hidden">
      {/* Hero Section */}
      <section className="relative py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 z-0"></div>
        <div className="absolute -top-[50%] -right-[50%] w-full h-full rounded-full bg-primary/5 blur-3xl z-0"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 text-center md:text-left">
              <div className="inline-block mb-4 animate-fade-in">
                <Logo size="large" />
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary animate-fade-in">
                Enterprise-Grade<br />AI & Data Solutions
              </h1>
              <p className="text-lg md:text-xl text-foreground/80 animate-fade-in-delay-1">
                Transforming business operations and outcomes through advanced analytics and intelligent systems
              </p>
              <div className="flex flex-wrap gap-4 justify-center md:justify-start animate-fade-in-delay-2">
                <Button asChild size="lg" className="rounded-full">
                  <Link href="/contact">Request Consultation</Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="rounded-full">
                  <Link href="/services">Explore Services</Link>
                </Button>
              </div>
            </div>
            <div className="flex justify-center md:justify-end animate-fade-in">
              <div className="relative w-full max-w-md">
                <div className="absolute -top-4 -left-4 w-24 h-24 bg-primary/10 rounded-full blur-xl"></div>
                <div className="absolute -bottom-8 -right-8 w-40 h-40 bg-secondary/10 rounded-full blur-xl"></div>
                <ImagePlaceholder 
                  type="hero" 
                  width={500} 
                  height={400} 
                  className="w-full h-auto rounded-2xl shadow-lg" 
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Solutions</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We deliver end-to-end enterprise AI and data solutions that drive measurable business impact
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-0 shadow-md hover:shadow-lg transition-all duration-300 bg-card/50 backdrop-blur-sm overflow-hidden group">
              <div className="h-48 overflow-hidden">
                <ImagePlaceholder type="ai-strategy" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
              </div>
              <CardHeader>
                <CardTitle className="flex items-center text-xl">
                  <Brain className="mr-2 text-primary" /> AI Strategy & Implementation
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Comprehensive AI advisory services to identify opportunities, develop roadmaps, and implement solutions that deliver measurable business impact.
                </CardDescription>
              </CardContent>
              <CardFooter>
                <Button variant="ghost" className="p-0 h-auto font-medium text-primary flex items-center gap-1 group-hover:gap-2 transition-all duration-300">
                  Learn more <ArrowRight className="h-4 w-4" />
                </Button>
              </CardFooter>
            </Card>
            
            <Card className="border-0 shadow-md hover:shadow-lg transition-all duration-300 bg-card/50 backdrop-blur-sm overflow-hidden group">
              <div className="h-48 overflow-hidden">
                <ImagePlaceholder type="data-science" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
              </div>
              <CardHeader>
                <CardTitle className="flex items-center text-xl">
                  <Database className="mr-2 text-primary" /> Data Engineering & Architecture
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Design and implementation of scalable data infrastructure to support advanced analytics and AI initiatives across your enterprise.
                </CardDescription>
              </CardContent>
              <CardFooter>
                <Button variant="ghost" className="p-0 h-auto font-medium text-primary flex items-center gap-1 group-hover:gap-2 transition-all duration-300">
                  Learn more <ArrowRight className="h-4 w-4" />
                </Button>
              </CardFooter>
            </Card>
            
            <Card className="border-0 shadow-md hover:shadow-lg transition-all duration-300 bg-card/50 backdrop-blur-sm overflow-hidden group">
              <div className="h-48 overflow-hidden">
                <ImagePlaceholder type="machine-learning" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
              </div>
              <CardHeader>
                <CardTitle className="flex items-center text-xl">
                  <BarChart className="mr-2 text-primary" /> Advanced Analytics
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Turn complex data into actionable insights with our expertise in predictive modeling, machine learning, and business intelligence.
                </CardDescription>
              </CardContent>
              <CardFooter>
                <Button variant="ghost" className="p-0 h-auto font-medium text-primary flex items-center gap-1 group-hover:gap-2 transition-all duration-300">
                  Learn more <ArrowRight className="h-4 w-4" />
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      {/* Case Study Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Client Success Stories</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              See how our enterprise solutions have delivered measurable impact for leading organizations
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="order-2 md:order-1">
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-2xl">Global Healthcare Provider Achieves 42% Efficiency Gain Through AI</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-6 text-muted-foreground">
                    We helped a leading healthcare organization implement predictive analytics for patient care management and resource allocation, resulting in a 42% improvement in operational efficiency and enhanced patient outcomes.
                  </p>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-start">
                      <div className="mr-2 mt-1 h-5 w-5 text-primary">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span>Reduced patient wait times by 35%</span>
                    </li>
                    <li className="flex items-start">
                      <div className="mr-2 mt-1 h-5 w-5 text-primary">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span>Optimized resource allocation saving $3.2M annually</span>
                    </li>
                    <li className="flex items-start">
                      <div className="mr-2 mt-1 h-5 w-5 text-primary">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span>Improved patient satisfaction scores by 28%</span>
                    </li>
                  </ul>
                  <Button variant="outline" className="rounded-full">View Case Study</Button>
                </CardContent>
              </Card>
            </div>
            <div className="order-1 md:order-2 flex justify-center">
              <div className="relative w-full max-w-md">
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/10 rounded-full blur-xl"></div>
                <ImagePlaceholder 
                  type="case-study" 
                  width={500} 
                  height={350} 
                  className="w-full h-auto rounded-2xl shadow-lg" 
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Industries We Serve</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Delivering tailored AI and data solutions across diverse sectors
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            <div className="p-6 bg-card rounded-xl shadow-sm hover:shadow-md transition-all duration-300 text-center group">
              <div className="mb-4 w-20 h-20 md:w-32 md:h-32 flex-shrink-0">
                <ImagePlaceholder type="industry" industry="Healthcare" width={80} height={80} className="group-hover:scale-110 transition-transform duration-300" />
              </div>
              <p className="font-medium">Healthcare</p>
            </div>
            <div className="p-6 bg-card rounded-xl shadow-sm hover:shadow-md transition-all duration-300 text-center group">
              <div className="mb-4 w-20 h-20 md:w-32 md:h-32 flex-shrink-0">
                <ImagePlaceholder type="industry" industry="Insurance" width={80} height={80} className="group-hover:scale-110 transition-transform duration-300" />
              </div>
              <p className="font-medium">Insurance</p>
            </div>
            <div className="p-6 bg-card rounded-xl shadow-sm hover:shadow-md transition-all duration-300 text-center group">
              <div className="mb-4 w-20 h-20 md:w-32 md:h-32 flex-shrink-0">
                <ImagePlaceholder type="industry" industry="CPG" width={80} height={80} className="group-hover:scale-110 transition-transform duration-300" />
              </div>
              <p className="font-medium">CPG</p>
            </div>
            <div className="p-6 bg-card rounded-xl shadow-sm hover:shadow-md transition-all duration-300 text-center group">
              <div className="mb-4 w-20 h-20 md:w-32 md:h-32 flex-shrink-0">
                <ImagePlaceholder type="industry" industry="Electronics" width={80} height={80} className="group-hover:scale-110 transition-transform duration-300" />
              </div>
              <p className="font-medium">Electronics</p>
            </div>
            <div className="p-6 bg-card rounded-xl shadow-sm hover:shadow-md transition-all duration-300 text-center group">
              <div className="mb-4 w-20 h-20 md:w-32 md:h-32 flex-shrink-0">
                <ImagePlaceholder type="industry" industry="Mining" width={80} height={80} className="group-hover:scale-110 transition-transform duration-300" />
              </div>
              <p className="font-medium">Mining</p>
            </div>
            <div className="p-6 bg-card rounded-xl shadow-sm hover:shadow-md transition-all duration-300 text-center group">
              <div className="mb-4 w-20 h-20 md:w-32 md:h-32 flex-shrink-0">
                <ImagePlaceholder type="industry" industry="Government" width={80} height={80} className="group-hover:scale-110 transition-transform duration-300" />
              </div>
              <p className="font-medium">Government</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Client Testimonials</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Hear from our clients about the transformative impact of our solutions
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <Card className="border-0 shadow-lg bg-gradient-to-br from-card/90 to-card p-1">
              <CardContent className="flex flex-col md:flex-row items-center gap-6 p-8">
                <div className="w-24 h-24 md:w-32 md:h-32 flex-shrink-0">
                  <ImagePlaceholder type="testimonial" width={128} height={128} />
                </div>
                <div>
                  <blockquote className="text-lg md:text-xl italic mb-4">
                    "Predictics Inc. has been an invaluable partner in our digital transformation journey. Their deep expertise in data science and AI has enabled us to create predictive models that have revolutionized our supply chain operations."
                  </blockquote>
                  <div className="flex items-center">
                    <div className="h-px w-8 bg-primary mr-3"></div>
                    <div>
                      <p className="font-semibold">Maria Chen</p>
                      <p className="text-sm text-muted-foreground">CTO at Global Consumer Products</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-t-3xl">
        <div className="container mx-auto px-4 relative">
          <div className="absolute top-0 right-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl -z-10"></div>
          <div className="absolute bottom-0 left-0 w-72 h-72 bg-secondary/5 rounded-full blur-3xl -z-10"></div>
          
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 leading-tight">Ready to Transform Your Data Strategy?</h2>
            <p className="text-xl mb-8 text-foreground/80">
              Let's discuss how our enterprise AI and data solutions can drive innovation and growth for your organization.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button asChild size="lg" className="rounded-full text-lg px-8">
                <Link href="/contact">Schedule a Consultation</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="rounded-full text-lg px-8">
                <Link href="/about">Learn About Our Approach</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Add custom animations */}
      <style jsx global>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        .animate-fade-in {
          animation: fadeIn 0.6s ease-out forwards;
        }
        
        .animate-fade-in-delay-1 {
          opacity: 0;
          animation: fadeIn 0.6s ease-out 0.2s forwards;
        }
        
        .animate-fade-in-delay-2 {
          opacity: 0;
          animation: fadeIn 0.6s ease-out 0.4s forwards;
        }
      `}</style>
    </div>
  );
}