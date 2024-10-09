import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Brain, Lightbulb, TrendingUp, Users } from 'lucide-react';

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Hero Section */}
      <section className="text-center py-20 bg-gradient-to-r from-primary to-secondary text-primary-foreground rounded-lg mb-12">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Empower Your Business with AI</h1>
        <p className="text-xl mb-8">Leverage Generative AI and LLMs for unprecedented growth and innovation</p>
        <Button asChild size="lg">
          <Link href="/contact">Get Started</Link>
        </Button>
      </section>

      {/* Services Section */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-center mb-8">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Brain className="mr-2" /> AI Strategy Consulting
              </CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>Develop a comprehensive AI strategy tailored to your business needs and goals.</CardDescription>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Lightbulb className="mr-2" /> LLM Implementation
              </CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>Integrate cutting-edge Language Models to enhance your products and services.</CardDescription>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <TrendingUp className="mr-2" /> AI-Driven Growth
              </CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>Unlock new opportunities and optimize operations with AI-powered solutions.</CardDescription>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Case Study Section */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-center mb-8">Case Study</h2>
        <Card>
          <CardHeader>
            <CardTitle>E-commerce Giant Boosts Sales by 35% with AI</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-4">We helped a leading e-commerce platform implement personalized product recommendations using advanced LLMs, resulting in a 35% increase in sales and improved customer satisfaction.</p>
            <Button variant="outline">Read Full Case Study</Button>
          </CardContent>
        </Card>
      </section>

      {/* Testimonial Section */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-center mb-8">What Our Clients Say</h2>
        <Card>
          <CardContent className="flex flex-col items-center text-center pt-6">
            <Users className="w-12 h-12 mb-4 text-primary" />
            <blockquote className="text-lg italic mb-4">"AI Consultancy's expertise in Generative AI has transformed our business. Their strategic insights and implementation support have been invaluable."</blockquote>
            <p className="font-semibold">- Sarah Johnson, CEO of TechInnovate</p>
          </CardContent>
        </Card>
      </section>

      {/* CTA Section */}
      <section className="text-center py-12 bg-muted rounded-lg">
        <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Business with AI?</h2>
        <p className="text-xl mb-8">Let's discuss how we can leverage AI to drive your growth and innovation.</p>
        <Button asChild size="lg">
          <Link href="/contact">Contact Us Today</Link>
        </Button>
      </section>
    </div>
  );
}