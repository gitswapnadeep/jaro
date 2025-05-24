
"use client";

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { recommendCourses, type RecommendCoursesInput, type RecommendCoursesOutput } from '@/ai/flows/recommend-courses';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { CourseCard } from '@/components/courses/course-card';
import { getCourseById, mockCourses } from '@/lib/mock-data'; // Assuming mockCourses has all courses
import type { Course } from '@/lib/types';
import { Loader2, Sparkles } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const formSchema = z.object({
  userInterests: z.string().min(3, { message: "Please describe your interests." }),
  learningHistory: z.string().optional(),
  trendingSkills: z.string().optional(),
});

type RecommendationFormValues = z.infer<typeof formSchema>;

export function RecommendationsForm() {
  const [isLoading, setIsLoading] = useState(false);
  const [recommendedCourseObjects, setRecommendedCourseObjects] = useState<Course[]>([]);
  const { toast } = useToast();

  const form = useForm<RecommendationFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      userInterests: '',
      learningHistory: '',
      trendingSkills: '',
    },
  });

  async function onSubmit(values: RecommendationFormValues) {
    setIsLoading(true);
    setRecommendedCourseObjects([]);
    try {
      const input: RecommendCoursesInput = {
        userInterests: values.userInterests,
        learningHistory: values.learningHistory || '', // Default to empty string if undefined
        trendingSkills: values.trendingSkills || '', // Default to empty string if undefined
      };
      const result: RecommendCoursesOutput = await recommendCourses(input);
      
      if (result.courseRecommendations) {
        const courseIds = result.courseRecommendations.split(',').map(id => id.trim());
        const courses = courseIds
          .map(id => getCourseById(id))
          .filter(course => course !== undefined) as Course[];
        setRecommendedCourseObjects(courses);
        if (courses.length === 0 && courseIds.length > 0) {
           toast({
            title: "Recommendations Found",
            description: "Some recommended course IDs were not found in our current catalog.",
            variant: "default",
          });
        } else if (courses.length === 0) {
           toast({
            title: "No Recommendations",
            description: "We couldn't find any recommendations based on your input. Try being more specific!",
            variant: "default",
          });
        }
      } else {
        setRecommendedCourseObjects([]);
         toast({
            title: "No Recommendations",
            description: "The AI did not return any recommendations.",
            variant: "default",
          });
      }
    } catch (error) {
      console.error("Error fetching recommendations:", error);
      toast({
        title: "Error",
        description: "Failed to fetch recommendations. Please try again.",
        variant: "destructive",
      });
      setRecommendedCourseObjects([]);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="container py-8">
      <Card className="max-w-2xl mx-auto shadow-xl">
        <CardHeader>
          <div className="flex items-center mb-2">
            <Sparkles className="h-8 w-8 bg-primary-gradient text-transparent bg-clip-text mr-3" />
            <CardTitle className="text-2xl">AI Course Recommendations</CardTitle>
          </div>
          <CardDescription>
            Tell us about your interests and learning journey, and our AI will suggest courses tailored for you.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="userInterests"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Your Interests</FormLabel>
                    <FormControl>
                      <Textarea placeholder="e.g., web development, machine learning, graphic design" {...field} />
                    </FormControl>
                    <FormDescription>
                      Describe your interests (comma-separated).
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="learningHistory"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Learning History (Optional)</FormLabel>
                    <FormControl>
                      <Input placeholder="e.g., course-1, course-3" {...field} />
                    </FormControl>
                    <FormDescription>
                      Comma-separated IDs of courses you've taken.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="trendingSkills"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Trending Skills in Your Field (Optional)</FormLabel>
                    <FormControl>
                      <Input placeholder="e.g., AI, Next.js, Python" {...field} />
                    </FormControl>
                    <FormDescription>
                      Comma-separated list of skills.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" disabled={isLoading} className="w-full">
                {isLoading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Getting Recommendations...
                  </>
                ) : (
                  <>
                    <Sparkles className="mr-2 h-4 w-4" />
                    Get Recommendations
                  </>
                )}
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>

      {recommendedCourseObjects.length > 0 && (
        <div className="mt-12">
          <h2 className="text-2xl font-semibold mb-6 text-center">Here are your personalized recommendations:</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {recommendedCourseObjects.map(course => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
