import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Database, LineChart, Brain, ArrowRight, Server, Shield, Code, Workflow, Users, Compass } from 'lucide-react';

export default function Services() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-12">Our Enterprise Services</h1>
      
      <section className="mb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div>
            <h2 className="text-3xl font-bold mb-4">Enterprise-Grade AI & Data Solutions</h2>
            <p className="text-lg mb-4">
              At Predictics Inc., we deliver comprehensive AI and data solutions designed specifically for large enterprises 
              facing complex challenges. Our solutions are built to scale, integrate with your existing infrastructure, 
              and provide the security and reliability required by leading organizations.
            </p>
            <p className="text-lg">
              Every service we offer combines deep technical expertise, industry knowledge, and a focus on 
              delivering measurable business outcomes.
            </p>
          </div>
          <div className="flex items-center justify-center">
            <div className="w-full max-w-md p-6 bg-primary/10 rounded-lg">
              <h3 className="text-xl font-semibold mb-4 text-primary">Why Enterprise Clients Choose Us</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="mr-2 mt-1 text-primary"><Shield className="h-5 w-5" /></div>
                  <span>Enterprise-grade security and compliance</span>
                </li>
                <li className="flex items-start">
                  <div className="mr-2 mt-1 text-primary"><Server className="h-5 w-5" /></div>
                  <span>Scalable solutions for complex organizations</span>
                </li>
                <li className="flex items-start">
                  <div className="mr-2 mt-1 text-primary"><Compass className="h-5 w-5" /></div>
                  <span>Industry-specific expertise and benchmarks</span>
                </li>
                <li className="flex items-start">
                  <div className="mr-2 mt-1 text-primary"><Users className="h-5 w-5" /></div>
                  <span>Dedicated teams with enterprise experience</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-center mb-8">Core Service Offerings</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-xl font-semibold">Data Strategy & Architecture</CardTitle>
              <Database className="h-6 w-6 text-primary" />
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base mb-4">
                Develop a comprehensive data strategy and robust architecture tailored to your enterprise needs.
              </CardDescription>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start text-sm">
                  <div className="mr-2 mt-1 text-primary"><ArrowRight className="h-3 w-3" /></div>
                  <span>Enterprise Data Strategy Development</span>
                </li>
                <li className="flex items-start text-sm">
                  <div className="mr-2 mt-1 text-primary"><ArrowRight className="h-3 w-3" /></div>
                  <span>Data Architecture Design & Optimization</span>
                </li>
                <li className="flex items-start text-sm">
                  <div className="mr-2 mt-1 text-primary"><ArrowRight className="h-3 w-3" /></div>
                  <span>Data Governance & Compliance Frameworks</span>
                </li>
                <li className="flex items-start text-sm">
                  <div className="mr-2 mt-1 text-primary"><ArrowRight className="h-3 w-3" /></div>
                  <span>Data Quality & Master Data Management</span>
                </li>
              </ul>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-xl font-semibold">Advanced Analytics</CardTitle>
              <LineChart className="h-6 w-6 text-primary" />
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base mb-4">
                Transform complex data into actionable insights with customized analytics solutions.
              </CardDescription>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start text-sm">
                  <div className="mr-2 mt-1 text-primary"><ArrowRight className="h-3 w-3" /></div>
                  <span>Predictive Analytics & Forecasting</span>
                </li>
                <li className="flex items-start text-sm">
                  <div className="mr-2 mt-1 text-primary"><ArrowRight className="h-3 w-3" /></div>
                  <span>Business Intelligence & Reporting</span>
                </li>
                <li className="flex items-start text-sm">
                  <div className="mr-2 mt-1 text-primary"><ArrowRight className="h-3 w-3" /></div>
                  <span>Customer Analytics & Segmentation</span>
                </li>
                <li className="flex items-start text-sm">
                  <div className="mr-2 mt-1 text-primary"><ArrowRight className="h-3 w-3" /></div>
                  <span>Financial & Operational Analytics</span>
                </li>
              </ul>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-xl font-semibold">AI & Machine Learning</CardTitle>
              <Brain className="h-6 w-6 text-primary" />
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base mb-4">
                Design and implement custom AI solutions that drive business innovation and efficiency.
              </CardDescription>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start text-sm">
                  <div className="mr-2 mt-1 text-primary"><ArrowRight className="h-3 w-3" /></div>
                  <span>Machine Learning Model Development</span>
                </li>
                <li className="flex items-start text-sm">
                  <div className="mr-2 mt-1 text-primary"><ArrowRight className="h-3 w-3" /></div>
                  <span>Natural Language Processing (NLP)</span>
                </li>
                <li className="flex items-start text-sm">
                  <div className="mr-2 mt-1 text-primary"><ArrowRight className="h-3 w-3" /></div>
                  <span>Computer Vision Applications</span>
                </li>
                <li className="flex items-start text-sm">
                  <div className="mr-2 mt-1 text-primary"><ArrowRight className="h-3 w-3" /></div>
                  <span>MLOps & AI Infrastructure</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>
      
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-center mb-8">Specialized Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center text-xl">
                <Code className="mr-2 h-5 w-5" /> Data Engineering & Integration
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4">
                We design, build, and maintain robust data pipelines and integration solutions that ensure reliable 
                data flow across your enterprise systems.
              </p>
              <ul className="space-y-2 mb-4">
                <li className="flex items-start text-sm">
                  <div className="mr-2 mt-1 text-primary"><ArrowRight className="h-3 w-3" /></div>
                  <span>ETL/ELT Pipeline Development</span>
                </li>
                <li className="flex items-start text-sm">
                  <div className="mr-2 mt-1 text-primary"><ArrowRight className="h-3 w-3" /></div>
                  <span>Real-time Data Processing</span>
                </li>
                <li className="flex items-start text-sm">
                  <div className="mr-2 mt-1 text-primary"><ArrowRight className="h-3 w-3" /></div>
                  <span>Data Warehouse & Lake Implementation</span>
                </li>
              </ul>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center text-xl">
                <Workflow className="mr-2 h-5 w-5" /> AI Strategy & Transformation
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4">
                Our strategic advisory services help enterprises develop comprehensive AI roadmaps and manage 
                organizational change for successful adoption.
              </p>
              <ul className="space-y-2 mb-4">
                <li className="flex items-start text-sm">
                  <div className="mr-2 mt-1 text-primary"><ArrowRight className="h-3 w-3" /></div>
                  <span>AI Opportunity Assessment</span>
                </li>
                <li className="flex items-start text-sm">
                  <div className="mr-2 mt-1 text-primary"><ArrowRight className="h-3 w-3" /></div>
                  <span>Strategic Roadmap Development</span>
                </li>
                <li className="flex items-start text-sm">
                  <div className="mr-2 mt-1 text-primary"><ArrowRight className="h-3 w-3" /></div>
                  <span>AI Change Management & Adoption</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>
      
      <section className="mb-16 bg-muted p-8 rounded-lg">
        <h2 className="text-2xl font-bold mb-6">Industry-Specific Solutions</h2>
        <p className="text-lg mb-6">
          We develop specialized AI and data solutions tailored to the unique needs and challenges of specific industries:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
          <div className="bg-background p-4 rounded-md">
            <h3 className="font-semibold mb-2">Healthcare & Life Sciences</h3>
            <p className="text-sm">Predictive patient analytics, clinical decision support, care optimization, medical image analysis</p>
          </div>
          <div className="bg-background p-4 rounded-md">
            <h3 className="font-semibold mb-2">Financial Services & Insurance</h3>
            <p className="text-sm">Risk modeling, fraud detection, claims processing automation, customer intelligence</p>
          </div>
          <div className="bg-background p-4 rounded-md">
            <h3 className="font-semibold mb-2">Consumer Products & Retail</h3>
            <p className="text-sm">Demand forecasting, inventory optimization, customer segmentation, personalization engines</p>
          </div>
          <div className="bg-background p-4 rounded-md">
            <h3 className="font-semibold mb-2">Manufacturing & Mining</h3>
            <p className="text-sm">Predictive maintenance, yield optimization, quality control, operational efficiency</p>
          </div>
          <div className="bg-background p-4 rounded-md">
            <h3 className="font-semibold mb-2">Government & Public Sector</h3>
            <p className="text-sm">Resource optimization, program effectiveness analysis, citizen service enhancements</p>
          </div>
          <div className="bg-background p-4 rounded-md">
            <h3 className="font-semibold mb-2">Technology & Electronics</h3>
            <p className="text-sm">Product intelligence, supply chain optimization, R&D analytics, competitive intelligence</p>
          </div>
        </div>
        <p className="text-lg font-medium text-center">
          Our industry-specific solutions incorporate best practices, benchmarks, and compliance requirements 
          relevant to your sector.
        </p>
      </section>
      
      <section className="text-center mb-8">
        <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Enterprise?</h2>
        <p className="text-xl mb-8 max-w-3xl mx-auto">
          Our team of experts is ready to help you unlock the full potential of your data assets and create 
          AI-driven competitive advantages.
        </p>
        <Button asChild size="lg">
          <Link href="/contact">Schedule a Consultation</Link>
        </Button>
      </section>
    </div>
  );
}