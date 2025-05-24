
import Link from 'next/link';
import Image from 'next/image';
import type { Course, Instructor } from '@/lib/types';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Clock } from 'lucide-react';
import { APP_NAME } from '@/lib/constants';
import { getInstructorById } from '@/lib/mock-data';

interface IndustryOrientedCourseCardProps {
  course: Course;
}

export function IndustryOrientedCourseCard({ course }: IndustryOrientedCourseCardProps) {
  const instructor = getInstructorById(course.instructorId);

  return (
    <Card className="flex flex-col h-full overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-lg border border-gray-200 dark:border-gray-700 w-full max-w-sm">
      <div className="relative">
        <Link href={`/courses/${course.id}`} aria-label={`View course ${course.title}`}>
          <Image
            src={course.imageUrl} // Replace with actual course image if available
            alt={course.title}
            width={384} // Standard card width
            height={216} // 16:9 aspect ratio
            className="w-full h-48 object-cover"
            data-ai-hint={course.dataAiHint || "education professional"}
          />
        </Link>
        <div className="absolute top-2 left-2 bg-white/80 backdrop-blur-sm px-2 py-1 rounded text-xs font-medium text-gray-700">
          {APP_NAME}
        </div>
        {course.shortTitle && (
            <div className="absolute inset-0 flex flex-col items-start justify-center p-4 bg-gradient-to-t from-black/70 via-black/30 to-transparent pointer-events-none">
                <h3 className="text-xl font-bold text-white line-clamp-2 shadow-text">
                    {course.shortTitle.split(' ').slice(0,2).join(' ')} <br/>
                    {course.shortTitle.split(' ').slice(2).join(' ')}
                </h3>
            </div>
        )}
        {instructor && (
          <div className="absolute bottom-0 left-0 right-0 bg-red-600/90 px-3 py-1.5 text-white text-xs">
            <p className="font-semibold truncate">{instructor.name}</p>
            {instructor.title && <p className="truncate text-white/80 text-[10px]">{instructor.title}</p>}
          </div>
        )}
      </div>
      <CardContent className="p-4 flex-grow flex flex-col items-center text-center">
        <h4 className="text-md font-semibold mb-2 text-gray-800 dark:text-gray-200">{course.title}</h4>
        <div className="flex items-center text-sm text-muted-foreground mb-4">
          <Clock className="w-4 h-4 mr-1.5 text-gray-500 dark:text-gray-400" />
          <span>Duration: {course.duration}</span>
        </div>
      </CardContent>
      <CardFooter className="p-4 pt-0 flex justify-center">
        <Button asChild size="md" className="bg-indigo-700 hover:bg-indigo-800 text-white font-semibold w-full">
          <Link href={`/courses/${course.id}`}>Register Now</Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
