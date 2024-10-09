import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Brain, Lightbulb, TrendingUp, Code, BarChart, Users } from 'lucide-react';

export default function Services() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-8">Our Services</h1>
      
      <p className="text-lg text-center mb-12">
        We offer a comprehensive range of AI consulting services, specializing in Generative AI 
        and Large Language Models (LLMs) to drive innovation and growth for your business.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Brain className="mr-2" /> AI Strategy Consulting
            </CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription>
              Develop a tailored AI roadmap aligned with your business goals. We analyze your 
              current processes, identify opportunities for AI integration, and create a 
              comprehensive strategy for implementation.
            </CardDescription>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Lightbulb className="mr-2" /> LLM Implementation
            </CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription>
              Leverage the power of Large Language Models in your business. We help you select, 
              fine-tune, and deploy LLMs for various applications such as content generation, 
              chatbots, and advanced text analysis.
            </CardDescription>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <TrendingUp className="mr-2" /> AI-Driven Growth Solutions
            </CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription>
              Unlock new growth opportunities with AI. We implement solutions for personalized 
              marketing, predictive analytics, and AI-powered product recommendations to boost 
              your business performance.
            </CardDescription>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Code className="mr-2" /> Custom AI Development
            </CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription>
              Our team of expert developers creates bespoke AI solutions tailored to your specific 
              needs. From computer vision applications to natural language processing tools, we 
              bring your AI ideas to life.
            </CardDescription>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <BarChart className="mr-2" /> AI-Enhanced Analytics
            </CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription>
              Transform your data into actionable insights. We implement advanced AI and machine 
              learning models to provide deeper analytics, predictive modeling, and automated 
              reporting systems.
            </CardDescription>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Users className="mr-2" /> AI Training and Workshops
            </CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription>
              Empower your team with AI knowledge. We offer customized training programs and 
              workshops to help your staff understand and leverage AI technologies effectively 
              in their roles.
            </CardDescription>
          </CardContent>
        </Card>
      </div>

      <section className="mt-12 text-center">
        <h2 className="text-2xl font-semibold mb-4">Our Approach</h2>
        <p className="text-lg mb-4">
          At AI Consultancy, we follow a systematic approach to ensure the success of your AI initiatives:
        </p>
        <ol className="list-decimal list-inside space-y-2 text-left max-w-2xl mx-auto">
          <li>Initial Consultation: Understanding your business needs and challenges</li>
          <li>AI Readiness Assessment: Evaluating your current infrastructure and data</li>
          <li>Strategy Development: Creating a tailored AI implementation plan</li>
          <li>Proof of Concept: Demonstrating value with small-scale implementations</li>
          <li>Full-Scale Development: Building and integrating AI solutions</li>
          <li>Training and Support: Ensuring your team can effectively use and maintain the AI systems</li>
          <li>Continuous Optimization: Monitoring performance and making ongoing improvements</li>
        </ol>
      </section>
    </div>
  );
}