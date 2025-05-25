"use client";

import React, { useState } from 'react';
import type { Testimonial, TestimonialCategory } from '@/lib/types';
import { SuccessStoryCard } from './success-story-card';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { getAllTestimonials } from '@/lib/mock-data';

const testimonialCategories: TestimonialCategory[] = ["All", "Executive Certification Programs", "Online Degrees"];

export function SuccessStoriesSection() {
  const [testimonials, setTestimonials] = useState<Testimonial[]>(getAllTestimonials());
  const [activeCategory, setActiveCategory] = useState<TestimonialCategory>("All");

  const handleFilter = (category: TestimonialCategory) => {
    setActiveCategory(category);
    if (category === "All") {
      setTestimonials(getAllTestimonials());
    } else {
      setTestimonials(getAllTestimonials().filter(t => t.category === category));
    }
  };

  return (
    <section className="py-12 md:py-16 animate-fade-in-up"> {/* Removed bg-background */}
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-4 text-foreground">
          Success Stories from Jaro Education
        </h2>
        <p className="text-center text-muted-foreground mb-10">
          Hear from our learners who transformed their careers with us.
        </p>

        <div className="flex justify-center space-x-2 mb-10">
          {testimonialCategories.map((category) => (
            <Button
              key={category}
              variant={activeCategory === category ? "default" : "outline"}
              onClick={() => handleFilter(category)}
              className={cn(
                "rounded-full px-6 py-2 transition-colors duration-200",
                activeCategory === category
                  ? "bg-primary-gradient text-primary-foreground"
                  : "bg-card text-card-foreground hover:bg-destructive-gradient hover:text-destructive-foreground hover:border-transparent"
              )}
            >
              {category}
            </Button>
          ))}
        </div>

        {testimonials.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial) => (
              <SuccessStoryCard key={testimonial.id} testimonial={testimonial} />
            ))}
          </div>
        ) : (
          <p className="text-center text-muted-foreground">No success stories found for this category.</p>
        )}
      </div>
    </section>
  );
}
