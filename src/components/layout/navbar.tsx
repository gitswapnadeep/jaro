
"use client";

import Link from 'next/link';
import { BookOpen, UserCircle, Sparkles, GraduationCap, Heart, Menu, Bell, Crown, Mail, SendHorizontal, HelpCircle, FileText, ShieldCheck, LogIn } from 'lucide-react'; // Added LogIn
import { APP_NAME } from '@/lib/constants';
import { Button, buttonVariants } from '@/components/ui/button';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { useState } from 'react';
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { ScrollArea } from '@/components/ui/scroll-area';
import { getUserById, getCourseById } from '@/lib/mock-data';
import type { Course } from '@/lib/types';


const navLinks = [
  { href: '/profile/user-1', label: 'My Profile', icon: UserCircle },
  { href: '/', label: 'All Courses', icon: BookOpen },
  { href: '/recommendations', label: 'AI Picks', icon: Sparkles },
  { href: '/sign-in', label: 'Sign In', icon: LogIn }, // Added Sign In link
  { href: '/support', label: 'Support', icon: HelpCircle },
  { href: '/privacy-policy', label: 'Privacy Policy', icon: FileText },
  { href: '/terms-and-conditions', label: 'Terms & Conditions', icon: ShieldCheck },
];

export function Navbar() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const isSupportActive = pathname.startsWith('/support');

  // Mock data fetching for subscription popover - replace with actual user data logic
  const subscribedCourses: Course[] = [];
  const mockUserId = 'user-1'; // Example user
  const user = getUserById(mockUserId);
  if (user && user.enrolledCourses) {
    user.enrolledCourses.forEach(courseId => {
      const course = getCourseById(courseId);
      if (course) {
        subscribedCourses.push(course);
      }
    });
  }


  return (
    <header className="sticky top-0 z-50 w-full border-b bg-gray-900/90 backdrop-blur-lg font-poppins">
      <div className="container flex h-16 items-center">
        <Link
          href="/"
          className="flex items-center space-x-2 group mr-auto" // Changed mr-8 to mr-auto to push other items right
          onClick={() => setIsMobileMenuOpen(false)}
        >
          <GraduationCap className="h-7 w-7 text-primary-foreground flex-shrink-0" />
          <span className="font-bold text-xl text-primary-foreground whitespace-nowrap">
            {APP_NAME}
          </span>
        </Link>

        {/* Desktop navigation links are now in hamburger menu */}

        <div className="flex items-center gap-0 ml-4"> {/* Added ml-4 for spacing from logo */}
          <TooltipProvider delayDuration={0}>
            {/* Email Button */}
            <Popover>
              <Tooltip>
                <PopoverTrigger asChild>
                  <TooltipTrigger asChild>
                    <Button
                      variant="ghost"
                      className={cn(
                        "hover:drop-shadow-[0_0_4px_hsl(var(--primary))]",
                        "hover:bg-transparent",
                        "text-gray-300 hover:text-white",
                        "h-8 w-8"
                      )}
                      aria-label="View messages"
                    >
                      <Mail className="h-5 w-5" />
                    </Button>
                  </TooltipTrigger>
                </PopoverTrigger>
                <TooltipContent>
                  <p>View messages</p>
                </TooltipContent>
              </Tooltip>
              <PopoverContent className="w-60" side="bottom" align="end" sideOffset={10}>
                <div className="flex items-center space-x-2 pb-2 mb-2 border-b">
                  <Mail className="h-4 w-4 text-primary" />
                  <p className="text-sm font-medium leading-none">Email</p>
                </div>
                <div className="border rounded-md p-4 text-center">
                  <p className="text-xs text-muted-foreground">No items found.</p>
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  asChild
                  className="w-full mt-2 hover:bg-dropdown-hover-gradient hover:text-primary-foreground hover:border-transparent transition-colors gap-1"
                >
                  <a
                    href="https://mail.google.com/mail/?view=cm&fs=1&to=swapnadeep8888@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-1"
                  >
                    <SendHorizontal className="h-4 w-4" />
                    <span className="leading-none">Send email</span>
                  </a>
                </Button>
              </PopoverContent>
            </Popover>

            {/* Subscription Button */}
             <Popover>
              <Tooltip>
                <PopoverTrigger asChild>
                  <TooltipTrigger asChild>
                    <Button
                      variant="ghost"
                      className={cn(
                        "hover:drop-shadow-[0_0_4px_hsl(var(--primary))]",
                        "hover:bg-transparent",
                        "text-gray-300 hover:text-white",
                        "h-8 w-8"
                      )}
                      aria-label="View subscription"
                    >
                      <Crown className="h-5 w-5" />
                    </Button>
                  </TooltipTrigger>
                </PopoverTrigger>
                <TooltipContent>
                  <p>Subscription</p>
                </TooltipContent>
              </Tooltip>
              <PopoverContent className="w-80" side="bottom" align="end" sideOffset={10}>
                <div className="flex items-center space-x-2 pb-2 mb-2 border-b">
                  <Crown className="h-4 w-4 text-primary" />
                  <p className="text-sm font-medium leading-none">Subscription</p>
                </div>
                {subscribedCourses.length > 0 ? (
                  <ScrollArea className="h-[150px] mb-3">
                    <ul className="space-y-1.5 text-sm">
                      {subscribedCourses.map(course => (
                        <li key={course.id}>
                          <Link href={`/courses/${course.id}`} className="hover:underline text-muted-foreground hover:text-primary">
                            {course.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </ScrollArea>
                ) : (
                  <div className="border rounded-md p-4 text-center my-3">
                    <p className="text-xs text-muted-foreground">You are not subscribed to any courses.</p>
                  </div>
                )}
                <Button
                  variant="default"
                  size="sm"
                  asChild
                  className="w-full"
                >
                  <Link href="/subscriptions">Manage Subscription</Link>
                </Button>
              </PopoverContent>
            </Popover>


            {/* Alert Bell Button */}
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  variant="ghost"
                  className={cn(
                    "hover:drop-shadow-[0_0_4px_hsl(var(--primary))]",
                    "hover:bg-transparent",
                    "text-gray-300 hover:text-white",
                    "h-8 w-8"
                  )}
                  aria-label="View notifications"
                >
                  <Bell className="h-5 w-5" />
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Notifications</p>
              </TooltipContent>
            </Tooltip>

            {/* Hamburger Menu Trigger */}
            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <Tooltip>
                <TooltipTrigger asChild>
                  <SheetTrigger asChild>
                    <Button
                      variant="ghost"
                      className={cn(
                        "hover:drop-shadow-[0_0_4px_hsl(var(--primary))]",
                        "hover:bg-transparent",
                        "text-gray-300 hover:text-white",
                        "h-12 w-12"
                      )}
                      aria-label="Open navigation menu"
                    >
                      <Menu className="h-7 w-7" />
                    </Button>
                  </SheetTrigger>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Open menu</p>
                </TooltipContent>
              </Tooltip>
              <SheetContent 
                side="right" 
                className="w-1/2 sm:max-w-xs bg-gray-900/90 backdrop-blur-lg"
              >
                <SheetHeader className="mb-6">
                  <SheetTitle>
                    <Link
                      href="/"
                      className="flex items-center space-x-2 group"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      <GraduationCap className="h-7 w-7 text-primary-foreground" />
                      <span className="font-bold text-xl text-primary-foreground">
                        {APP_NAME}
                      </span>
                    </Link>
                  </SheetTitle>
                </SheetHeader>
                <nav className="flex flex-col space-y-1">
                  {navLinks.map((link) => {
                    const isActive =
                      (pathname === link.href && (link.href === '/' || (pathname !== '/' && link.href.startsWith(pathname)))) || // Adjusted for better root matching
                      (link.href !== "/" && pathname.startsWith(link.href)) ||
                      (link.href === "/support" && isSupportActive);
                    return (
                      <SheetClose asChild key={link.href}>
                        <Link
                          href={link.href}
                          className={cn(
                            buttonVariants({ variant: 'ghost', size: 'lg' }),
                            'w-full justify-start gap-2 px-3 group hover:bg-transparent',
                            isActive
                              ? "text-active-nav-pink hover:text-white hover:bg-transparent"
                              : "text-gray-300 hover:text-white hover:bg-transparent"
                          )}
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          <link.icon className={cn("h-5 w-5", isActive ? "text-active-nav-pink group-hover:text-white" : "text-gray-300 group-hover:text-white")} />
                          {link.label}
                        </Link>
                      </SheetClose>
                    );
                  })}
                </nav>
              </SheetContent>
            </Sheet>
          </TooltipProvider>

          {/* Need Help Button */}
           <Button
            variant="default"
            size="sm"
            asChild
            className={cn(
              "group",
              "gap-1",
              "bg-primary-gradient",
              "text-primary-foreground",
              "bg-[length:200%_200%]",
              "bg-[position:0%_0%]",
              "hover:bg-[position:100%_100%]",
              "transition-all duration-500 ease-in-out",
              "ml-2"
            )}
          >
            <Link href="/support" className="inline-flex items-center justify-center gap-1 leading-none">
              <Heart className="transition-all duration-150 group-hover:fill-red-500 group-hover:scale-110" />
              <span className="leading-none">Need Help?</span>
            </Link>
          </Button>
        </div>
      </div>
    </header>
  );
}
