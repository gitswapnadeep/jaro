import { UserProfileClient } from '@/components/user/user-profile-client';
import { getUserById, getInstructorById, getCourseById, mockUsers, mockCourses } from '@/lib/mock-data';
import type { User, Instructor, Course } from '@/lib/types';
import type { Metadata } from 'next';
import { APP_NAME } from '@/lib/constants';

type Props = {
  params: { userId: string };
};

export async function generateStaticParams() {
  return mockUsers.map((user) => ({
    userId: user.id,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const user = getUserById(params.userId);
  if (!user) {
    return {
      title: `Profile Not Found | ${APP_NAME}`,
    };
  }
  return {
    title: `${user.name}'s Profile | ${APP_NAME}`,
    description: `View the profile of ${user.name} on ${APP_NAME}.`,
  };
}

export default function UserProfilePage({ params }: Props) {
  const user = getUserById(params.userId);
  let instructorProfile: Instructor | undefined;
  let displayedCourses: Course[] = [];

  if (user) {
    if (user.role === 'instructor') {
      instructorProfile = getInstructorById(user.id); // Assuming instructor ID is same as user ID for simplicity
      if (instructorProfile?.coursesAuthored) {
        displayedCourses = instructorProfile.coursesAuthored
          .map(courseId => getCourseById(courseId))
          .filter(course => course !== undefined) as Course[];
      }
    } else if (user.role === 'learner' && user.enrolledCourses) {
      displayedCourses = user.enrolledCourses
        .map(courseId => getCourseById(courseId))
        .filter(course => course !== undefined) as Course[];
    }
  }

  return (
    <UserProfileClient
      user={user}
      instructorProfile={instructorProfile}
      courses={displayedCourses}
    />
  );
}
