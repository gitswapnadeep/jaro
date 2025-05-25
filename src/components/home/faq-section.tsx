"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardContent } from "@/components/ui/card"; 

interface FaqItem {
  id: string;
  question: string;
  answer: string;
  keywords?: string;
}

interface FaqSectionProps {
  faqItems: FaqItem[];
}

export function FaqSection({ faqItems }: FaqSectionProps) {
  if (!faqItems || faqItems.length === 0) {
    return null;
  }

  return (
    <section className="py-12 md:py-16 animate-fade-in-up">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10 tracking-tight">
          Frequently Asked Questions
        </h2>
        <Card className="shadow-lg bg-card/50 backdrop-blur-lg">
          <CardContent className="p-6">
            <Accordion type="single" collapsible className="w-full">
              {faqItems.map((faq) => (
                <AccordionItem value={faq.id} key={faq.id}>
                  <AccordionTrigger className="text-left hover:text-primary text-card-foreground">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
