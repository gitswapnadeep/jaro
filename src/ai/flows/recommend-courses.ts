'use server';

/**
 * @fileOverview A course recommendation AI agent.
 *
 * - recommendCourses - A function that handles the course recommendation process.
 * - RecommendCoursesInput - The input type for the recommendCourses function.
 * - RecommendCoursesOutput - The return type for the recommendCourses function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const RecommendCoursesInputSchema = z.object({
  userInterests: z
    .string()
    .describe('A comma separated list of the users interests'),
  learningHistory: z
    .string()
    .describe('A comma separated list of course ids the user has taken'),
  trendingSkills: z
    .string()
    .describe('A comma separated list of skills that are trending in their field'),
});
export type RecommendCoursesInput = z.infer<typeof RecommendCoursesInputSchema>;

const RecommendCoursesOutputSchema = z.object({
  courseRecommendations: z
    .string()
    .describe('A comma separated list of recommended course ids'),
});
export type RecommendCoursesOutput = z.infer<typeof RecommendCoursesOutputSchema>;

export async function recommendCourses(input: RecommendCoursesInput): Promise<RecommendCoursesOutput> {
  return recommendCoursesFlow(input);
}

const prompt = ai.definePrompt({
  name: 'recommendCoursesPrompt',
  input: {schema: RecommendCoursesInputSchema},
  output: {schema: RecommendCoursesOutputSchema},
  prompt: `You are a course recommendation engine.

You will use this information to recommend courses to the user.

User Interests: {{{userInterests}}}
Learning History: {{{learningHistory}}}
Trending Skills: {{{trendingSkills}}}

Based on the users interests, learning history, and trending skills, recommend courses to the user. Only return a comma separated list of course ids.`,
});

const recommendCoursesFlow = ai.defineFlow(
  {
    name: 'recommendCoursesFlow',
    inputSchema: RecommendCoursesInputSchema,
    outputSchema: RecommendCoursesOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
