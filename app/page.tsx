import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Brain, Database, TrendingUp, BarChart, Shield, LineChart } from 'lucide-react';

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Hero Section */}
      <section className="text-center py-20 bg-gradient-to-r from-primary to-secondary text-primary-foreground rounded-lg mb-12">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Enterprise-Grade AI & Data Solutions</h1>
        <p className="text-xl mb-8">Transforming business operations and outcomes through advanced analytics and intelligent systems</p>
        <Button asChild size="lg">
          <Link href="/contact">Request Consultation</Link>
        </Button>
      </section>

      {/* Services Section */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-center mb-8">Our Solutions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Brain className="mr-2" /> AI Strategy & Implementation
              </CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>Comprehensive AI advisory services to identify opportunities, develop roadmaps, and implement solutions that deliver measurable business impact.</CardDescription>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Database className="mr-2" /> Data Engineering & Architecture
              </CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>Design and implementation of scalable data infrastructure to support advanced analytics and AI initiatives across your enterprise.</CardDescription>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <BarChart className="mr-2" /> Advanced Analytics
              </CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>Turn complex data into actionable insights with our expertise in predictive modeling, machine learning, and business intelligence.</CardDescription>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Case Study Section */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-center mb-8">Client Success Stories</h2>
        <Card>
          <CardHeader>
            <CardTitle>Global Healthcare Provider Achieves 42% Efficiency Gain Through AI</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-4">We helped a leading healthcare organization implement predictive analytics for patient care management and resource allocation, resulting in a 42% improvement in operational efficiency and enhanced patient outcomes.</p>
            <Button variant="outline">View Case Study</Button>
          </CardContent>
        </Card>
      </section>

      {/* Industries Section */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-center mb-8">Industries We Serve</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 text-center">
          <div className="p-4 bg-muted rounded-md">
            <Shield className="mx-auto h-8 w-8 mb-2 text-primary" />
            <p className="font-medium">Healthcare</p>
          </div>
          <div className="p-4 bg-muted rounded-md">
            <LineChart className="mx-auto h-8 w-8 mb-2 text-primary" />
            <p className="font-medium">Insurance</p>
          </div>
          <div className="p-4 bg-muted rounded-md">
            <TrendingUp className="mx-auto h-8 w-8 mb-2 text-primary" />
            <p className="font-medium">CPG</p>
          </div>
          <div className="p-4 bg-muted rounded-md">
            <Brain className="mx-auto h-8 w-8 mb-2 text-primary" />
            <p className="font-medium">Electronics</p>
          </div>
          <div className="p-4 bg-muted rounded-md">
            <Database className="mx-auto h-8 w-8 mb-2 text-primary" />
            <p className="font-medium">Mining</p>
          </div>
          <div className="p-4 bg-muted rounded-md">
            <BarChart className="mx-auto h-8 w-8 mb-2 text-primary" />
            <p className="font-medium">Government</p>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-center mb-8">Client Testimonials</h2>
        <Card>
          <CardContent className="flex flex-col items-center text-center pt-6">
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
              <svg className="w-8 h-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 11l3-3 5 5M7 17h.01M17 17h.01M13 17h.01M9 17h.01" />
              </svg>
            </div>
            <blockquote className="text-lg italic mb-4">"Predictics Inc. has been an invaluable partner in our digital transformation journey. Their deep expertise in data science and AI has enabled us to create predictive models that have revolutionized our supply chain operations."</blockquote>
            <p className="font-semibold">- Maria Chen, CTO at Global Consumer Products</p>
          </CardContent>
        </Card>
      </section>

      {/* CTA Section */}
      <section className="text-center py-12 bg-muted rounded-lg">
        <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Data Strategy?</h2>
        <p className="text-xl mb-8">Let's discuss how our enterprise AI and data solutions can drive innovation and growth for your organization.</p>
        <Button asChild size="lg">
          <Link href="/contact">Schedule a Consultation</Link>
        </Button>
      </section>
    </div>
  );
}