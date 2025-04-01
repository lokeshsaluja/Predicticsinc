import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function About() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-8">About Predictics Inc.</h1>
      
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
        <p className="text-lg mb-4">
          At Predictics Inc., we're dedicated to helping large enterprises unlock the full potential of their data assets. 
          Our mission is to transform complex data challenges into strategic business advantages through innovative AI solutions, 
          advanced analytics, and data engineering expertise. We bridge the gap between cutting-edge technology and practical 
          business applications to deliver measurable, long-term value for our clients.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Our Expertise</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Enterprise AI Solutions</CardTitle>
            </CardHeader>
            <CardContent>
              <p>We design and implement scalable, production-grade AI systems tailored to enterprise requirements, 
              with a focus on enhancing decision-making processes and operational efficiency.</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Advanced Analytics</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Our team excels in turning complex datasets into actionable insights through statistical modeling, 
              predictive analytics, and machine learning techniques customized for each client's unique needs.</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Data Engineering</CardTitle>
            </CardHeader>
            <CardContent>
              <p>We architect robust data infrastructures that form the foundation for advanced analytics and AI initiatives, 
              ensuring data quality, integration, and accessibility across the enterprise.</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Strategic Advisory</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Our consultants provide expert guidance on data strategy, technology selection, and organizational 
              transformation to help enterprises navigate their AI and analytics journey successfully.</p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="mb-12 bg-muted p-8 rounded-lg">
        <h2 className="text-2xl font-semibold mb-4">Our Clients</h2>
        <p className="text-lg mb-6">
          We partner with industry leaders across diverse sectors, helping them solve their most complex data challenges. 
          Our client portfolio includes Fortune 500 companies and large organizations in:
        </p>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          <div className="bg-background p-4 rounded-md text-center">
            <h3 className="font-medium">Healthcare</h3>
            <p className="text-sm text-muted-foreground">Predictive patient care, operational optimization</p>
          </div>
          <div className="bg-background p-4 rounded-md text-center">
            <h3 className="font-medium">Consumer Packaged Goods</h3>
            <p className="text-sm text-muted-foreground">Supply chain intelligence, demand forecasting</p>
          </div>
          <div className="bg-background p-4 rounded-md text-center">
            <h3 className="font-medium">Electronics</h3>
            <p className="text-sm text-muted-foreground">Manufacturing analytics, quality control</p>
          </div>
          <div className="bg-background p-4 rounded-md text-center">
            <h3 className="font-medium">Mining</h3>
            <p className="text-sm text-muted-foreground">Operational efficiency, predictive maintenance</p>
          </div>
          <div className="bg-background p-4 rounded-md text-center">
            <h3 className="font-medium">P&C Insurance</h3>
            <p className="text-sm text-muted-foreground">Risk modeling, claims analytics</p>
          </div>
          <div className="bg-background p-4 rounded-md text-center">
            <h3 className="font-medium">Government & Non-Profits</h3>
            <p className="text-sm text-muted-foreground">Program effectiveness, resource optimization</p>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Our Leadership Team</h2>
        <p className="text-lg mb-6">
          Our leadership team combines deep technical expertise with extensive industry experience to deliver solutions 
          that address the most challenging business problems.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card>
            <CardContent className="flex flex-col items-center pt-6">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold">Executive Leadership</h3>
              <p className="text-sm text-center mt-2">With backgrounds from Fortune 500 technology companies and leading research institutions, our executives bring decades of experience in enterprise AI and data solutions.</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="flex flex-col items-center pt-6">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold">Technical Leadership</h3>
              <p className="text-sm text-center mt-2">Our technical leaders are pioneers in data science, machine learning, and software engineering with advanced degrees and proven industry expertise.</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="flex flex-col items-center pt-6">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold">Industry Advisors</h3>
              <p className="text-sm text-center mt-2">Former executives and thought leaders from key industries provide strategic guidance to ensure our solutions address real-world business challenges.</p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Our Approach</h2>
        <p className="text-lg mb-4">
          Predictics Inc. delivers value through a proven methodology that emphasizes collaboration, 
          domain expertise, and a focus on business outcomes:
        </p>
        <ol className="list-decimal list-inside space-y-2 mb-4">
          <li><span className="font-medium">Discovery & Assessment</span> - Thorough analysis of your data landscape, business objectives, and current capabilities</li>
          <li><span className="font-medium">Strategic Roadmap</span> - Development of a customized plan aligned with your business priorities</li>
          <li><span className="font-medium">Solution Design</span> - Architecture and design of robust, scalable data and AI solutions</li>
          <li><span className="font-medium">Implementation</span> - Expert delivery with rigorous quality control and knowledge transfer</li>
          <li><span className="font-medium">Measurement & Optimization</span> - Continuous refinement to maximize ROI and business impact</li>
        </ol>
        <p className="text-lg mt-6">
          By combining our technical expertise with deep industry knowledge, we ensure that our solutions 
          drive tangible business results and sustainable competitive advantage for our clients.
        </p>
      </section>
    </div>
  );
}