"use client"

import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ArrowRight, ArrowUpRight, Users, Compass, Award, BookOpen, Target, Clock, Database } from 'lucide-react';
import Link from 'next/link';
import ProfessionalImage from '@/components/ui/professional-image';

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-8 md:py-12 overflow-x-hidden">
      {/* Hero Section */}
      <div className="mb-12 md:mb-16 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent rounded-lg -z-10"></div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 items-center">
          <div className="p-4 md:p-8">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/60">About Predictics Inc.</h1>
            <p className="text-base md:text-xl mb-4 md:mb-6 leading-relaxed">
              Founded in 2018, Predictics Inc. is a leading enterprise AI and data consulting firm specializing in 
              helping large organizations harness the power of their data to drive business growth and innovation.
            </p>
            <p className="text-base md:text-xl mb-6 leading-relaxed">
              Our team of experts combines deep technical expertise with industry knowledge to deliver solutions 
              that address real business challenges and create measurable value.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="w-full sm:w-auto" asChild>
                <Link href="/contact">
                  Get in Touch <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="w-full sm:w-auto" asChild>
                <Link href="/services">
                  Our Services
                </Link>
              </Button>
            </div>
          </div>
          <div className="relative h-60 md:h-80 w-full flex items-center justify-center">
            <div className="absolute inset-0 bg-primary/5 rounded-lg overflow-hidden">
              <ProfessionalImage type="data-team" className="h-full w-full" />
            </div>
          </div>
        </div>
      </div>
      
      {/* Our Expertise Section */}
      <section className="mb-12 md:mb-20">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-3 md:mb-4">Our Expertise</h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-3xl mx-auto">
            Specialized technical capabilities backed by industry knowledge
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {[
            { icon: <Database className="h-6 w-6 md:h-8 md:w-8 text-primary" />, title: "Data Architecture", desc: "Designing robust, scalable data infrastructure" },
            { icon: <BookOpen className="h-6 w-6 md:h-8 md:w-8 text-primary" />, title: "Advanced Analytics", desc: "Turning complex data into actionable insights" },
            { icon: <Users className="h-6 w-6 md:h-8 md:w-8 text-primary" />, title: "AI Development", desc: "Building custom AI solutions for enterprise needs" },
            { icon: <Compass className="h-6 w-6 md:h-8 md:w-8 text-primary" />, title: "Strategy & Governance", desc: "Guiding organizational AI transformation" }
          ].map((item, i) => (
            <Card key={i} className="hover:shadow-md transition-all duration-300 group bg-muted/30">
              <CardContent className="p-6">
                <div className="mb-4 w-12 h-12 md:w-16 md:h-16 flex items-center justify-center rounded-full bg-primary/10 group-hover:bg-primary/20 transition-all duration-300">
                  {item.icon}
                </div>
                <h3 className="text-lg md:text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-sm md:text-base text-muted-foreground">{item.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
      
      {/* Clients Section */}
      <section className="mb-12 md:mb-20 bg-muted p-6 md:p-12 rounded-lg">
        <div className="text-center mb-8 md:mb-10">
          <h2 className="text-2xl md:text-3xl font-bold mb-3 md:mb-4">Trusted by Leading Organizations</h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-3xl mx-auto">
            We partner with enterprises across industries to solve their most complex data challenges
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 md:gap-8">
          {['healthcare', 'cpg', 'electronics', 'mining', 'insurance', 'government'].map((type, i) => (
            <div key={i} className="bg-background rounded-lg p-4 flex items-center justify-center min-h-[80px] hover:shadow-md transition-all duration-300">
              <ProfessionalImage type={type as 'healthcare' | 'cpg' | 'electronics' | 'mining' | 'insurance' | 'government'} className="h-8 w-8 md:h-10 md:w-10" />
            </div>
          ))}
        </div>
      </section>
      
      {/* Team Approach Section */}
      <section className="mb-12 md:mb-20">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-3 md:mb-4">Our Collective Expertise</h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-3xl mx-auto">
            We bring together diverse skills and perspectives to deliver exceptional solutions
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          <Card className="bg-muted/30 hover:shadow-md transition-all duration-300">
            <CardContent className="p-6">
              <div className="mb-4 relative h-40 overflow-hidden rounded-lg">
                <ProfessionalImage type="abstract-team" className="h-full w-full object-cover" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Collaborative Teams</h3>
              <p className="text-sm text-muted-foreground">
                Our cross-functional teams combine technical expertise with domain knowledge to address complex challenges across industries.
              </p>
            </CardContent>
          </Card>
          
          <Card className="bg-muted/30 hover:shadow-md transition-all duration-300">
            <CardContent className="p-6">
              <div className="mb-4 relative h-40 overflow-hidden rounded-lg">
                <ProfessionalImage type="data-science" className="h-full w-full object-cover" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Deep Technical Expertise</h3>
              <p className="text-sm text-muted-foreground">
                Our specialists have backgrounds from leading tech companies and research institutions, bringing best practices to every project.
              </p>
            </CardContent>
          </Card>
          
          <Card className="bg-muted/30 hover:shadow-md transition-all duration-300">
            <CardContent className="p-6">
              <div className="mb-4 relative h-40 overflow-hidden rounded-lg">
                <ProfessionalImage type="data-analytics" className="h-full w-full object-cover" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Industry Knowledge</h3>
              <p className="text-sm text-muted-foreground">
                We've built specialized expertise in key industries including Healthcare, CPG, Electronics, and more.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
      
      {/* Our Approach Section */}
      <section className="mb-12 md:mb-20">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-3 md:mb-4">Our Approach</h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-3xl mx-auto">
            A proven methodology for enterprise AI transformation
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="order-2 lg:order-1">
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                  <Target className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-1">Discovery & Strategy</h3>
                  <p className="text-sm text-muted-foreground">We begin by understanding your business goals and data landscape to identify high-impact opportunities.</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                  <Award className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-1">Solution Design</h3>
                  <p className="text-sm text-muted-foreground">Our experts design custom AI and data solutions tailored to your specific business challenges.</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                  <Clock className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-1">Implementation & Integration</h3>
                  <p className="text-sm text-muted-foreground">We build and integrate solutions that work seamlessly with your existing systems and processes.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="order-1 lg:order-2 relative">
            <div className="h-60 md:h-80 overflow-hidden rounded-lg shadow-lg">
              <ProfessionalImage type="enterprise-meeting" className="h-full w-full object-cover" />
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="bg-muted rounded-lg p-6 md:p-12 text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-3 md:mb-4">Ready to Start Your AI Journey?</h2>
        <p className="text-base md:text-xl max-w-3xl mx-auto mb-6 md:mb-8">
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