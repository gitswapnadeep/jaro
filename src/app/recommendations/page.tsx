import { RecommendationsForm } from '@/components/ai/recommendations-form';
import type { Metadata } from 'next';
import { APP_NAME } from '@/lib/constants';

export const metadata: Metadata = {
  title: `AI Course Recommendations | ${APP_NAME}`,
  description: `Get personalized course recommendations powered by AI on ${APP_NAME}.`,
};

export default function RecommendationsPage() {
  return (
    <RecommendationsForm />
  );
}
