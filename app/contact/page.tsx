"use client"

import { useState } from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { useToast } from "@/hooks/use-toast"
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Building2, Mail, Phone, Clock, ArrowRight, Globe, MapPin, CalendarClock, Users, CheckCircle, Loader2 } from "lucide-react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import ImagePlaceholder from "@/components/ui/image-placeholder"

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  company: z.string().min(2, {
    message: "Company name must be at least 2 characters.",
  }),
  industry: z.string().optional(),
  service: z.string().optional(),
  message: z.string().min(10, {
    message: "Message must be at least 10 characters.",
  }),
})

type ContactFormData = z.infer<typeof formSchema>;

export const dynamic = 'force-dynamic';

export default function ContactPage() {
  const { toast } = useToast()
  const [isSubmitting, setIsSubmitting] = useState(false)

  const form = useForm<ContactFormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
      industry: "",
      service: "",
      message: "",
    },
  })

  async function onSubmit(data: ContactFormData) {
    if (isSubmitting) return;
    
    setIsSubmitting(true);
    console.log('Starting form submission with data:', data);
    
    try {
      // Prepare the data for submission
      const formData = {
        name: data.name.trim(),
        email: data.email.trim(),
        company: data.company.trim(),
        industry: data.industry || '',
        service: data.service || '',
        message: data.message.trim()
      };
      
      console.log('Sending request to API');
      
      // Make the API request
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      console.log('Response status:', response.status);
      
      // Check for non-OK response first
      if (!response.ok) {
        let errorMessage = `Server returned status ${response.status}`;
        
        try {
          const errorData = await response.json();
          console.log('Error response data:', errorData);
          if (errorData?.message) {
            errorMessage = errorData.message;
          }
        } catch (parseError) {
          console.error('Could not parse error response:', parseError);
        }
        
        throw new Error(errorMessage);
      }
      
      // Try to parse the successful response
      let result;
      try {
        const text = await response.text();
        console.log('Raw response text:', text);
        
        // Only try to parse as JSON if there's content
        if (text.trim()) {
          result = JSON.parse(text);
          console.log('Parsed response:', result);
        } else {
          console.warn('Empty response received');
          result = { success: true, message: 'Form submitted (no details returned)' };
        }
      } catch (parseError) {
        console.error('Failed to parse response:', parseError);
        throw new Error('Server returned an invalid response');
      }

      // Handle the successful response
      if (result?.success) {
        console.log('Form submitted successfully');
        toast({
          title: "Message Sent",
          description: "Thank you for your inquiry. We'll be in touch shortly!",
        });
        form.reset();
      } else {
        console.error('Server returned error:', result);
        throw new Error(result?.message || 'Unknown error occurred');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      
      // Display a user-friendly error message
      toast({
        title: "Error",
        description: error instanceof Error 
          ? error.message 
          : "There was a problem sending your message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div className="container mx-auto px-4 py-8 md:py-12 overflow-x-hidden">
      {/* Hero Section */}
      <div className="mb-12 md:mb-16 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-primary/5 rounded-lg -z-10"></div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 items-center">
          <div className="p-4 md:p-8">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/60">Let's Connect</h1>
            <p className="text-base md:text-xl mb-6 leading-relaxed">
              Partner with Predictics Inc. to unlock the full potential of your enterprise data. 
              Our team of experts is ready to help you address your most complex challenges with 
              innovative AI and data solutions.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-center">
                <CheckCircle className="text-primary mr-2 h-5 w-5" />
                <span className="text-sm font-medium">Enterprise Focus</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="text-primary mr-2 h-5 w-5" />
                <span className="text-sm font-medium">Industry Expertise</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="text-primary mr-2 h-5 w-5" />
                <span className="text-sm font-medium">Measurable Results</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="text-primary mr-2 h-5 w-5" />
                <span className="text-sm font-medium">Fast Response Time</span>
              </div>
            </div>
          </div>
          <div className="relative h-60 md:h-80 w-full flex items-center justify-center overflow-hidden rounded-lg">
            <div className="absolute inset-0 bg-primary/5">
              <ImagePlaceholder type="analytics" className="h-full w-full object-cover" />
            </div>
          </div>
        </div>
      </div>
      
      {/* Contact Form Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12 md:mb-16">
        <div className="lg:col-span-2">
          <div className="bg-card p-6 md:p-8 rounded-lg border shadow-sm">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6">Get in Touch</h2>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Full Name</FormLabel>
                        <FormControl>
                          <Input placeholder="John Smith" className="bg-background" {...field} disabled={isSubmitting} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input placeholder="john.smith@example.com" className="bg-background" {...field} disabled={isSubmitting} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                  <FormField
                    control={form.control}
                    name="company"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Company Name</FormLabel>
                        <FormControl>
                          <Input placeholder="Company Inc." className="bg-background" {...field} disabled={isSubmitting} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="industry"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Industry</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value} disabled={isSubmitting}>
                          <FormControl>
                            <SelectTrigger className="bg-background">
                              <SelectValue placeholder="Select an industry" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="healthcare">Healthcare</SelectItem>
                            <SelectItem value="cpg">Consumer Packaged Goods</SelectItem>
                            <SelectItem value="electronics">Electronics</SelectItem>
                            <SelectItem value="mining">Mining</SelectItem>
                            <SelectItem value="insurance">Insurance</SelectItem>
                            <SelectItem value="government">Government/Non-Profit</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                
                <FormField
                  control={form.control}
                  name="service"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Service of Interest</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value} disabled={isSubmitting}>
                        <FormControl>
                          <SelectTrigger className="bg-background">
                            <SelectValue placeholder="Select a service" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="data-strategy">Data Strategy & Architecture</SelectItem>
                          <SelectItem value="advanced-analytics">Advanced Analytics</SelectItem>
                          <SelectItem value="ai-machine-learning">AI & Machine Learning</SelectItem>
                          <SelectItem value="data-engineering">Data Engineering & Integration</SelectItem>
                          <SelectItem value="ai-strategy">AI Strategy & Transformation</SelectItem>
                          <SelectItem value="not-sure">Not Sure Yet</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>How Can We Help?</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="Tell us about your data and AI needs..." 
                          className="min-h-[150px] bg-background" 
                          {...field} 
                          disabled={isSubmitting}
                        />
                      </FormControl>
                      <FormDescription>
                        Please provide details about your project, goals, or any specific requirements.
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit" className="w-full md:w-auto" size="lg" disabled={isSubmitting}>
                  {isSubmitting ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Submitting...
                    </>
                  ) : (
                    <>
                      Submit Inquiry <ArrowRight className="ml-2 h-4 w-4" />
                    </>
                  )}
                </Button>
              </form>
            </Form>
          </div>
        </div>
        
        <div className="space-y-6">
          <Card className="bg-gradient-to-br from-background to-primary/5 hover:shadow-md transition-all duration-300">
            <CardHeader className="pb-2">
              <CardTitle className="flex items-center text-lg">
                <Mail className="mr-3 h-5 w-5 text-primary" /> Email Us
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-base font-medium">
                <a href="mailto:getintouch@predictincinc.com" className="text-primary hover:underline">
                  getintouch@predictincinc.com
                </a>
              </p>
              <p className="text-sm text-muted-foreground mt-2">
                For general inquiries and information
              </p>
            </CardContent>
          </Card>
          
          <Card className="bg-gradient-to-br from-background to-primary/5 hover:shadow-md transition-all duration-300">
            <CardHeader className="pb-2">
              <CardTitle className="flex items-center text-lg">
                <Building2 className="mr-3 h-5 w-5 text-primary" /> Headquarters
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-base font-medium">New York, NY</p>
              <p className="text-sm text-muted-foreground mt-2">
                Main office location
              </p>
            </CardContent>
          </Card>
          
          <Card className="bg-gradient-to-br from-background to-primary/5 hover:shadow-md transition-all duration-300">
            <CardHeader className="pb-2">
              <CardTitle className="flex items-center text-lg">
                <Globe className="mr-3 h-5 w-5 text-primary" /> Global Reach
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-base font-medium">Serving Clients Worldwide</p>
              <p className="text-sm text-muted-foreground mt-2">
                With remote capability and on-site consultation options
              </p>
            </CardContent>
          </Card>
          
          <Card className="bg-gradient-to-br from-background to-primary/5 hover:shadow-md transition-all duration-300">
            <CardHeader className="pb-2">
              <CardTitle className="flex items-center text-lg">
                <Clock className="mr-3 h-5 w-5 text-primary" /> Response Time
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-base font-medium">Within 24 Hours</p>
              <p className="text-sm text-muted-foreground mt-2">
                For all enterprise inquiries
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
      
      {/* Additional Info */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        <div className="p-6 bg-card rounded-lg border shadow-sm text-center hover:shadow-md transition-all duration-300">
          <Users className="h-8 w-8 mx-auto mb-4 text-primary" />
          <h3 className="font-bold text-lg mb-2">Enterprise Focus</h3>
          <p className="text-sm text-muted-foreground">
            Dedicated to serving large enterprise clients with complex data needs.
          </p>
        </div>
        
        <div className="p-6 bg-card rounded-lg border shadow-sm text-center hover:shadow-md transition-all duration-300">
          <MapPin className="h-8 w-8 mx-auto mb-4 text-primary" />
          <h3 className="font-bold text-lg mb-2">Industry Expertise</h3>
          <p className="text-sm text-muted-foreground">
            Specialized knowledge in healthcare, CPG, electronics, mining, and more.
          </p>
        </div>
        
        <div className="p-6 bg-card rounded-lg border shadow-sm text-center hover:shadow-md transition-all duration-300">
          <CalendarClock className="h-8 w-8 mx-auto mb-4 text-primary" />
          <h3 className="font-bold text-lg mb-2">Quick Turnaround</h3>
          <p className="text-sm text-muted-foreground">
            Efficient project planning and execution to meet your timelines.
          </p>
        </div>
        
        <div className="p-6 bg-card rounded-lg border shadow-sm text-center hover:shadow-md transition-all duration-300">
          <Phone className="h-8 w-8 mx-auto mb-4 text-primary" />
          <h3 className="font-bold text-lg mb-2">Dedicated Support</h3>
          <p className="text-sm text-muted-foreground">
            Personalized attention from our expert consultants throughout your project.
          </p>
        </div>
      </div>
    </div>
  );
}