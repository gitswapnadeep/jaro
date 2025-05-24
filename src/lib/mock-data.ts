import type { Course, Instructor, User, Review, Testimonial } from './types';

export const mockInstructors: Instructor[] = [
  {
    id: 'instructor-1',
    name: 'Priya Sharma',
    bio: 'Expert in Web Development with 10+ years of experience. Passionate about teaching modern JavaScript frameworks.',
    avatarUrl: 'https://placehold.co/100x100.png',
    coursesAuthored: ['course-1', 'course-4'],
    title: 'Lead Developer & Educator',
  },
  {
    id: 'instructor-2',
    name: 'Rohan Kumar',
    bio: 'Award-winning designer specializing in UI/UX and branding. Loves to help students create beautiful and functional interfaces.',
    avatarUrl: 'https://placehold.co/100x100.png',
    coursesAuthored: ['course-2', 'course-5'],
    title: 'Principal UI/UX Designer',
  },
  {
    id: 'instructor-3',
    name: 'Ananya Singh',
    bio: 'Seasoned marketing professional with a knack for digital strategies and growth hacking. Enjoys sharing real-world case studies.',
    avatarUrl: 'https://placehold.co/100x100.png',
    coursesAuthored: ['course-3', 'course-6'],
    title: 'Digital Marketing Strategist',
  },
  {
    id: 'instructor-4',
    name: 'Sarveshvaran Rajagopal',
    bio: 'Data Science Specialist with a passion for Python and its applications in data analysis.',
    avatarUrl: 'https://placehold.co/100x100.png',
    coursesAuthored: ['course-7'],
    title: 'Data Science Specialist - LTIMindtree',
  },
  {
    id: 'instructor-5',
    name: 'Hitesh Motwani',
    bio: 'Business leader focused on leveraging AI for strategic growth and innovation.',
    avatarUrl: 'https://placehold.co/100x100.png',
    coursesAuthored: ['course-8'],
    title: 'CMO - Skillopedia',
  },
   {
    id: 'instructor-6',
    name: 'Aditya Basu',
    bio: 'Management consultant specializing in tech strategy and business transformation.',
    avatarUrl: 'https://placehold.co/100x100.png',
    coursesAuthored: ['course-9'],
    title: 'Head Strategy - Tech Mahindra',
  },
];

export const mockCourses: Course[] = [
  {
    id: 'course-1',
    title: 'Advanced React Patterns',
    shortTitle: 'React Advanced',
    description: 'Master advanced React concepts and patterns for building scalable applications.',
    instructorId: 'instructor-1',
    instructorName: 'Priya Sharma',
    category: 'Programming',
    learningOutcomes: ['Understand advanced component design', 'Implement state management solutions', 'Optimize React performance'],
    price: 49.99,
    rating: 4.8,
    imageUrl: '/Design-Patterns-in-React_Cover.png',
    dataAiHint: 'code react',
    duration: "6 Months",
    level: "Advanced",
    studentsEnrolled: 1200,
    admissionOpen: true,
    applicationDeadlineText: "Closing Soon",
  },
  {
    id: 'course-2',
    title: 'UI Design Fundamentals',
    shortTitle: 'UI Design Basics',
    description: 'Learn the core principles of UI design and create stunning user interfaces.',
    instructorId: 'instructor-2',
    instructorName: 'Rohan Kumar',
    category: 'Design',
    learningOutcomes: ['Master color theory and typography', 'Design user-friendly interfaces', 'Create wireframes and prototypes'],
    price: 29.99,
    rating: 4.5,
    imageUrl: '/Fundamentals-of-UI-design.png',
    dataAiHint: 'design ui',
    duration: "1 Year",
    level: "Beginner",
    studentsEnrolled: 2500,
    admissionOpen: true,
    applicationDeadlineText: "October 31, 2024",
  },
  {
    id: 'course-3',
    title: 'Digital Marketing Bootcamp',
    shortTitle: 'Digital Marketing',
    description: 'A comprehensive guide to digital marketing, from SEO to social media.',
    instructorId: 'instructor-3',
    instructorName: 'Ananya Singh',
    category: 'Marketing',
    learningOutcomes: ['Develop effective SEO strategies', 'Run successful social media campaigns', 'Analyze marketing data'],
    price: 79.00,
    rating: 4.7,
    imageUrl: '/Digital Marketing Bootcamp.png',
    dataAiHint: 'marketing business',
    duration: "9 Months",
    level: "Intermediate",
    studentsEnrolled: 800,
    admissionOpen: false,
    applicationDeadlineText: "Admissions Closed",
  },
  {
    id: 'course-4',
    title: 'Next.js for Beginners',
    shortTitle: 'Next.js Basics',
    description: 'Build server-rendered React applications with Next.js.',
    instructorId: 'instructor-1',
    instructorName: 'Priya Sharma',
    category: 'Programming',
    learningOutcomes: ['Understand Next.js routing', 'Implement data fetching techniques', 'Deploy Next.js applications'],
    price: 39.99,
    rating: 4.6,
    imageUrl: '/Next.js for Beginners.png',
    dataAiHint: 'code nextjs',
    duration: "3 Months",
    level: "Beginner",
    studentsEnrolled: 1500,
    admissionOpen: true,
    applicationDeadlineText: "Closing Soon",
  },
  {
    id: 'course-5',
    title: 'Advanced Figma Techniques',
    shortTitle: 'Figma Advanced',
    description: 'Unlock the full potential of Figma for collaborative design.',
    instructorId: 'instructor-2',
    instructorName: 'Rohan Kumar',
    category: 'Design',
    learningOutcomes: ['Master Figma components and variants', 'Learn advanced prototyping', 'Optimize design workflows'],
    price: 59.99,
    rating: 4.9,
    imageUrl: '/Advanced Figma Techniques.jpg',
    dataAiHint: 'design figma',
    duration: "1 Year",
    level: "Advanced",
    studentsEnrolled: 950,
    admissionOpen: true,
    applicationDeadlineText: "November 15, 2024",
  },
  {
    id: 'course-6',
    title: 'Content Marketing Strategy',
    shortTitle: 'Content Strategy',
    description: 'Create and distribute valuable content to attract and retain customers.',
    instructorId: 'instructor-3',
    instructorName: 'Ananya Singh',
    category: 'Marketing',
    learningOutcomes: ['Develop a content strategy', 'Create engaging content formats', 'Measure content marketing ROI'],
    price: 0, // Free course
    rating: 4.4,
    imageUrl: '/Content Marketing Strategy.jpg',
    dataAiHint: 'content strategy',
    duration: "2 Months",
    level: "Intermediate",
    studentsEnrolled: 3200,
    admissionOpen: true,
    applicationDeadlineText: "Always Open",
  },
  {
    id: 'course-7',
    title: 'Python for Data Analysis',
    shortTitle: 'Python Data Analysis',
    description: 'Leverage Python for comprehensive data analysis tasks.',
    instructorId: 'instructor-4',
    instructorName: 'Sarveshvaran Rajagopal',
    category: 'Programming',
    learningOutcomes: ['Utilize Pandas and NumPy', 'Perform data cleaning and transformation', 'Visualize data with Matplotlib and Seaborn'],
    price: 0, // Free course
    rating: 4.7,
    imageUrl: '/Python for Data Analysis.jpg',
    dataAiHint: 'python data',
    duration: "11 - 15 Hours",
    level: "Intermediate",
    studentsEnrolled: 4500,
    admissionOpen: true,
    applicationDeadlineText: "Always Open",
  },
  {
    id: 'course-8',
    title: 'AI for Business Leaders',
    shortTitle: 'AI Business',
    description: 'Understand how AI can transform businesses and drive innovation.',
    instructorId: 'instructor-5',
    instructorName: 'Hitesh Motwani',
    category: 'Business',
    learningOutcomes: ['Identify AI opportunities in business', 'Understand machine learning basics', 'Develop AI strategies'],
    price: 0, // Free course
    rating: 4.6,
    imageUrl: '/AI for Business Leaders.jpg',
    dataAiHint: 'ai business',
    duration: "2 Hours",
    level: "Beginner",
    studentsEnrolled: 3000,
    admissionOpen: true,
    applicationDeadlineText: "Always Open",
  },
   {
    id: 'course-9',
    title: 'Management Consulting',
    shortTitle: 'Mgmt Consulting',
    description: 'Learn the fundamentals of management consulting and problem-solving.',
    instructorId: 'instructor-6',
    instructorName: 'Aditya Basu',
    category: 'Business',
    learningOutcomes: ['Master problem-solving frameworks', 'Develop client communication skills', 'Understand project management in consulting'],
    price: 0, // Free course
    rating: 4.8,
    imageUrl: '/Management Consulting.jpeg',
    dataAiHint: 'consulting business',
    duration: "2 Hours",
    level: "Beginner",
    studentsEnrolled: 2800,
    admissionOpen: true,
    applicationDeadlineText: "Always Open",
  },
];

export const mockUsers: User[] = [
  {
    id: 'user-1',
    name: 'Swapnadeep Pal',
    email: 'swapnadeep8888@gmail.com',
    role: 'learner',
    avatarUrl: '/adorable-cartoon-boy.avif',
    enrolledCourses: ['course-1', 'course-3'],
  },
  {
    id: 'user-2',
    name: 'Meera Patel',
    email: 'meera@example.com',
    role: 'learner',
    avatarUrl: 'https://placehold.co/100x100.png',
    enrolledCourses: ['course-2'],
  },
  // Add instructor users that match mockInstructors
  {
    id: 'instructor-1',
    name: 'Priya Sharma',
    email: 'priya@example.com',
    role: 'instructor',
    avatarUrl: 'https://placehold.co/100x100.png',
  },
  {
    id: 'instructor-2',
    name: 'Rohan Kumar',
    email: 'rohan@example.com',
    role: 'instructor',
    avatarUrl: 'https://placehold.co/100x100.png',
  },
  {
    id: 'instructor-3',
    name: 'Ananya Singh',
    email: 'ananya@example.com',
    role: 'instructor',
    avatarUrl: 'https://placehold.co/100x100.png',
  },
   {
    id: 'instructor-4',
    name: 'Sarveshvaran Rajagopal',
    email: 'sarvesh@example.com',
    role: 'instructor',
    avatarUrl: 'https://placehold.co/100x100.png',
  },
  {
    id: 'instructor-5',
    name: 'Hitesh Motwani',
    email: 'hitesh@example.com',
    role: 'instructor',
    avatarUrl: 'https://placehold.co/100x100.png',
  },
  {
    id: 'instructor-6',
    name: 'Aditya Basu',
    email: 'aditya@example.com',
    role: 'instructor',
    avatarUrl: 'https://placehold.co/100x100.png',
  },
];

export const mockReviews: Review[] = [
  {
    id: 'review-1',
    courseId: 'course-1',
    userId: 'user-1',
    userName: 'Swapnadeep Pal',
    rating: 5,
    comment: 'This course was fantastic! Learned so much about advanced React.',
    createdAt: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString(), // 2 days ago
  },
  {
    id: 'review-2',
    courseId: 'course-1',
    userId: 'user-2',
    userName: 'Meera Patel',
    rating: 4,
    comment: 'Great content, but a bit fast-paced for me.',
    createdAt: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000).toISOString(), // 5 days ago
  },
  {
    id: 'review-3',
    courseId: 'course-2',
    userId: 'user-1',
    userName: 'Swapnadeep Pal',
    rating: 5,
    comment: 'Excellent introduction to UI design. Highly recommend!',
    createdAt: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000).toISOString(), // 1 day ago
  },
];

export const mockTestimonials: Testimonial[] = [
  {
    id: 'testimonial-1',
    userName: 'Parul Gupta',
    avatarUrl: 'https://placehold.co/60x60/A64AC9/FFFFFF.png?text=PG', 
    avatarFallback: 'PG',
    rating: 5,
    story: "Jaro Education's AI & Cybersecurity program was a game-changer! The blend of theory and hands-on labs on machine learning and ethical hacking gave me the confidence and skills to pivot my career. Truly world-class content and support.",
    category: 'Executive Certification Programs',
    programName: 'AI & Cybersecurity Program by Jaro',
    accentColor: 'border-red-500',
  },
  {
    id: 'testimonial-2',
    userName: 'Manjushree Mohite',
    avatarUrl: 'https://placehold.co/60x60/3498DB/FFFFFF.png?text=MM', 
    avatarFallback: 'MM',
    rating: 5,
    story: "My Online MBA experience with Jaro Education was exceptional. The faculty members were incredibly supportive, guiding me through every step. The flexibility of the program allowed me to balance my studies with work. I feel so much more confident now!",
    category: 'Online Degrees',
    programName: 'Online MBA from Jaro Education',
    accentColor: 'border-red-500',
  },
  {
    id: 'testimonial-3',
    userName: 'Palash Dhone',
    avatarUrl: 'https://placehold.co/60x60/2ECC71/FFFFFF.png?text=PD', 
    avatarFallback: 'PD',
    rating: 5,
    story: "The Data Science Bootcamp at Jaro Education is incredibly informative. I've significantly upskilled in Python, R, and SQL, and the practical projects were invaluable. The faculty's eagerness to help made a huge difference. Highly recommend!",
    category: 'Executive Certification Programs',
    programName: 'Data Science Bootcamp by Jaro',
    accentColor: 'border-red-500',
  },
  {
    id: 'testimonial-4',
    userName: 'Sachin Gurav',
    avatarUrl: 'https://placehold.co/60x60/F39C12/FFFFFF.png?text=SG', 
    avatarFallback: 'SG',
    rating: 5,
    story: "Connecting with IIM Mumbai through Jaro Education for the 'Finance for Non-Finance Executives' program was a dream come true. The collaboration is excellent, and it significantly advanced my financial analysis skills. The networking was also a major plus!",
    category: 'Executive Certification Programs',
    programName: 'Finance for Non-Finance (IIM Mumbai - Jaro)',
    accentColor: 'border-red-500',
  },
  {
    id: 'testimonial-5',
    userName: 'Bhavanshu Khandelwal',
    avatarUrl: 'https://placehold.co/60x60/9B59B6/FFFFFF.png?text=BK', 
    avatarFallback: 'BK',
    rating: 4,
    story: "I joined Jaro Education's Advanced Business Analytics program (with IIM-K) to build a strong foundation in analytics. The program provided great clarity on essential tools like Excel, SQL, Tableau, and R. The instructors were knowledgeable and really helped improve my career prospects.",
    category: 'Executive Certification Programs',
    programName: 'Advanced Business Analytics (IIM-K - Jaro)',
    accentColor: 'border-red-500',
  },
  {
    id: 'testimonial-6',
    userName: 'Atul Jha',
    avatarUrl: 'https://placehold.co/60x60/1ABC9C/FFFFFF.png?text=AJ', 
    avatarFallback: 'AJ',
    rating: 5,
    story: "Enrolling in the EPAI & CSO program at IIM Indore through Jaro Education was a strategic move to elevate my skill set. The comprehensive curriculum deepened my understanding of AI and Cybersecurity, providing practical insights. Jaro facilitated this learning experience perfectly.",
    category: 'Executive Certification Programs',
    programName: 'EPAI & CSO (IIM Indore - Jaro)',
    accentColor: 'border-red-500',
  }
];

export const supportPageFaqData = [
  {
    id: "faq-support-1",
    question: "How do I enroll in a course?",
    answer: "To enroll in a course, simply navigate to the course details page and click the 'Enroll Now' button. If the course is paid, you will be guided through the payment process. For free courses, enrollment is immediate.",
    keywords: "enroll, course, payment, free"
  },
  {
    id: "faq-support-2",
    question: "Can I get a refund for a course?",
    answer: "We offer a 30-day money-back guarantee for most courses. Please check the specific refund policy on the course page or contact our support team for assistance.",
    keywords: "refund, money, policy, guarantee"
  },
  {
    id: "faq-support-3",
    question: "How can I become an instructor?",
    answer: "We're always looking for passionate instructors! Please visit our 'Become an Instructor' page (link usually in the footer or profile section) to learn more about the application process and requirements.",
    keywords: "instructor, teach, apply, requirements"
  },
  {
    id: "faq-support-4",
    question: "Where can I find my enrolled courses?",
    answer: "You can find all your enrolled courses on your 'My Profile' page. There will be a dedicated section listing the courses you are currently taking.",
    keywords: "profile, my courses, find, dashboard"
  },
  {
    id: "faq-support-5",
    question: "Is there a mobile app available?",
    answer: "Currently, Jaro Education is optimized for web browsers on desktop and mobile devices. We are working on a dedicated mobile app, so stay tuned for updates!",
    keywords: "mobile app, android, ios, phone"
  },
  {
    id: "faq-support-6",
    question: "How do I reset my password?",
    answer: "If you've forgotten your password, you can click the 'Forgot Password' link on the login page. You'll receive an email with instructions to reset it.",
    keywords: "password, reset, forgot, login, account"
  },
  {
    id: "faq-support-7",
    question: "What payment methods do you accept?",
    answer: "We accept all major credit cards (Visa, MasterCard, American Express), PayPal, and various local payment methods depending on your region.",
    keywords: "payment, credit card, paypal, methods, billing"
  },
  {
    id: "faq-support-8",
    question: "Are certificates provided upon course completion?",
    answer: "Yes, for most courses, a verifiable certificate of completion is provided once you successfully finish all modules and assessments.",
    keywords: "certificate, completion, achievement, proof"
  },
];

export const homePageFaqData = [
  {
    id: "faq-home-1",
    question: "What kind of courses does Jaro Education offer?",
    answer: "Jaro Education opens doors to a universe of learning! We offer a diverse range of expertly crafted courses across exciting fields like Programming, cutting-edge Design, dynamic Business strategies, impactful Marketing, stunning Photography, and soul-stirring Music. Whether you're taking your first step or are a seasoned professional aiming for the stars, our courses are designed to elevate your skills and passion.",
    keywords: "courses, variety, fields, technology, business, programming, design, marketing, photography, music"
  },
  {
    id: "faq-home-2",
    question: "Who are the instructors at Jaro Education?",
    answer: "Our instructors are more than just teachers; they are passionate industry veterans, celebrated professionals, and experienced educators dedicated to your growth. They bring real-world insights and a contagious enthusiasm for their subjects, ensuring you learn from the best and get inspired to achieve greatness.",
    keywords: "instructors, experts, professionals, teachers, industry leaders"
  },
  {
    id: "faq-home-3",
    question: "How do I get started with a course on Jaro Education?",
    answer: "Embarking on your learning adventure with Jaro Education is a breeze! Simply dive into our vibrant course catalog, discover the course that ignites your curiosity, and click 'Enroll Now' or 'View Details'. Create your account in a few simple steps, and you're ready to unlock a world of knowledge in minutes. Your journey to new skills starts now!",
    keywords: "get started, enroll, new user, sign up, begin learning"
  },
  {
    id: "faq-home-4",
    question: "Are there any free courses available to try?",
    answer: "Absolutely! We believe in the joy of discovery. Jaro Education offers a curated selection of exciting free courses. This is your golden ticket to explore new subjects, experience our unique teaching style, and get a taste of the transformative Jaro learning environment. Don't miss our 'Industry Oriented Free Online Courses' section for these amazing opportunities!",
    keywords: "free courses, trial, sample, no cost, introductory courses"
  },
  {
    id: "faq-home-5",
    question: "What makes Jaro Education stand out from other platforms?",
    answer: "Jaro Education is not just another learning platform; it's a commitment to your success! We stand out by offering exceptionally high-quality, industry-relevant courses delivered by true experts. We champion practical, hands-on skills, personalized learning journeys powered by our smart AI recommendations, and a vibrant, supportive community dedicated to helping you conquer your career and learning aspirations. With Jaro, you're not just learning; you're evolving!",
    keywords: "different, unique, benefits, quality, AI recommendations, community, practical skills"
  },
  {
    id: "faq-home-6",
    question: "Can I access my course materials whenever I want?",
    answer: "Yes, flexibility is key at Jaro Education! Once you enroll in a course, you typically gain 24/7 access to all course materials. This means you can learn at your own pace, on your own schedule, fitting your education seamlessly into your life. While some specialized programs might have specific access durations, we ensure you have ample time to master the content. Always check the course details page for specific information!",
    keywords: "access, materials, schedule, flexible, anytime, 24/7"
  },
  {
    id: "faq-home-7",
    question: "Does Jaro Education offer certifications upon completion?",
    answer: "Yes, we believe in celebrating your achievements! Many of our courses offer verifiable certificates of completion to showcase your new skills and knowledge. Some programs are even aligned with prestigious industry-recognized certifications, boosting your professional profile. Each course page will detail the type of certification or acknowledgment provided upon successful completion.",
    keywords: "certification, certificate, recognized, professional, achievement, credentials"
  },
  {
    id: "faq-home-8",
    question: "How do AI recommendations help me find the right courses?",
    answer: "Our intelligent AI recommendation engine is like your personal learning guide! By understanding your interests, learning history, and even trending skills in your field, it suggests courses that are perfectly tailored to your unique path. This means less time searching and more time learning exactly what you need to achieve your goals and explore exciting new horizons.",
    keywords: "AI recommendations, personalized learning, course suggestions, artificial intelligence"
  },
  {
    id: "faq-home-9",
    question: "Is there a community I can interact with?",
    answer: "Learning is often better together! While specific community features vary, many of our courses and programs offer opportunities to connect with fellow learners and instructors through discussion forums, group projects, or Q&A sessions. We foster a supportive environment where you can share insights, ask questions, and network with like-minded individuals.",
    keywords: "community, forum, interaction, networking, student support, collaboration"
  },
  {
    id: "faq-home-10",
    question: "What if I need help or support during my course?",
    answer: "We're here for you every step of the way! Jaro Education provides robust student support. You can reach out through our dedicated 'Support' page for assistance with technical issues, course content queries, or any other questions you might have. Our aim is to ensure your learning experience is smooth and successful.",
    keywords: "support, help, assistance, contact, student services"
  }
];


export const getCourseById = (id: string): Course | undefined => mockCourses.find(course => course.id === id);
export const getInstructorById = (id: string): Instructor | undefined => mockInstructors.find(instructor => instructor.id === id);
export const getUserById = (id: string): User | undefined => mockUsers.find(user => user.id === id);
export const getReviewsByCourseId = (courseId: string): Review[] => mockReviews.filter(review => review.courseId === courseId);
export const getAllTestimonials = (): Testimonial[] => mockTestimonials;
    

    


