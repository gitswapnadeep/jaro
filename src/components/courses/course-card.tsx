
import Link from 'next/link';
import Image from 'next/image';
import type { Course } from '@/lib/types';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Clock, Calendar } from 'lucide-react'; // Added Calendar

interface CourseCardProps {
  course: Course;
}

export function CourseCard({ course }: CourseCardProps) {
  return (
    <Card className="flex flex-col h-full overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-lg">
      <CardHeader className="p-0 relative">
        <Link href={`/courses/${course.id}`} aria-label={`View course ${course.title}`}>
          <Image
            src={course.imageUrl}
            alt={course.title}
            width={600}
            height={300}
            className="w-full h-48 object-cover"
            data-ai-hint={course.dataAiHint || "education learning"}
          />
        </Link>
        <Badge variant="secondary" className="absolute top-2 left-2 bg-background/80 backdrop-blur-sm">
          {course.category}
        </Badge>
        {course.admissionOpen && (
          <Badge className="absolute top-2 right-2 bg-green-admission-gradient text-primary-foreground border-transparent">
            Admission Open
          </Badge>
        )}
        {!course.admissionOpen && course.applicationDeadlineText === "Admissions Closed" && (
           <Badge className="absolute top-2 right-2 bg-destructive-gradient text-primary-foreground border-transparent">
            Admissions Closed
          </Badge>
        )}
      </CardHeader>
      <CardContent className="p-4 flex-grow">
        <Link href={`/courses/${course.id}`}>
          <CardTitle className="text-lg font-semibold mb-2 hover:bg-primary-gradient hover:text-transparent hover:bg-clip-text transition-colors">
            {course.title}
          </CardTitle>
        </Link>
        <p className="text-sm text-muted-foreground mb-1">{course.instructorName}</p>
        <p className="text-xs text-muted-foreground line-clamp-2 mb-3">{course.description}</p>
        
        {/* New section for Duration and Application Deadline */}
        <div className="mt-3 space-y-1.5 text-sm text-muted-foreground">
          <div className="flex items-center">
            <Clock className="w-4 h-4 mr-2 text-primary flex-shrink-0" />
            <span>Duration: {course.duration}</span>
          </div>
          {course.applicationDeadlineText && (
            <div className="flex items-center">
              <Calendar className="w-4 h-4 mr-2 text-primary flex-shrink-0" />
              <span>Application Closure Date: {course.applicationDeadlineText}</span>
            </div>
          )}
        </div>
      </CardContent>
      <CardFooter className="p-4 pt-0 flex justify-between items-center mt-auto"> {/* Added mt-auto to push footer down */}
        <p className="text-lg font-semibold bg-primary-gradient text-transparent bg-clip-text">
          {course.price === 0 ? 'Free' : `₹${course.price.toFixed(2)}`}
        </p>
        <Button asChild size="sm" variant="default">
          <Link href={`/courses/${course.id}`}>View Details</Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
