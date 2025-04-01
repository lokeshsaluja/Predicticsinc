"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { useToast } from "@/hooks/use-toast"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Building2, Mail, Phone, Clock, ArrowRight } from "lucide-react"

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
  message: z.string().min(10, {
    message: "Message must be at least 10 characters.",
  }),
})

type FormData = z.infer<typeof formSchema>;

export default function ContactPage() {
  const { toast } = useToast()

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
      message: "",
    },
  })

  async function onSubmit(data: FormData) {
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        toast({
          title: "Message Sent",
          description: "Thank you for your inquiry. We'll be in touch shortly!",
        })
        form.reset();
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "There was a problem sending your message. Please try again.",
        variant: "destructive",
      })
    }
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-center mb-12">Contact Us</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle>Get in Touch</CardTitle>
            <CardDescription>
              Fill out the form below to discuss how Predictics Inc. can help your organization harness the power of data and AI.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Full Name</FormLabel>
                        <FormControl>
                          <Input placeholder="John Smith" {...field} />
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
                          <Input placeholder="john.smith@example.com" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <FormField
                  control={form.control}
                  name="company"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Company Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Company Inc." {...field} />
                      </FormControl>
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
                          className="min-h-[120px]" 
                          {...field} 
                        />
                      </FormControl>
                      <FormDescription>
                        Please provide details about your project, goals, or any specific requirements.
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit" className="w-full md:w-auto">
                  Submit Inquiry <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </form>
            </Form>
          </CardContent>
        </Card>
        
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Mail className="mr-2 h-5 w-5" /> Email
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm">
                <a href="mailto:getintouch@predictincinc.com" className="text-primary hover:underline">
                  getintouch@predictincinc.com
                </a>
              </p>
              <p className="text-sm text-muted-foreground mt-2">
                For general inquiries and information
              </p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Building2 className="mr-2 h-5 w-5" /> Headquarters
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm">
                123 Enterprise Drive<br />
                Suite 500<br />
                San Francisco, CA 94105
              </p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Phone className="mr-2 h-5 w-5" /> Phone
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm">
                <a href="tel:+18881234567" className="text-primary hover:underline">
                  +1 (888) 123-4567
                </a>
              </p>
              <p className="text-sm text-muted-foreground mt-2">
                Monday-Friday, 9am-6pm PT
              </p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Clock className="mr-2 h-5 w-5" /> Response Time
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm">
                We aim to respond to all inquiries within 24 business hours.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
      
      <div className="bg-muted p-8 rounded-lg text-center mb-8">
        <h2 className="text-2xl font-bold mb-4">Ready to transform your data strategy?</h2>
        <p className="max-w-2xl mx-auto mb-4">
          Our team of enterprise data and AI experts is ready to help your organization unlock the full potential of your data assets. 
          Schedule a consultation today to discuss your specific needs and how Predictics Inc. can deliver custom solutions tailored to your objectives.
        </p>
      </div>
    </div>
  )
}