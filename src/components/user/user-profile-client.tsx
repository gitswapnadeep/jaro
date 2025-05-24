"use client";

import type { User, Instructor, Course } from '@/lib/types';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { CourseCard } from '@/components/courses/course-card';
import { Badge } from '@/components/ui/badge';
import { Mail, Briefcase, BookCopy } from 'lucide-react';

interface UserProfileClientProps {
  user: User | undefined;
  instructorProfile?: Instructor | undefined; // Optional, if the user is an instructor
  courses: Course[]; // Either enrolled or authored courses
}

export function UserProfileClient({ user, instructorProfile, courses }: UserProfileClientProps) {
  if (!user) {
    return (
      <div className="container py-12 text-center">
        <h1 className="text-2xl font-semibold">User not found</h1>
        <p className="text-muted-foreground">The profile you are looking for does not exist.</p>
      </div>
    );
  }

  const isInstructor = user.role === 'instructor' && instructorProfile;

  return (
    <div className="container py-8">
      <Card className="mb-8 shadow-lg">
        <CardHeader className="flex flex-col md:flex-row items-start md:items-center gap-6 p-6">
          <Avatar className="h-24 w-24 md:h-32 md:w-32 border-4 border-primary">
            <AvatarImage src={user.avatarUrl || instructorProfile?.avatarUrl} alt={user.name} data-ai-hint="person portrait" />
            <AvatarFallback className="text-3xl md:text-4xl">{user.name.substring(0, 2).toUpperCase()}</AvatarFallback>
          </Avatar>
          <div className="flex-1">
            <CardTitle className="text-3xl md:text-4xl font-bold mb-1">{user.name}</CardTitle>
            <Badge variant={isInstructor ? "default" : "secondary"} className="capitalize mb-2">
              {user.role}
            </Badge>
            <div className="flex items-center text-muted-foreground text-sm space-x-4">
              <span className="flex items-center"><Mail className="w-4 h-4 mr-1.5 bg-primary-gradient text-transparent bg-clip-text" /> {user.email}</span>
            </div>
          </div>
        </CardHeader>
        {isInstructor && instructorProfile?.bio && (
          <CardContent className="p-6 pt-0">
            <h3 className="text-lg font-semibold mb-2 flex items-center"><Briefcase className="w-5 h-5 mr-2 bg-primary-gradient text-transparent bg-clip-text" /> Instructor Bio</h3>
            <p className="text-muted-foreground">{instructorProfile.bio}</p>
          </CardContent>
        )}
      </Card>

      <h2 className="text-2xl font-semibold mb-6 flex items-center">
        <BookCopy className="w-7 h-7 mr-3 bg-primary-gradient text-transparent bg-clip-text" />
        {isInstructor ? 'Courses Authored' : 'Enrolled Courses'} ({courses.length})
      </h2>
      {courses.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      ) : (
        <Card className="text-center py-12">
          <CardContent>
            <p className="text-muted-foreground">
              {isInstructor ? 'No courses authored yet.' : 'No courses enrolled yet.'}
            </p>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
