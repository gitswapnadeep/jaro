"use client";

import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export function HeroSection() {
  return (
    <section className="py-24 md:py-36 bg-primary-gradient">
      <div className="container mx-auto md:flex md:items-center md:gap-12">
        {/* Text Content Column */}
        <div className="md:w-1/2 text-center md:text-left mb-12 md:mb-0">
          <h1 className="font-signika-negative text-4xl md:text-5xl lg:text-6xl font-semibold mb-6 tracking-tight text-primary-foreground">
            Unlock Your Potential with Jaro Education
          </h1>
          <p className="text-lg md:text-xl text-primary-foreground/90 mb-10 max-w-3xl mx-auto md:mx-0 font-normal">
            Discover a world of knowledge with expert-led courses designed to help you grow, achieve your goals, and embark on a journey of lifelong learning.
          </p>
          <Button
            asChild
            size="lg"
            className="group bg-accent text-accent-foreground hover:bg-accent/90 shadow-lg transform hover:scale-105 transition-transform duration-300"
          >
            <Link href="/#all-courses">
              Explore Courses
              <ArrowRight className="ml-2 h-5 w-5 text-accent-foreground transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>
        {/* Image/Art Column */}
        <div className="md:w-1/2">
          <Image
            src="https://img.freepik.com/free-photo/3d-student-graduation-cap-books-stack_107791-15667.jpg"
            alt="Stack of books with a graduation cap, pencil, and eraser"
            width={600}
            height={450}
            className="rounded-lg shadow-xl mx-auto"
            data-ai-hint="education abstract"
          />
        </div>
      </div>
    </section>
  );
}
