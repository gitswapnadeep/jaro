
"use client";

import { APP_NAME } from '@/lib/constants';
import { ContactForm } from '@/components/support/contact-form';
import Image from 'next/image';
import { Phone, Mail, MapPin, HelpCircle, BookOpen, Clock, LocateFixed, Search, ListChecks, ShieldQuestion, LifeBuoy, Zap, Smile } from 'lucide-react'; 
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import React, { useState, useMemo } from 'react';
import { supportPageFaqData } from '@/lib/mock-data'; // Import supportPageFaqData

// Assuming the image is at src/public/support-illustration.png
// The path is relative from src/app/support/page.tsx to src/public/support-illustration.png
import supportIllustrationSrc from '../../public/support-illustration.png';


const quickChecksData = [
    "Have you tried refreshing the page?",
    "Is your internet connection stable?",
    "Have you tried clearing your browser cache and cookies?",
    "Are you using the latest version of your web browser?",
    "If you're experiencing a login issue, have you double-checked your email and password?",
];

export default function SupportPage() {
  const [searchTermFaq, setSearchTermFaq] = useState('');

  const filteredFaqData = useMemo(() => {
    if (!searchTermFaq) {
      return supportPageFaqData;
    }
    return supportPageFaqData.filter(
      (faq) =>
        faq.question.toLowerCase().includes(searchTermFaq.toLowerCase()) ||
        faq.answer.toLowerCase().includes(searchTermFaq.toLowerCase()) ||
        (faq.keywords && faq.keywords.toLowerCase().includes(searchTermFaq.toLowerCase()))
    );
  }, [searchTermFaq]);

  return (
    <div className="relative min-h-[calc(100vh-var(--header-height,80px))] text-foreground py-12 md:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto relative z-10">
        <div className="grid lg:grid-cols-12 lg:gap-x-16 items-start">
          {/* Left Column: Info and Illustration */}
          <div 
            className="lg:col-span-7 xl:col-span-6 mb-12 lg:mb-0 text-center lg:text-left animate-fade-in-up"
            style={{ animationDelay: '0ms' }}
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 tracking-tight text-foreground">
              Have Some Question?
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground mb-8 leading-relaxed">
              Thank you for your interest in our services. Please fill out the
              form below or e-mail us at{' '}
              <a
                href="mailto:swapnadeep8888@gmail.com"
                className="font-semibold text-primary hover:text-primary/90 underline"
              >
                swapnadeep8888@gmail.com
              </a>{' '}
              and we will get back to you promptly regarding your request.
            </p>
            <div className="mb-10">
              <Image
                src={supportIllustrationSrc} 
                alt="Support agent illustration"
                width={400}
                height={320}
                className="rounded-lg mx-auto lg:mx-0"
                placeholder="blur"
              />
            </div>
            <div className="space-y-6 mb-12">
              <h2 className="text-3xl font-semibold mb-4 text-center lg:text-left text-foreground">Get in touch</h2>
              <div className="flex items-center justify-center lg:justify-start space-x-3 text-muted-foreground">
                <Phone className="w-6 h-6 text-primary transition-transform duration-300 ease-in-out hover:scale-110" />
                <span>+91 123 456 7890</span>
              </div>
              <div className="flex items-center justify-center lg:justify-start space-x-3 text-muted-foreground">
                <Mail className="w-6 h-6 text-primary transition-transform duration-300 ease-in-out hover:scale-110" />
                <span>swapnadeep8888@gmail.com</span>
              </div>
              <div className="flex items-start justify-center lg:justify-start space-x-3 text-muted-foreground">
                <MapPin className="w-6 h-6 text-primary mt-1 shrink-0 transition-transform duration-300 ease-in-out hover:scale-110" />
                <span>Jaro Education, 123 Learning St, Education City, India</span>
              </div>
              <div className="flex items-center justify-center lg:justify-start space-x-3 text-muted-foreground">
                <Clock className="w-6 h-6 text-primary transition-transform duration-300 ease-in-out hover:scale-110" />
                <span>Mon - Fri: 9 AM - 6 PM IST</span>
              </div>
            </div>

            {/* Quick Checks Section */}
            <Card className="bg-card/70 backdrop-blur-md p-6 sm:p-8 rounded-xl shadow-xl">
              <CardHeader className="p-0 pb-4 mb-4 border-b border-border/50">
                <div className="flex items-center">
                  <ListChecks className="w-8 h-8 text-primary mr-3 transition-transform duration-300 ease-in-out hover:scale-110" />
                  <CardTitle className="text-2xl font-semibold text-card-foreground">Quick Checks</CardTitle>
                </div>
                <CardDescription className="text-muted-foreground mt-1">
                  Before contacting support, try these common solutions:
                </CardDescription>
              </CardHeader>
              <CardContent className="p-0">
                <ul className="space-y-3 text-muted-foreground">
                  {quickChecksData.map((check, index) => (
                    <li key={index} className="flex items-start">
                      <ShieldQuestion className="w-5 h-5 text-primary mr-3 mt-1 shrink-0" />
                      <span>{check}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Right Column: Contact Form and FAQ */}
          <div className="lg:col-span-5 xl:col-span-6 space-y-12">
            <div 
              className="animate-fade-in-up" 
              style={{ animationDelay: '150ms' }}
            >
              <ContactForm />
            </div>

            <div 
              className="bg-card/70 backdrop-blur-md p-6 sm:p-8 rounded-xl shadow-xl animate-fade-in-up"
              style={{ animationDelay: '300ms' }}
            >
              <div className="flex items-center mb-4">
                <BookOpen className="w-8 h-8 text-primary mr-3 transition-transform duration-300 ease-in-out hover:scale-110" />
                <h2 className="text-3xl font-semibold text-card-foreground">Frequently Asked Questions</h2>
              </div>
              <div className="relative mb-6">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <Input
                  type="text"
                  placeholder="Search FAQs..."
                  value={searchTermFaq}
                  onChange={(e) => setSearchTermFaq(e.target.value)}
                  className="pl-10 bg-background/30 border-input/50 focus:ring-primary focus:border-primary text-foreground placeholder:text-muted-foreground"
                />
              </div>
              {filteredFaqData.length > 0 ? (
                <Accordion type="single" collapsible className="w-full">
                  {filteredFaqData.map((faq) => (
                    <AccordionItem value={faq.id} key={faq.id}>
                      <AccordionTrigger className="text-card-foreground hover:text-primary text-left">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              ) : (
                <p className="text-muted-foreground text-center py-4">No FAQs found matching your search.</p>
              )}
            </div>
          </div>
        </div>
        
        {/* Google Map Section */}
        <div 
          className="mt-16 lg:mt-24 animate-fade-in-up"
          style={{ animationDelay: '450ms' }}
        >
          <div className="flex items-center mb-6">
            <LocateFixed className="w-8 h-8 text-primary mr-3 transition-transform duration-300 ease-in-out hover:scale-110" />
            <h2 className="text-3xl font-semibold text-foreground">Our Location</h2>
          </div>
          <p className="text-muted-foreground mb-6 leading-relaxed text-center lg:text-left">
            Come visit us at our main office in Education City. We're always happy to welcome prospective students and partners.
            The map below will help you find your way. If you have any trouble locating us, please don't hesitate to call.
          </p>
          <div className="aspect-w-16 aspect-h-9 rounded-xl overflow-hidden shadow-2xl border border-border">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d120639.38293576659!2d72.79796731067396!3d19.101901179605993!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c6306644edc1%3A0x5da4ed8f8d648c67!2sJaro%20Education!5e0!3m2!1sen!2sin!4v1678886400000!5m2!1sen!2sin"
              width="100%"
              height="450" 
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Jaro Education Location"
            ></iframe>
          </div>
        </div>

        {/* Commitment to Support Section */}
        <div 
          className="mt-16 lg:mt-24 text-center animate-fade-in-up"
          style={{ animationDelay: '600ms' }}
        >
          <h2 className="text-4xl font-bold mb-6 tracking-tight text-foreground">
            Our Commitment to Your Success
          </h2>
          <p className="text-lg text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
            At {APP_NAME}, we are deeply committed to providing you with an exceptional learning experience. Our dedicated support team is always here to assist you with any questions or challenges you may encounter on your educational journey. We strive for excellence in every interaction, ensuring you have the resources and help you need to thrive.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-card/70 backdrop-blur-md shadow-xl text-left transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
              <CardHeader>
                <div className="flex items-center mb-2">
                  <LifeBuoy className="w-10 h-10 text-primary mr-3" />
                  <CardTitle className="text-xl font-semibold">Comprehensive Assistance</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  From technical glitches to course queries, our extensive FAQs and knowledgeable support staff are here to provide clear, step-by-step guidance.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-card/70 backdrop-blur-md shadow-xl text-left transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
              <CardHeader>
                <div className="flex items-center mb-2">
                  <Zap className="w-10 h-10 text-primary mr-3" />
                  <CardTitle className="text-xl font-semibold">Swift Resolutions</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  We value your time. Our team is focused on providing prompt and effective solutions to get you back to learning as quickly as possible.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-card/70 backdrop-blur-md shadow-xl text-left transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
              <CardHeader>
                <div className="flex items-center mb-2">
                  <Smile className="w-10 h-10 text-primary mr-3" />
                  <CardTitle className="text-xl font-semibold">Student-Centric Approach</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Your feedback and learning experience are paramount. We continuously adapt and improve our support to better meet your needs and foster a positive environment.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}

    
