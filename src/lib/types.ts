
export type Instructor = {
  id: string;
  name: string;
  bio: string;
  avatarUrl?: string;
  coursesAuthored?: string[]; // Array of course IDs
  title?: string; // Added for instructor title on new card
};

export type Course = {
  id: string;
  title: string;
  description: string;
  instructorId: string;
  instructorName: string; // Denormalized for easier display
  category: string;
  learningOutcomes: string[];
  content?: string; // Placeholder for actual content structure
  price: number; // 0 for free
  rating: number; // Average rating 0-5
  imageUrl: string;
  dataAiHint?: string;
  duration: string; // e.g., "1 Year", "6 Months", "12 hours"
  level: "Beginner" | "Intermediate" | "Advanced";
  studentsEnrolled: number;
  admissionOpen?: boolean; // New field for "Admission Open" badge
  applicationDeadlineText?: string; // New field for application closure status
  shortTitle?: string; // Added for display on image
};

export type UserRole = "learner" | "instructor" | "admin";

export type User = {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  avatarUrl?: string;
  enrolledCourses?: string[]; // Array of course IDs for learners
  // For instructors, coursesAuthored is on the Instructor type
};

export type Review = {
  id: string;
  courseId: string;
  userId: string;
  userName: string;
  rating: number; // 1-5
  comment: string;
  createdAt: string; // ISO date string
};

export type TestimonialCategory = "All" | "Executive Certification Programs" | "Online Degrees";

export type Testimonial = {
  id: string;
  userName: string;
  avatarUrl?: string;
  avatarFallback: string; // e.g., "PG" for Parul Gupta
  rating: number; // 0-5
  story: string;
  category: TestimonialCategory;
  programName?: string; // Optional: name of the program they attended
  accentColor?: string; // Optional: Tailwind class for right border accent, e.g., 'border-red-500'
};
