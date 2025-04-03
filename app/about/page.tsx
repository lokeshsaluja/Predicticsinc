"use client"

import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ArrowRight, ArrowUpRight, Users, Compass, Award, BookOpen, Target, Clock, Database } from 'lucide-react';
import Link from 'next/link';
import ImagePlaceholder from '@/components/ui/image-placeholder';

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
              <ImagePlaceholder type="data-team" className="h-full w-full" />
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
              <ImagePlaceholder type={type as 'healthcare' | 'cpg' | 'electronics' | 'mining' | 'insurance' | 'government'} className="h-8 w-8 md:h-10 md:w-10" />
            </div>
          ))}
        </div>
      </section>
      
      {/* Leadership Team Section */}
      <section className="mb-12 md:mb-20">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-3 md:mb-4">Our Leadership Team</h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-3xl mx-auto">
            Meet the experts guiding our mission to transform enterprises through data and AI
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {[
            { name: "Alexandra Chen", role: "CEO & Founder", bio: "Former CTO at a Fortune 100 tech company with 20+ years of experience in enterprise data solutions." },
            { name: "Michael Rivera", role: "Chief Data Scientist", bio: "PhD in Machine Learning with extensive experience developing AI models for healthcare and finance." },
            { name: "Sarah Johnson", role: "VP of Client Success", bio: "15+ years of experience leading enterprise transformation initiatives in various industries." },
          ].map((person, i) => (
            <Card key={i} className="overflow-hidden group hover:shadow-lg transition-all duration-300">
              <div className="h-48 md:h-64 bg-primary/5 flex items-center justify-center overflow-hidden">
                <ImagePlaceholder type="team" className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <CardContent className="p-6">
                <h3 className="text-lg md:text-xl font-semibold mb-1">{person.name}</h3>
                <p className="text-sm md:text-base text-primary mb-3">{person.role}</p>
                <p className="text-sm md:text-base text-muted-foreground">{person.bio}</p>
              </CardContent>
              <CardFooter className="p-6 pt-0">
                <Button variant="outline" size="sm" className="flex items-center gap-1 text-xs md:text-sm">
                  View Profile <ArrowUpRight className="h-3 w-3" />
                </Button>
              </CardFooter>
            </Card>
          ))}
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
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          <div className="relative bg-muted rounded-lg overflow-hidden h-60 md:h-auto">
            <ImagePlaceholder type="meeting" className="h-full w-full" />
          </div>
          <div className="space-y-4 md:space-y-6">
            {[
              { icon: <Target className="h-5 w-5 md:h-6 md:w-6 text-primary shrink-0" />, title: "Discover", desc: "We begin by understanding your business objectives and current data landscape." },
              { icon: <Clock className="h-5 w-5 md:h-6 md:w-6 text-primary shrink-0" />, title: "Design", desc: "Our experts create a tailored solution architecture to address your specific challenges." },
              { icon: <Award className="h-5 w-5 md:h-6 md:w-6 text-primary shrink-0" />, title: "Deliver", desc: "We implement solutions using agile methodologies to ensure rapid value creation." },
              { icon: <Compass className="h-5 w-5 md:h-6 md:w-6 text-primary shrink-0" />, title: "Drive", desc: "We provide ongoing support and optimization to maximize long-term business impact." }
            ].map((step, i) => (
              <div key={i} className="flex gap-4 md:gap-5 items-start bg-background p-4 md:p-6 rounded-lg hover:shadow-md transition-all duration-300">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  {step.icon}
                </div>
                <div>
                  <h3 className="text-base md:text-lg font-semibold mb-1 md:mb-2">{step.title}</h3>
                  <p className="text-sm md:text-base text-muted-foreground">{step.desc}</p>
                </div>
              </div>
            ))}
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