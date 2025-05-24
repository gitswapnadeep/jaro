import { CourseDetailClient } from '@/components/courses/course-detail-client';
import { getCourseById, getInstructorById, getReviewsByCourseId, mockCourses } from '@/lib/mock-data';
import type { Metadata } from 'next';
import { APP_NAME } from '@/lib/constants';

type Props = {
  params: { id: string };
};

export async function generateStaticParams() {
  return mockCourses.map((course) => ({
    id: course.id,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const course = getCourseById(params.id);
  if (!course) {
    return {
      title: `Course Not Found | ${APP_NAME}`,
    };
  }
  return {
    title: `${course.title} | ${APP_NAME}`,
    description: course.description,
  };
}

export default function CourseDetailPage({ params }: Props) {
  const course = getCourseById(params.id);
  const instructor = course ? getInstructorById(course.instructorId) : undefined;
  const reviews = course ? getReviewsByCourseId(course.id) : [];

  return <CourseDetailClient course={course} instructor={instructor} reviews={reviews} />;
}
