"use client";

import { useState, useMemo } from 'react';
import type { Course } from '@/lib/types';
import { CourseCard } from './course-card';
import { CourseFilters } from './course-filters';

interface CourseListProps {
  courses: Course[];
  showFilters?: boolean;
}

export function CourseList({ courses, showFilters = true }: CourseListProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredCourses = useMemo(() => {
    if (!showFilters) {
      return courses;
    }
    return courses.filter(course => {
      const matchesCategory = selectedCategory === 'all' || course.category === selectedCategory;
      const matchesSearch = 
        course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        course.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        course.instructorName.toLowerCase().includes(searchTerm.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [courses, searchTerm, selectedCategory, showFilters]);

  return (
    <div className="py-8 animate-fade-in-up"> {/* Removed 'container' class */}
      {showFilters && (
        <CourseFilters
          searchTerm={searchTerm}
          onSearchChange={setSearchTerm}
          selectedCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
        />
      )}
      {filteredCourses.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCourses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <h2 className="text-2xl font-semibold mb-2">No Courses Found</h2>
          <p className="text-muted-foreground">
            {showFilters ? "Try adjusting your search or filter criteria." : "There are no courses to display."}
          </p>
        </div>
      )}
    </div>
  );
}
