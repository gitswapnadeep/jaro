
"use client";

import type { Testimonial } from '@/lib/types';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Star } from 'lucide-react';
import { cn } from '@/lib/utils';
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';

interface SuccessStoryCardProps {
  testimonial: Testimonial;
}

const MAX_CHARS = 200; // Max characters to show before "Show more"

export function SuccessStoryCard({ testimonial }: SuccessStoryCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  const needsTruncation = testimonial.story.length > MAX_CHARS;

  return (
    <div
      className={cn(
        "bg-card text-card-foreground rounded-lg p-6 shadow-lg h-full flex flex-col transition-all duration-500 ease-out hover:scale-105 hover:shadow-2xl",
        testimonial.accentColor && `border-r-4 ${testimonial.accentColor}`
      )}
    >
      <div className="flex items-center mb-3">
        <Avatar className="h-10 w-10 mr-3">
          <AvatarImage src={testimonial.avatarUrl} alt={testimonial.userName} data-ai-hint="person student"/>
          <AvatarFallback>{testimonial.avatarFallback}</AvatarFallback>
        </Avatar>
        <p className="font-semibold text-foreground">{testimonial.userName}</p>
      </div>
      <div className="flex items-center mb-3">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={cn(
              "w-5 h-5",
              i < testimonial.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300 dark:text-gray-600"
            )}
          />
        ))}
      </div>
      <p 
        className={cn(
          "text-sm text-muted-foreground flex-grow mb-3 overflow-hidden transition-[max-height] duration-700 ease-in-out", // Changed duration-500 to duration-700
          isExpanded ? "max-h-96" : (needsTruncation ? "max-h-20" : "")
        )}
      >
        {testimonial.story}
      </p>
      {needsTruncation && (
        <Button
          variant="link"
          className="text-primary p-0 h-auto self-start text-sm hover:underline"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          {isExpanded ? "Show less" : "Show more"}
        </Button>
      )}
    </div>
  );
}
