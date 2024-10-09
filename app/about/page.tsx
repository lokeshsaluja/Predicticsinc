import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function About() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-8">About AI Consultancy</h1>
      
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
        <p className="text-lg mb-4">
          At AI Consultancy, our mission is to empower businesses with cutting-edge AI solutions, 
          focusing on Generative AI and Large Language Models (LLMs). We bridge the gap between 
          advanced AI technologies and practical business applications, driving innovation and growth 
          for our clients.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Our Expertise</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Generative AI</CardTitle>
            </CardHeader>
            <CardContent>
              <p>We specialize in implementing state-of-the-art generative AI models to create 
              innovative solutions across various industries.</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Large Language Models (LLMs)</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Our team has deep expertise in leveraging LLMs for natural language processing, 
              content generation, and advanced analytics.</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>AI Strategy</CardTitle>
            </CardHeader>
            <CardContent>
              <p>We help businesses develop comprehensive AI strategies aligned with their goals 
              and market positioning.</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Implementation & Integration</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Our technical team ensures smooth implementation and integration of AI solutions 
              into existing business processes and systems.</p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Our Team</h2>
        <p className="text-lg mb-4">
          Our team consists of AI researchers, data scientists, software engineers, and business 
          strategists. With diverse backgrounds and extensive experience, we bring a holistic 
          approach to AI consulting.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card>
            <CardContent className="flex flex-col items-center pt-6">
              <Image src="https://source.unsplash.com/random/200x200?face" alt="Team Member" width={100} height={100} className="rounded-full mb-4" />
              <h3 className="text-lg font-semibold">Dr. Emily Chen</h3>
              <p className="text-sm text-muted-foreground">AI Research Lead</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="flex flex-col items-center pt-6">
              <Image src="https://source.unsplash.com/random/201x201?face" alt="Team Member" width={100} height={100} className="rounded-full mb-4" />
              <h3 className="text-lg font-semibold">Michael Rodriguez</h3>
              <p className="text-sm text-muted-foreground">Senior Data Scientist</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="flex flex-col items-center pt-6">
              <Image src="https://source.unsplash.com/random/202x202?face" alt="Team Member" width={100} height={100} className="rounded-full mb-4" />
              <h3 className="text-lg font-semibold">Sarah Thompson</h3>
              <p className="text-sm text-muted-foreground">AI Strategy Consultant</p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Our Approach</h2>
        <p className="text-lg mb-4">
          We believe in a collaborative, client-centric approach. Our process involves:
        </p>
        <ol className="list-decimal list-inside space-y-2 mb-4">
          <li>In-depth analysis of your business needs and challenges</li>
          <li>Custom AI strategy development</li>
          <li>Proof-of-concept and prototyping</li>
          <li>Full-scale implementation and integration</li>
          <li>Ongoing support and optimization</li>
        </ol>
        <p className="text-lg">
          By combining our technical expertise with a deep understanding of business processes, 
          we ensure that our AI solutions drive tangible results and long-term value for our clients.
        </p>
      </section>
    </div>
  );
}