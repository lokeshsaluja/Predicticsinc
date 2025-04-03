"use client"

import React from 'react';
import Link from 'next/link';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ArrowRight, BarChart, Brain, Database, LineChart, TrendingUp } from 'lucide-react';
import ImagePlaceholder from '@/components/ui/image-placeholder';

export default function CaseStudiesPage() {
  const industries = [
    { id: 'healthcare', name: 'Healthcare' },
    { id: 'cpg', name: 'Consumer Packaged Goods' },
    { id: 'electronics', name: 'Electronics' },
    { id: 'mining', name: 'Mining' },
    { id: 'insurance', name: 'Insurance' },
    { id: 'government', name: 'Government' }
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Case Studies</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Discover how we've helped leading organizations across industries achieve remarkable results through data and AI.
        </p>
      </div>

      <Tabs defaultValue="healthcare" className="mb-16">
        <div className="flex justify-center mb-8">
          <TabsList className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2">
            {industries.map(industry => (
              <TabsTrigger 
                key={industry.id} 
                value={industry.id}
                className="px-4 py-2"
              >
                {industry.name}
              </TabsTrigger>
            ))}
          </TabsList>
        </div>

        <TabsContent value="healthcare" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="overflow-hidden">
              <div className="relative h-60 bg-muted">
                <ImagePlaceholder type="healthcare" className="h-full w-full" />
              </div>
              <CardHeader>
                <CardTitle>Predictive Analytics for Patient Outcomes</CardTitle>
                <CardDescription>Major Healthcare Network</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="mb-4">
                  We implemented a machine learning solution that predicts patient readmission risk, 
                  helping a leading healthcare network reduce readmissions by 18% and save $4.2M annually.
                </p>
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="bg-muted p-3 rounded-md">
                    <p className="text-sm font-medium">Readmission Reduction</p>
                    <p className="text-2xl font-bold text-primary">18%</p>
                  </div>
                  <div className="bg-muted p-3 rounded-md">
                    <p className="text-sm font-medium">Annual Savings</p>
                    <p className="text-2xl font-bold text-primary">$4.2M</p>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full" asChild>
                  <Link href="/case-studies/predictive-analytics-patient-outcomes">
                    View Full Case Study <ArrowRight className="h-4 w-4 ml-2" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>

            <Card className="overflow-hidden">
              <div className="relative h-60 bg-muted">
                <ImagePlaceholder type="healthcare-analytics" className="h-full w-full" />
              </div>
              <CardHeader>
                <CardTitle>Clinical Trial Optimization with AI</CardTitle>
                <CardDescription>Global Pharmaceutical Company</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="mb-4">
                  Our AI solution helped a pharmaceutical company optimize clinical trial site selection and 
                  patient recruitment, reducing trial duration by 23% and cutting costs by $7.5M per trial.
                </p>
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="bg-muted p-3 rounded-md">
                    <p className="text-sm font-medium">Trial Duration Reduction</p>
                    <p className="text-2xl font-bold text-primary">23%</p>
                  </div>
                  <div className="bg-muted p-3 rounded-md">
                    <p className="text-sm font-medium">Cost Savings Per Trial</p>
                    <p className="text-2xl font-bold text-primary">$7.5M</p>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full" asChild>
                  <Link href="/case-studies/clinical-trial-optimization">
                    View Full Case Study <ArrowRight className="h-4 w-4 ml-2" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="cpg" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="overflow-hidden">
              <div className="relative h-60 bg-muted">
                <ImagePlaceholder type="supply-chain" className="h-full w-full" />
              </div>
              <CardHeader>
                <CardTitle>AI-Powered Demand Forecasting</CardTitle>
                <CardDescription>Fortune 100 CPG Manufacturer</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="mb-4">
                  We developed an advanced demand forecasting system using machine learning, helping a major CPG company 
                  improve forecast accuracy by 32% and reduce inventory costs by $12M annually.
                </p>
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="bg-muted p-3 rounded-md">
                    <p className="text-sm font-medium">Forecast Accuracy Improvement</p>
                    <p className="text-2xl font-bold text-primary">32%</p>
                  </div>
                  <div className="bg-muted p-3 rounded-md">
                    <p className="text-sm font-medium">Annual Inventory Savings</p>
                    <p className="text-2xl font-bold text-primary">$12M</p>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full" asChild>
                  <Link href="/case-studies/ai-powered-demand-forecasting">
                    View Full Case Study <ArrowRight className="h-4 w-4 ml-2" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>

            <Card className="overflow-hidden">
              <div className="relative h-60 bg-muted">
                <ImagePlaceholder type="data-analytics" className="h-full w-full" />
              </div>
              <CardHeader>
                <CardTitle>Customer Segmentation & Personalization</CardTitle>
                <CardDescription>Leading Beverage Company</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="mb-4">
                  Our customer analytics platform helped a beverage giant create hyper-personalized marketing campaigns, 
                  resulting in a 27% increase in conversion rates and 15% growth in customer lifetime value.
                </p>
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="bg-muted p-3 rounded-md">
                    <p className="text-sm font-medium">Conversion Rate Increase</p>
                    <p className="text-2xl font-bold text-primary">27%</p>
                  </div>
                  <div className="bg-muted p-3 rounded-md">
                    <p className="text-sm font-medium">CLV Growth</p>
                    <p className="text-2xl font-bold text-primary">15%</p>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full" asChild>
                  <Link href="/case-studies/retail-customer-segmentation">
                    View Full Case Study <ArrowRight className="h-4 w-4 ml-2" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          </div>
        </TabsContent>
        
        {/* Other industry tabs with similar structure */}
        {["electronics", "mining", "insurance", "government"].map(industry => (
          <TabsContent key={industry} value={industry} className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="overflow-hidden">
                <div className="relative h-60 bg-muted">
                  <ImagePlaceholder 
                    type={industry as 'electronics' | 'mining' | 'insurance' | 'government'} 
                    className="h-full w-full" 
                  />
                </div>
                <CardHeader>
                  <CardTitle>AI & Data Transformation</CardTitle>
                  <CardDescription>Enterprise {industry.charAt(0).toUpperCase() + industry.slice(1)} Client</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="mb-4">
                    Our comprehensive data and AI solution helped a leading {industry} organization transform their 
                    operations, resulting in significant efficiency gains and cost savings.
                  </p>
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div className="bg-muted p-3 rounded-md">
                      <p className="text-sm font-medium">Efficiency Improvement</p>
                      <p className="text-2xl font-bold text-primary">25%+</p>
                    </div>
                    <div className="bg-muted p-3 rounded-md">
                      <p className="text-sm font-medium">ROI</p>
                      <p className="text-2xl font-bold text-primary">3.8x</p>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full" asChild>
                    <Link href={`/case-studies/ai-data-transformation-${industry}`}>
                      View Full Case Study <ArrowRight className="h-4 w-4 ml-2" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>

              <Card className="overflow-hidden">
                <div className="relative h-60 bg-muted">
                  {industry === 'electronics' && <ImagePlaceholder type="data-analytics" className="h-full w-full" />}
                  {industry === 'mining' && <ImagePlaceholder type="data-analytics" className="h-full w-full" />}
                  {industry === 'insurance' && <ImagePlaceholder type="data-analytics" className="h-full w-full" />}
                  {industry === 'government' && <ImagePlaceholder type="data-analytics" className="h-full w-full" />}
                </div>
                <CardHeader>
                  <CardTitle>Advanced Analytics Implementation</CardTitle>
                  <CardDescription>Major {industry.charAt(0).toUpperCase() + industry.slice(1)} Enterprise</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="mb-4">
                    We developed a custom analytics solution tailored to the unique needs of this {industry} client, 
                    enabling data-driven decision making across their organization.
                  </p>
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div className="bg-muted p-3 rounded-md">
                      <p className="text-sm font-medium">Decision Time Reduction</p>
                      <p className="text-2xl font-bold text-primary">40%</p>
                    </div>
                    <div className="bg-muted p-3 rounded-md">
                      <p className="text-sm font-medium">Annual Value Created</p>
                      <p className="text-2xl font-bold text-primary">$8M+</p>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full" asChild>
                    <Link href={`/case-studies/advanced-analytics-implementation-${industry}`}>
                      View Full Case Study <ArrowRight className="h-4 w-4 ml-2" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </TabsContent>
        ))}
      </Tabs>

      <section className="bg-muted p-8 rounded-lg mb-16">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold mb-4">Results That Matter</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Across industries, our clients achieve exceptional returns on their data and AI investments.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          <Card className="bg-card">
            <CardContent className="pt-6">
              <div className="text-center">
                <TrendingUp className="h-10 w-10 text-primary mb-2 mx-auto" />
                <h3 className="text-4xl font-bold text-primary">30%+</h3>
                <p className="text-sm">Average Efficiency Gain</p>
              </div>
            </CardContent>
          </Card>
          
          <Card className="bg-card">
            <CardContent className="pt-6">
              <div className="text-center">
                <BarChart className="h-10 w-10 text-primary mb-2 mx-auto" />
                <h3 className="text-4xl font-bold text-primary">3.5x</h3>
                <p className="text-sm">Average ROI</p>
              </div>
            </CardContent>
          </Card>
          
          <Card className="bg-card">
            <CardContent className="pt-6">
              <div className="text-center">
                <Database className="h-10 w-10 text-primary mb-2 mx-auto" />
                <h3 className="text-4xl font-bold text-primary">45%</h3>
                <p className="text-sm">Data Quality Improvement</p>
              </div>
            </CardContent>
          </Card>
          
          <Card className="bg-card">
            <CardContent className="pt-6">
              <div className="text-center">
                <Brain className="h-10 w-10 text-primary mb-2 mx-auto" />
                <h3 className="text-4xl font-bold text-primary">85%</h3>
                <p className="text-sm">AI Adoption Success Rate</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="text-center mb-16">
        <h2 className="text-3xl font-bold mb-4">Ready to Achieve Similar Results?</h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-6">
          Let's discuss how our enterprise AI and data solutions can drive measurable business impact for your organization.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" asChild>
            <Link href="/contact">
              Schedule a Consultation <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <Link href="/services">
              Explore Our Services
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
