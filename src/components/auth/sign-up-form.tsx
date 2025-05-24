
"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Eye, EyeOff, Loader2, Facebook, Instagram, Linkedin, Twitter, Mail, User, Lock, CheckCircle2, MoveRight } from "lucide-react";
import { APP_NAME } from "@/lib/constants";
import { cn } from "@/lib/utils";
import signupImageSrc from '../../public/signup.png';
import { useToast } from "@/hooks/use-toast"; // Import useToast

const GoogleIcon = ({ className }: { className?: string }) => (
  <svg className={cn("h-5 w-5 mr-2", className)} viewBox="0 0 24 24" fill="currentColor">
    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
    <path d="M1 1h22v22H1z" fill="none"/>
  </svg>
);

const AppLogoPlaceholder = () => (
  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="mb-6">
    <circle cx="20" cy="20" r="18" fill="url(#logoGradient)" stroke="hsl(var(--primary))" strokeWidth="2"/>
    <path d="M12 18L20 12L28 18L20 24L12 18Z" fill="white"/>
    <path d="M20 24V30" stroke="white" strokeWidth="2" strokeLinecap="round"/>
    <defs>
      <linearGradient id="logoGradient" x1="0" y1="0" x2="40" y2="40" gradientUnits="userSpaceOnUse">
        <stop stopColor="hsl(var(--primary))"/>
        <stop offset="1" stopColor="hsl(var(--accent))"/>
      </linearGradient>
    </defs>
  </svg>
);

const signUpFormSchema = z.object({
  email: z.string().email({ message: "Please enter a valid email address." }),
  fullName: z.string().min(1, { message: "Full name is required." }),
  password: z.string()
    .min(8, { message: "Password must be at least 8 characters." })
    .regex(/[A-Z]/, { message: "Password must contain at least one uppercase letter." })
    .regex(/[a-z]/, { message: "Password must contain at least one lowercase letter." })
    .regex(/[0-9]/, { message: "Password must contain at least one number." })
    .regex(/[^A-Za-z0-9]/, { message: "Password must contain at least one symbol." }),
  confirmPassword: z.string().min(1, { message: "Please confirm your password." }),
}).refine(data => data.password === data.confirmPassword, {
  message: "Passwords do not match.",
  path: ["confirmPassword"], 
});

type SignUpFormValues = z.infer<typeof signUpFormSchema>;

export function SignUpForm() {
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [showPasswordCriteria, setShowPasswordCriteria] = useState(false);
  const { toast } = useToast(); // Initialize useToast

  const form = useForm<SignUpFormValues>({
    resolver: zodResolver(signUpFormSchema),
    defaultValues: {
      email: "",
      fullName: "",
      password: "",
      confirmPassword: "",
    },
    mode: "onTouched",
  });

  const passwordValue = form.watch("password");

  const passwordCriteria = [
    { label: "Least 8 characters", met: (passwordValue?.length || 0) >= 8 },
    { label: "Least one number (0-9) or a symbol", met: (/[0-9]/.test(passwordValue) || /[^A-Za-z0-9]/.test(passwordValue)) },
    { label: "Lowercase (a-z) and uppercase (A-Z)", met: (/[a-z]/.test(passwordValue) && /[A-Z]/.test(passwordValue)) },
  ];

  async function onSubmit(data: SignUpFormValues) {
    setIsLoading(true);
    console.log("Sign Up data to be sent to backend:", data);

    try {
      // Replace '/api/auth/signup' with your actual MERN backend endpoint
      const response = await fetch('/api/auth/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: data.email,
          fullName: data.fullName,
          password: data.password,
        }),
      });

      if (!response.ok) {
        // Handle non-2xx responses (e.g., 400, 409, 500)
        const errorData = await response.json().catch(() => ({ message: "An error occurred during sign up." }));
        throw new Error(errorData.message || `HTTP error! status: ${response.status}`);
      }

      // Assuming your backend returns some JSON data on success
      const result = await response.json();
      console.log("Sign up successful:", result);
      toast({
        title: "Account Created!",
        description: "Your account has been successfully created. You can now sign in.",
        variant: "default",
      });
      form.reset(); // Optionally reset form on success
      // Optionally redirect to sign-in page or dashboard
      // router.push('/sign-in'); 

    } catch (error) {
      console.error("Sign up error:", error);
      toast({
        title: "Sign Up Failed",
        description: (error as Error).message || "Could not create your account. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center p-4 font-poppins">
      <Card className="w-full max-w-4xl lg:max-w-5xl flex flex-col md:flex-row rounded-2xl shadow-2xl overflow-hidden">
        {/* Left Panel: Image */}
        <div className="hidden md:flex md:w-1/2 relative bg-primary-gradient">
          <Image
            src={signupImageSrc}
            alt="Sign up illustration"
            layout="fill"
            objectFit="contain" 
            placeholder="blur"
          />
        </div>

        {/* Right Panel: Form */}
        <div className="w-full md:w-1/2 bg-white p-8 sm:p-10 md:p-12 flex flex-col justify-center">
          <div className="mx-auto w-full max-w-md">
            <div className="flex justify-center">
              <AppLogoPlaceholder />
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-center text-gray-800 mb-6">
              Create an account
            </h2>

            <Button variant="outline" className="w-full mb-6 flex items-center justify-center py-3 rounded-lg border-gray-300 hover:bg-gray-50 text-gray-700 hover:text-primary">
              <GoogleIcon className="animate-pulse-icon" />
              Create account with Google
            </Button>

            <div className="my-6 flex items-center">
              <hr className="flex-grow border-gray-300" />
              <span className="px-4 text-sm text-gray-500">Or</span>
              <hr className="flex-grow border-gray-300" />
            </div>

            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
                <FormField
                  control={form.control}
                  name="fullName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-xs text-gray-500 flex items-center">
                      </FormLabel>
                      <FormControl>
                        <div className="relative">
                          <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400 pointer-events-none" />
                          <Input
                            placeholder="Enter your full name"
                            {...field}
                            className="bg-white border-gray-300 focus:border-primary focus:ring-primary pl-10"
                          />
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-xs text-gray-500 flex items-center">
                      </FormLabel>
                      <FormControl>
                        <div className="relative">
                           <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400 pointer-events-none" />
                          <Input
                            type="email"
                            placeholder="Enter your email address"
                            {...field}
                            className="bg-white border-gray-300 focus:border-primary focus:ring-primary pl-10"
                          />
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-xs text-gray-500 flex items-center">
                      </FormLabel>
                      <FormControl>
                        <div className="relative">
                          <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400 pointer-events-none" />
                          <Input
                            type={showPassword ? "text" : "password"}
                            placeholder="Create your password"
                            {...field}
                            onFocus={() => setShowPasswordCriteria(true)}
                            className="bg-white border-gray-300 focus:border-primary focus:ring-primary pl-10 pr-10"
                          />
                          <button
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                            aria-label={showPassword ? "Hide password" : "Show password"}
                          >
                            {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                          </button>
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {showPasswordCriteria && (
                  <ul className="space-y-1 text-xs text-gray-500 mt-2 mb-4 pl-1">
                    {passwordCriteria.map((criterion, index) => (
                      <li key={index} className="flex items-center">
                        <CheckCircle2 className={cn("h-3.5 w-3.5 mr-2", criterion.met ? "text-green-500" : "text-gray-300")} />
                        {criterion.label}
                      </li>
                    ))}
                  </ul>
                )}
                
                <FormField
                  control={form.control}
                  name="confirmPassword"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-xs text-gray-500 flex items-center">
                      </FormLabel>
                      <FormControl>
                        <div className="relative">
                          <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400 pointer-events-none" />
                          <Input
                            type={showConfirmPassword ? "text" : "password"}
                            placeholder="Re-type your password"
                            {...field}
                            className="bg-white border-gray-300 focus:border-primary focus:ring-primary pl-10 pr-10"
                          />
                           <button
                            type="button"
                            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                            aria-label={showConfirmPassword ? "Hide password" : "Show password"}
                          >
                            {showConfirmPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                          </button>
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <Button
                  type="submit"
                  disabled={isLoading}
                  className="w-full bg-primary-gradient hover:opacity-90 text-primary-foreground font-semibold py-3 rounded-lg flex items-center justify-center gap-2"
                >
                  {isLoading ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Creating Account...
                    </>
                  ) : (
                    <>
                      Create an account
                      <MoveRight className="h-4 w-4" />
                    </>
                  )}
                </Button>
              </form>
            </Form>

            <p className="mt-8 text-center text-sm text-gray-600">
              Already have an account?{" "}
              <Link href="/sign-in" className="font-semibold text-primary hover:underline">
                Login
              </Link>
            </p>

            <div className="mt-6 flex justify-center space-x-4">
              <Link href="#" className="text-gray-500 hover:text-gray-700">
                <Facebook className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-500 hover:text-gray-700">
                <Twitter className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-500 hover:text-gray-700">
                <Instagram className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-500 hover:text-gray-700">
                <Linkedin className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}


    