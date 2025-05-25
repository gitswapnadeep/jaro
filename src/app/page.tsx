import { CourseList } from '@/components/courses/course-list';
import { HeroSection } from '@/components/home/hero-section';
import { mockCourses, homePageFaqData } from '@/lib/mock-data'; // Import homePageFaqData
// Separator component is no longer used directly for the main page separators.
// import { Separator } from '@/components/ui/separator'; 
import { SuccessStoriesSection } from '@/components/home/success-stories-section';
import { FaqSection } from '@/components/home/faq-section'; // Import FaqSection

export default function HomePage() {
  const allCourses = mockCourses;
  const featuredCourses = allCourses.slice(0, 3);
  const freeOnlineCourses = allCourses.filter(course => course.price === 0); // Get all free courses for the list

  return (
    <>
      <HeroSection />
      
      <section className="py-12 md:py-16">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-2 tracking-tight">Featured Courses</h2>
          <p className="text-muted-foreground text-center mb-10">
            Handpicked courses to kickstart your learning journey.
          </p>
          <CourseList courses={featuredCourses} showFilters={false} />
        </div>
      </section>

      <div className="container mx-auto">
        <div className="my-4 md:my-6 h-[3px] rounded-full bg-rosemary-purple-gradient" />
      </div>

      <section id="all-courses" className="py-12 md:py-16">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-10 tracking-tight">Explore All Courses</h2>
          <CourseList courses={allCourses} />
        </div>
      </section>

      <div className="container mx-auto">
        <div className="my-4 md:my-6 h-[3px] rounded-full bg-rosemary-purple-gradient" />
      </div>

      <section className="py-12 md:py-16 animate-fade-in-up">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-10 tracking-tight">
            Industry Oriented Free Online Courses
          </h2>
          
          {freeOnlineCourses.length > 0 ? (
            <CourseList courses={freeOnlineCourses} showFilters={false} />
          ) : (
            <p className="text-muted-foreground text-center">No free online courses available at the moment.</p>
          )}
        </div>
      </section>

      <div className="container mx-auto">
        <div className="my-4 md:my-6 h-[3px] rounded-full bg-rosemary-purple-gradient" />
      </div>

      <SuccessStoriesSection />

      <div className="container mx-auto">
        <div className="my-4 md:my-6 h-[3px] rounded-full bg-rosemary-purple-gradient" />
      </div>

      <FaqSection faqItems={homePageFaqData} />
    </>
  );
}

