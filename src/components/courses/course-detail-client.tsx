"use client";

import Image from 'next/image';
import type { Course, Instructor, Review } from '@/lib/types';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Star, BookOpen, Users, Tag, Clock, BarChart, CheckCircle, MessageSquare } from 'lucide-react';
import { Separator } from '@/components/ui/separator';
import { format } from 'date-fns';

interface CourseDetailClientProps {
  course: Course | undefined;
  instructor: Instructor | undefined;
  reviews: Review[];
}

export function CourseDetailClient({ course, instructor, reviews }: CourseDetailClientProps) {
  if (!course) {
    return (
      <div className="container py-12 text-center">
        <h1 className="text-2xl font-semibold">Course not found</h1>
        <p className="text-muted-foreground">The course you are looking for does not exist or has been moved.</p>
      </div>
    );
  }

  return (
    <div className="container py-8">
      <div className="grid md:grid-cols-3 gap-8">
        <div className="md:col-span-2">
          <Card className="overflow-hidden shadow-lg">
            <CardHeader className="p-0 relative">
              <Image
                src={course.imageUrl}
                alt={course.title}
                width={800}
                height={450}
                className="w-full h-auto md:h-[400px] object-cover"
                data-ai-hint={course.dataAiHint || "education learning"}
                priority
              />
            </CardHeader>
            <CardContent className="p-6">
              <Badge variant="secondary" className="mb-2">{course.category}</Badge>
              <h1 className="text-3xl font-bold mb-3">{course.title}</h1>
              <p className="text-muted-foreground mb-6">{course.description}</p>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-6 text-sm">
                <div className="flex items-center space-x-2">
                  <Star className="w-5 h-5 text-yellow-500" />
                  <span>{course.rating.toFixed(1)} Rating</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Users className="w-5 h-5 bg-primary-gradient text-transparent bg-clip-text" />
                  <span>{course.studentsEnrolled} Students</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="w-5 h-5 bg-primary-gradient text-transparent bg-clip-text" />
                  <span>{course.duration}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <BarChart className="w-5 h-5 bg-primary-gradient text-transparent bg-clip-text" />
                  <span>{course.level}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <BookOpen className="w-5 h-5 bg-primary-gradient text-transparent bg-clip-text" />
                  <span>{course.learningOutcomes.length} Outcomes</span>
                </div>
              </div>

              <Separator className="my-6" />

              <h2 className="text-2xl font-semibold mb-4">What you'll learn</h2>
              <ul className="space-y-3 mb-6">
                {course.learningOutcomes.map((outcome, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1 shrink-0" />
                    <span>{outcome}</span>
                  </li>
                ))}
              </ul>
              
              {course.content && (
                <>
                  <Separator className="my-6" />
                  <h2 className="text-2xl font-semibold mb-4">Course Content</h2>
                  <div className="prose max-w-none dark:prose-invert">
                     {/* This is a placeholder. Actual course content rendering would be more complex. */}
                    <p>{course.content}</p>
                  </div>
                </>
              )}

            </CardContent>
          </Card>
        </div>

        <div className="space-y-6">
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl bg-primary-gradient text-transparent bg-clip-text">
                {course.price === 0 ? 'Free Course' : `₹${course.price.toFixed(2)}`}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Button size="lg" className="w-full mb-3">Enroll Now</Button>
              <Button size="lg" variant="outline" className="w-full">Add to Wishlist</Button>
              <p className="text-xs text-muted-foreground mt-3 text-center">30-Day Money-Back Guarantee</p>
            </CardContent>
          </Card>

          {instructor && (
            <Card>
              <CardHeader>
                <CardTitle className="text-xl">About the Instructor</CardTitle>
              </CardHeader>
              <CardContent className="text-sm">
                <div className="flex items-center space-x-4 mb-4">
                  <Avatar className="h-16 w-16">
                    <AvatarImage src={instructor.avatarUrl} alt={instructor.name} data-ai-hint="person teacher" />
                    <AvatarFallback>{instructor.name.substring(0, 2).toUpperCase()}</AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="font-semibold">{instructor.name}</h3>
                    <p className="text-xs text-muted-foreground">Instructor</p>
                  </div>
                </div>
                <p className="text-muted-foreground">{instructor.bio}</p>
              </CardContent>
            </Card>
          )}
        </div>
      </div>

      <Separator className="my-8" />

      <div className="mt-8">
        <h2 className="text-2xl font-semibold mb-6 flex items-center">
          <MessageSquare className="w-7 h-7 mr-3 bg-primary-gradient text-transparent bg-clip-text" /> Student Reviews ({reviews.length})
        </h2>
        {reviews.length > 0 ? (
          <div className="space-y-6">
            {reviews.map(review => (
              <Card key={review.id} className="bg-secondary/30">
                <CardContent className="p-6">
                  <div className="flex items-center mb-2">
                    <Avatar className="h-10 w-10 mr-3">
                      {/* In a real app, user avatar would be fetched */}
                      <AvatarImage src={`https://placehold.co/40x40.png`} alt={review.userName} data-ai-hint="student avatar" />
                      <AvatarFallback>{review.userName.substring(0,1)}</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-semibold">{review.userName}</p>
                      <p className="text-xs text-muted-foreground">{format(new Date(review.createdAt), "MMMM d, yyyy")}</p>
                    </div>
                    <div className="ml-auto flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className={`w-4 h-4 ${i < review.rating ? 'text-yellow-500 fill-yellow-500' : 'text-muted-foreground'}`} />
                      ))}
                    </div>
                  </div>
                  <p className="text-sm text-foreground">{review.comment}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        ) : (
          <p className="text-muted-foreground">No reviews yet for this course.</p>
        )}
      </div>
    </div>
  );
}
